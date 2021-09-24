const server = require('./bin/server')

server.listen(process.env.PORT, () => console.log(`${process.env.APP_NAME} is listening on port ${process.env.PORT}`))
