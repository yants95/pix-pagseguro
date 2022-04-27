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
    data.pix = [
      {
        "endToEndId": "727f79e2dfbe410ab4356be6a49b3e53",
        "txid": "TesteTxId1234567891011121314151785",
        "valor": "1530.23",
        "horario": "2021-03-23T17:02:51Z"
      },
      {
        "endToEndId": "0a24552183c849cb8a073b6ae637b309",
        "txid": "TesteTxId1234567891011121314157894",
        "valor": "1.05",
        "horario": "2021-03-23T19:52:14Z"
      }
    ]
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