class BookInfoDecorator {
    constructor(){
        this._serviceName = 'BookInfoDecorator'
    }

    get serviceName(){
        return this._serviceName
    }

    async decorateBookInfo(bookInfo, historyInfo){

        let history = new Array()
        let daily = 0

        // 오늘 날짜 계산 yyyy-mm-dd format
        const date = new Date()
        const today = date.getFullYear() + '-' + ('0'+(date.getMonth() + 1)).slice(-2) + '-' + date.getDate()

        // history array
        for (const h of historyInfo){

            // 오늘이면 daily 계산 
            if (h.created_at.toISOString().split('T')[0] == today ){
                daily += h.reading_time
            }
            
            history.push({"id": h.id, 
                        "date": h.created_at.toISOString().split('T')[0],
                        "time": h.reading_time})
            
        }

        const data = {
            "book_id": bookInfo[0].book_id,
            "title" : bookInfo[0].title,
            "author" : bookInfo[0].author,
            "translators" : bookInfo[0].translators,
            "publisher" : bookInfo[0].publisher,
            "image" : bookInfo[0].image,
            "current_page" : bookInfo[0].current_page, 
            "total_page" : bookInfo[0].total_page,
            "history": history
        }

        return data
    }



}

module.exports = { BookInfoDecorator }