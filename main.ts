import ExpressMaker from './lib/ExpressMaker'
import SequelizeOrm from "./lib/SequelizeOrm"
import User from './app/models/User'

async function main() {
    const app = (new ExpressMaker()).app

    // 檢查mysql連線
    // await SequelizeOrm.connectTest()

    let user = await User.findOne({
        where: {
            id: 1
        }
    })

    app.listen(3000)
    console.log('server listen 3000')
}

export default main