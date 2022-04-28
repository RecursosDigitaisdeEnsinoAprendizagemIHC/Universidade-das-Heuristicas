import { Router } from 'express'
import Controller from '../controller/Controller'

export const router = Router();


router.get('/ranking-list', (req, res) => Controller.getRankingList(req, res))

router.post('/create-user', (req, res) => Controller.createUser(req, res))

router.get('/get-fases', (req, res) => Controller.getFases(req, res))

router.post('/update-score', (req, res) => Controller.updateScore(req, res))

router.get('*', (req, res) => res.json({ Status: 'Rodando' }))