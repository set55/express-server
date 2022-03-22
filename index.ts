import ExpressMaker from './lib/ExpressMaker';
import 'dotenv/config'
const app = (new ExpressMaker()).app
console.log(process.env.TEST)

app.listen(3000)
console.log('server listen 3000')