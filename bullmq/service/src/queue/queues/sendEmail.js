const { Queue } = require('bullmq')
const { connection } = require('../config/config')

const sendEmailQueue = new Queue('Send Email', { connection })

const add = (jobName, payload, options = {}) => {
  sendEmailQueue.add(jobName, payload, { delay: options.delay })
}

module.exports = {
  add,
  queue: sendEmailQueue
}
