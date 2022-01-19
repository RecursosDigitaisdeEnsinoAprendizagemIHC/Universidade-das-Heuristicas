import { Router } from 'express'
import BaseController from '../controller/BaseController'

export const baseRouter = Router();

baseRouter.get('/', BaseController.getInfo)