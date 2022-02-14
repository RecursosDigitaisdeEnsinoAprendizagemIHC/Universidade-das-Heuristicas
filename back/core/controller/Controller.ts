import { getDbConnection } from '../database/Database';
import { Request, Response } from 'express'

class Controller {
  constructor() {
    // TODO - Rodar banco
    // getDbConnection()
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
    const user = req.body

    // TODO - add no banco, retornar o resultado
    console.log(user)

    res.send(true)
  }
}

export default new Controller()