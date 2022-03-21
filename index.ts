import ExpressMaker from '@set55605/express-base';
import router from './route'
const app = (new ExpressMaker()).app
app.use(router)

app.listen(3000)
console.log('server listen 3000')