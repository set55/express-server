import {Sequelize} from 'sequelize'
import 'dotenv/config'
import to from 'await-to-js'
import Logger from "./Logger";

class SequelizeOrm {
    static sequelize = new Sequelize(process.env.MYSQL_DATABASE,
        process.env.MYSQL_USERNAME,
        process.env.MYSQL_PASSWORD,
        {
            host: process.env.MYSQL_HOST,
            dialect: 'mysql'
        })

    static async connectTest() {
        let [err] = await to (SequelizeOrm.sequelize.authenticate())
        if (err) {
            Logger.error(`mysql connect fail:`, err)
            return
        }
        Logger.info('connect success')
    }
}

export default SequelizeOrm