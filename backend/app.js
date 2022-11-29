'use strict'

require('dotenv').config()
const app = require('./src/config/express')

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
