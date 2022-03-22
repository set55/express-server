import createApplication, {Express} from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'
import router from '../route'

class ExpressMaker {
    app: Express

    constructor() {
        this.app = createApplication()
        this.app.use(helmet())
        this.app.use(cookieParser())
        this.app.use(morgan('tiny'))
        this.app.use(cors())
        this.app.use(router)
        console.log(process.env.TEST, 123)
    }
}

export default  ExpressMaker

