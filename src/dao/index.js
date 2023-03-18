const accountDao = require('./accountDao')
const postingDao = require('./postingDao')
const readingHistoryDao = require('./bookTimerDao')
const mylistDao = require('./mylistDao')

module.exports = {
    ...accountDao,
    ...postingDao,
    ...readingHistoryDao,
    ...mylistDao
}