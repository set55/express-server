import Greeter from "../models/Greeter";

class DemoController {
    index(req, res) {
        let greeter = new Greeter('Set')
        res.send(greeter.greet())
    }
}

export default DemoController
