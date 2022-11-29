require('dotenv').config()

const IS_DEV = process.env.IS_DEV
const GUTENDEX_API = 'http://gutendex.com/books/'

module.exports = { IS_DEV, GUTENDEX_API }
