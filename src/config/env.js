export const env = {
  pagSeguroApi: process.env.PAGSEGURO_API ?? '',
  accessToken: process.env.PAGSEGURO_ACCESS_TOKEN ?? '',
  pemFile: process.env.PAGSEGURO_PEM_FILE ?? '',
  keyFile: process.env.PAGSEGURO_KEY_FILE ?? ''
}