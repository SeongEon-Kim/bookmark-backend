const { MyListService } = require('../services')

const getMyList = async (ctx)=>{
    //const userId = ctx.request.header.id;
    const { sortType } = ctx.query;

    const mylistService = new MyListService()

    ctx.body = await mylistService.getMyList(sortType)

    ctx.body.meta = {
        sortType: sortType,
        requestId: ctx.state.requestId,
        now: +new Date(),
    }
}

const getBookInfo = async (ctx)=>{
    const {
        params: {
            bookId
        }
    } = ctx
    //const uuid = req.get('UUID');
    const bookinfoService = new MyListService()
    
    if(bookId){
        ctx.body = await bookinfoService.getBookInfo(bookId)
    }

    
}

module.exports = { 
    getMyList,
    getBookInfo
}