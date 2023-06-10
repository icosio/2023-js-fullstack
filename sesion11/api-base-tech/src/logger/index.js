const winston = require('winston');
require('winston-daily-rotate-file')

const logger = winston.createLogger({
   // level: 'silly',
   level:process.env.LOGGER_LEVEL,
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss.ZZ' }),
        winston.format.printf(({ timestamp, service, level, message }) => `${timestamp} | ${service} | ${level} | ${message}`)
    ),
    defaultMeta: { service: 'user-defined-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        //new winston.transports.File({ filename: 'debug.log', level: 'degug' }),
        //new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.DailyRotateFile({
            level :'error',
            filename: './logs/error-app-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH-mm',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            // utc: true,
        }),
        new winston.transports.DailyRotateFile({
            filename: './logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH-mm',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            // utc: true,
        })
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.json(),
    }));
}

module.exports = logger