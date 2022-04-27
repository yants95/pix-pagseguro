import { PixService } from '../services/pix-service.js'

export class PixController {
  constructor () {
    this.pixService = new PixService()
  }

  async getReceivedPix (_, res) {
    try {
      const receivedPix = await this.pixService.getReceivedPix()
      res.status(200).json(receivedPix)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async generateToken (_, res) {
    try {
      const token = await this.pixService.generateToken()
      res.status(200).json(token)
    } catch (error) {
      console.log('error', error)
      res.status(500).json(error)
    }
  }
}
