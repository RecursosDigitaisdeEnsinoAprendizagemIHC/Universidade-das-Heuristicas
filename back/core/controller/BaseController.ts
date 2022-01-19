import { getDbConnection } from './../database/Database';
import { Request, Response } from 'express'

class BaseController {
  constructor() {
    // TODO - Rodar banco
    // getDbConnection()
  }

  getInfo(req: Request, res: Response) {
    res.send('About birds')
  }
}

export default new BaseController()