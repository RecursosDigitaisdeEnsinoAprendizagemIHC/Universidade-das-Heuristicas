import { Router } from 'express'
import { router } from './routes/routes'

export const appRouter = Router();

appRouter.use('/', router)