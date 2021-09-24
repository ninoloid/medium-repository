if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const cors = require('cors')
const express = require('express')

require('../queue/queueWatchers').watch()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health-check', (req, res) => res.send(`${process.env.APP_NAME} is running propery`))

module.exports = app
