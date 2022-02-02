import { Router } from 'express'
import BaseController from '../controller/Controller'

export const router = Router();

router.get('/ranking-list', BaseController.getRankingList)