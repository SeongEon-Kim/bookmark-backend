const { MyListService } = require('../services')

// const getMyList = async (ctx)=>{
//     //const userId = ctx.request.header.id;
//     const { sortType } = ctx.query;

//     const mylistService = new MyListService()

//     ctx.body = mylistService.getMyList(sortType)
// }

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
    //getMyList,
    getBookInfo
}