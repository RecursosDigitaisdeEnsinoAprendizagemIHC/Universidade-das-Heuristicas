import { Router } from 'express'
import { baseRouter } from './routes/baseRouter'

export const appRouter = Router();

appRouter.use('/', baseRouter)