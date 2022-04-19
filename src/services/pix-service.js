import { PagSeguroAPI } from '../api/pag-seguro-api.js';

export class PixService {
  constructor() {
    this.pagSeguroAPI = new PagSeguroAPI()
  }

  async getReceivedPix(params) {
    return await this.pagSeguroAPI.getReceivedPix(params)
  }
}