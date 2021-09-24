const { Worker } = require('bullmq')
const { concurrency, connection } = require('../config/config')

const worker = new Worker('Send Email', async job => {
  if (job.name === 'Send invitation email') {
    try {
      const { email } = job.data
      // do some work to send invitation email and throw error if failed
      return `Email sent to ${email} successfully`
    } catch (err) {
      throw err
    }
  }
}, { concurrency, connection })

worker.on('completed', (job, returnedValue) => {
  // function to handle success job
  console.log(returnedValue)
})

worker.on('failed', (job, failedReason) => {
  // function to handle failed job
  console.log(`Error, ${failedReason.message}`)
})

worker.on('error', err => {
  // function to handle error
  console.log('Send Email\'s worker error\n', err)
})
