import 'dotenv/config'
import { app } from './routes.js'

app.listen(3333, () => console.log('Server running!'))