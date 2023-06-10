require('dotenv').config()
const logger = require("./logger");

console.log('Estoy vivo 😎');

logger.info('Este es un mensaje de tipo info')
logger.log('warn', 'Este es un mensaje de tipo warn')
logger.error('Este es un mensaje de tipo error')
logger.debug('Este es un mensaje de tipo debug')
// logger.silly(JSON.stringify(process.env))
logger.silly(process.env.S3_BUCKET)
logger.silly(process.env.SECRET_KEY)
