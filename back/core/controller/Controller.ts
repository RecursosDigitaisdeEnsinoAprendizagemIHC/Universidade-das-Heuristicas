import { Jogador } from './../database/entity/Jogador';
import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm';
import { Fase } from './../database/entity/Fase';

class Controller {
  jogadorRepository: Repository<Jogador>
  fasesRepository: Repository<Fase>
  constructor() {
    this.jogadorRepository = getRepository(Jogador);
    this.fasesRepository = getRepository(Fase);
  }

  async getRankingList(req: Request, res: Response) {

    try {
      const ranking = await this.jogadorRepository.find({
        order: {
          pontuacaoTotal: 'DESC'
        }
      })
      res.status(200).json(ranking)
    } catch (error) {
      res.status(500).json(error)
    }
  }


  async createUser(req: Request, res: Response) {
    const user: Jogador = req.body as Jogador

    try {
      user.pontuacaoTotal = 0
      const newJogador = await this.jogadorRepository.create({ ...user }).save()
      res.json(newJogador)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getFases(req: Request, res: Response) {
    try {
      const fases = await this.fasesRepository.find({
        order: {
          minPontuacao: 'ASC'
        }
      })
      res.status(200).json(fases)
    } catch (error) {
      res.status(500).json(error)
    }
  }


  async updateScore(req: Request, res: Response) {
    const jogador: Jogador = req.body as Jogador

    const score: Partial<Jogador> = {
      pontuacaoTotal: jogador.pontuacaoTotal,
      questoesCertas: jogador.questoesCertas,
      questoesTentadas: jogador.questoesTentadas
    }

    try {
      await this.jogadorRepository.update(jogador.idJogador, score)
      res.json(true)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new Controller()