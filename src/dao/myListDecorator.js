class MyListDecorator {
    constructor(){
        this._serviceName = 'MyListDecorator'
    }

    get serviceName(){
        return this._serviceName
    }

    async decorateMyList(myList){
        const data = {
            "user_id": myList[0].user_id,
        }

        return data
    }



}

module.exports = { MyListDecorator }