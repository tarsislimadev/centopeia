const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const config = require('./config.js')
const pack = require('./package.json')

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static('public'))
app.use('/api/v1', require('./routes/api/v1'))

io.on('connection', (socket) => {
  console.log('a user connected')
})

server.listen(config.PORT, () => console.log(`centopeia ${pack.version} listening on port ${config.PORT}`))
