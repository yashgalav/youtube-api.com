const http = require('http')
const app = require("../API/app")
const port = 3000

const server = http.createServer(app)
server.listen(port , () => {
    console.log('app is running on port '+port)
})