const pgClient = require('../connections/postgresql')

class MyListRepository {
    constructor(){
        this._repositoryName = 'MyListRepository'
    }
    get name(){
        return this._repositoryName
    }

    async getMyList(sortType) {
        const query = pgClient.select('id as book_id', 'title', 'authors as author', 'translators', 'publisher', 'thumbnail_url as titleImage', 'reading', 'favorite')
                        .from('tbl_mybook as tb')
      
        if (sortType === 'latest') {
          query.orderBy('updated_at', 'desc');
        } else if (sortType === 'past') {
          query.orderBy('updated_at', 'asc');
        } else if (sortType === 'favorite') {
          query.andWhere('favorite', true).orderBy('updated_at', 'desc');
        } else if (sortType === 'reading') {
          query.andWhere('reading', true).orderBy('updated_at', 'desc');
        }
        // console.log("sortType입니다. ",sortType)

        return await query
      }

    async getBookInfo(bookId){
        const query = pgClient.select('id as book_id', 'title', 'authors as author', 'translators', 'publisher', 'thumbnail_url as titleImage', 'current_page', 'total_page', 'meta')
                        .from('tbl_mybook as tb')
                        .where('tb.id', bookId)
        return await query
    }
}

module.exports = {
    MyListRepository,
}