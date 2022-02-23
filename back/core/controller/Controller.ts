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
    const alunos = [
      {
        id: 1,
        nome: 'Participante 1',
        pontos: 10,
        questoes: 2,
      },
      {
        id: 2,
        nome: 'Participante 2',
        pontos: 30,
        questoes: 7,
      },
      {
        id: 3,
        nome: 'Participante 3',
        pontos: 2,
        questoes: 1,
      },
    ]
    res.json(alunos)
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
}

export default new Controller()