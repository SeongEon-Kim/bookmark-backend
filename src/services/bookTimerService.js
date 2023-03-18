const validator = require('validator')
const { InvalidUUID, AccountNotFound, MyBookNotFound } = require('./errorService')
const { BookTimerDao } = require('../dao/bookTimerDao')

class BookTimerService {
    constructor(){
        this._serviceName = 'BookTimerService'
    }

    get serviceName(){
        return this._serviceName
    }

    async getBookTimerByBookId(bookId){

        // uuid type check
        if (!validator.isUUID(bookId)){
            throw new InvalidUUID(bookId)
        }

        const bookTimerDao = new BookTimerDao()

        const bookTimerInfo = await bookTimerDao.getBookTimerInfoByBookId(bookId)

        return bookTimerInfo
    }

    async addReadingTime(bookId, readingTime){

        // uuid type check
        if (!validator.isUUID(bookId)){
            throw new InvalidUUID(bookId)
        }

        // number type check
        if (isNaN(readingTime)|| readingTime == 0){
            throw new InvalidINT(readingTime)
        }

        const bookTimerDao = new BookTimerDao()

        // add new timer history
        const addedHistory = await bookTimerDao.postReadingTimeInfo(bookId, readingTime)

        if (!addedHistory.data){
            throw new InternalServerError()
        }

        const bookTimerInfo = await bookTimerDao.getBookTimerInfoByBookId(bookId)

        return bookTimerInfo
    }


}

module.exports = { BookTimerService }