const { BookTimerService } = require('../services')


const getBookTimer = async (ctx)=>{
    const {
        params: {
            bookId
        }
    } = ctx

    const inst = new BookTimerService()

    if(bookId){
        ctx.body = await inst.getBookTimerByBookId(bookId)
    }
}

const postReadingTime = async (ctx)=>{
    const {
        params: {
            bookId
        }
    } = ctx

    const readingTime = ctx.request.body.reading_time


    const inst = new BookTimerService()

    if(bookId && readingTime){
        ctx.body = await inst.addReadingTime(bookId, readingTime)
    }
}


module.exports = { 
    getBookTimer,
    postReadingTime
}