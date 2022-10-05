import { Jogador } from './../database/entity/Jogador';
import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm';
import { Fase } from './../database/entity/Fase';
import { success } from './helpers/success';
import { makeResponse } from './helpers/makeResponse';
import { serverError, updateError } from './helpers/erros';

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
      return makeResponse(res,success(ranking))
    } catch (error) {
      return makeResponse(res,serverError('Erro ao listar ranking.'))
    }
  }


  async createUser(req: Request, res: Response) {
    const user: Jogador = req.body as Jogador

    try {
      user.pontuacaoTotal = 0
      const newJogador = await this.jogadorRepository.create({ ...user }).save()
      return makeResponse(res, success(newJogador))
    } catch (error) {
      return makeResponse(res, serverError('Erro ao criar usuário.'))
    }
  }

  async getFases(req: Request, res: Response) {
    try {
      const fases = await this.fasesRepository.find({
        order: {
          minPontuacao: 'ASC'
        }
      })
      return makeResponse(res, success(fases))
    } catch (error) {
      return makeResponse(res, serverError('Erro ao criar buscas fases.'))
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
      return makeResponse(res, success(true))
    } catch (error) {
      return makeResponse(res, updateError('score'))
    }
  }
}

export default new Controller()