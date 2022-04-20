import fs from 'node:fs'
import path from 'node:path'
import { Agent } from 'node:https'
import { fileURLToPath } from 'url'
import axios from 'axios'

import { env } from '../config/env.js'
import { generateDate } from '../utils/date.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const keyFile = fs.readFileSync(path.resolve(__dirname, `../certificates/${env.keyFile}`));
const pemFile = fs.readFileSync(path.resolve(__dirname, `../certificates/${env.pemFile}`))

export class PagSeguroAPI {
  constructor () {
    this.pagSeguroBaseURL = axios.create({
      baseURL: env.pagSeguroApi,
      headers: {
        Authorization: `Bearer ${env.accessToken}`
      },
      httpsAgent: new Agent({
        cert: pemFile,
        key: keyFile
      })
    })
  }

  async getReceivedPix() {
    const { data } = await this.pagSeguroBaseURL.get('/instant-payments/pix', {
      params: {
        inicio: generateDate(-1),
        fim: generateDate(+1)
      },
    })
    return data
  }
}