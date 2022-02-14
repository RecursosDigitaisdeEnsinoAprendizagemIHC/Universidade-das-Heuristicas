import { Router } from 'express'
import Controller from '../controller/Controller'

export const router = Router();

router.get('/ranking-list', Controller.getRankingList)

router.post('/create-user', Controller.createUser)