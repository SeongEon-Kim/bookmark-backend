const { Router } = require('express')
const { boardRouteV2 } = require('./boardRouteV2')

const V2 = ()=>{
    const router = Router()
    boardRouteV2(router)

    return router
}

module.exports = { V2 }