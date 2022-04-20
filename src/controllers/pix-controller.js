import { PixService } from '../services/pix-service.js'

export class PixController {
  constructor () {
    this.pixService = new PixService()
  }

  async handle (_, res) {
    try {
      const receivedPix = await this.pixService.getReceivedPix()
      res.status(200).json(receivedPix)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
