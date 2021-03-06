import fs from 'node:fs'
import path from 'node:path'
import { Agent } from 'node:https'
import { fileURLToPath } from 'url'
import axios from 'axios'

import { env } from '../config/env.js'
import { generateDates } from '../utils/date.js'

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
    const { initialDate, endDate } = generateDates()
    const { data } = await this.pagSeguroBaseURL.get('/instant-payments/pix', {
      params: {
        inicio: initialDate,
        fim: endDate
      },
    })
    return data
  }

  async generateToken() {
    const { data } = await this.pagSeguroBaseURL.post('/pix/oauth2', {
      grant_type: env.grantType,
      scope: env.scope
    }, {
      headers: {
        Authorization: `Basic ${env.basicAuthAccessToken}`
      }
    })
    return data
  }
}