import express, { Router, json } from 'express'
import cors from 'cors'

import { PixController } from './controllers/pix-controller.js'

export const app = express()
const router = Router()
const pixController = new PixController()

app.use(cors())
app.use(json())
router.get('/received-pix', (req, res) => pixController.handle(req, res))
app.use(router)