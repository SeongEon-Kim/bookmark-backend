const { config } = require('../../config/config.js')
const Winston = require('winston')

const log = (()=>{
    const envLogLevel = {
        local: 'debug',
        dev: 'debug',
        stage: 'debug',
        prod: 'notice',
        unitTest: 'alert',
        integrationTest: 'alert',
    }
    const logLevel = envLogLevel[config.App.ENV] || 'debug'
    return Winston.createLogger({
        levels: Winston.config.syslog.levels,
        format: Winston.format.json(),
        transports: [new Winston.transports.Console({ level: logLevel })],
    });
})()

module.exports = { log }