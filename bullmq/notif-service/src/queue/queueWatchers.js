const { QueueScheduler } = require('bullmq')
const { connection } = require('./config/config')

const watch = () => {
  require('./workers')
  new QueueScheduler('Send Email', { connection })
}

module.exports = {
  watch
}
