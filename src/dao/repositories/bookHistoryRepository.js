const pgClient = require('../connections/postgresql')

class BookHistoryRepository {
    constructor(){
        this._repositoryName = 'BookHistoryRepository'
    }
    get name(){
        return this._repositoryName
    }


    async getBookHistoryListByBookId(bookId){
        const query = pgClient.select('*')
                        .from('tbl_mybook as tb')
                        .join('tbl_myhistory as th', 'tb.id','=','th.mybook_id')
                        .where('tb.id', bookId)
                        .whereNull('tb.deleted_at')
                        .whereNull('th.deleted_at')
                        .orderBy('th.created_at', 'desc')
                        .limit(100)

        return await query
    }

    async getBookHistoryCountByAccountId(accountId){
        const query = pgClient
                        .from('tbl_myhistory as th')
                        .where('th.user_id', accountId)
                        .count()
                        .first()
        return await query
    }

    async postReadingTimeByBookId(userId, bookId, readingTime){
        
        const query = pgClient.transaction(function(trx) {
                                        pgClient.insert({id:pgClient.raw('gen_random_uuid()') , 
                                        user_id : userId, 
                                        mybook_id: bookId, 
                                        reading_time: readingTime})
                                        .into('tbl_myhistory')
                                        .then(trx.commit) 
                                        .catch(trx.rollback)})
                                        .catch(function(err) {
                                            return 0;
                                        });

        return await query


    }
}

module.exports = {
    BookHistoryRepository
}