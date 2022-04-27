export const env = {
  pagSeguroApi: process.env.PAGSEGURO_API ?? '',
  accessToken: process.env.PAGSEGURO_ACCESS_TOKEN ?? '',
  pemFile: process.env.PAGSEGURO_PEM_FILE ?? '',
  keyFile: process.env.PAGSEGURO_KEY_FILE ?? '',
  basicAuthAccessToken: process.env.PAGSEGURO_BASIC_AUTH_ACCESS_TOKEN ?? '',
  grantType: process.env.PAGSEGURO_GRANT_TYPE ?? '',
  scope: process.env.PAGSEGURO_SCOPE ?? ''
}