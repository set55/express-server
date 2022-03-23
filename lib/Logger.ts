import *  as  winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import Moment from './Moment'
const { combine, timestamp, printf, label, colorize } = winston.format

// 訂定log文字格式
const loggerFormat = printf(({ level, message, label, timestamp }) => {
    return `${Moment.format(timestamp)} [${label}] ${level}: ${message}`;
});

// 設定rotate log transport
const infoTransport: DailyRotateFile = new DailyRotateFile({
    filename: './log/app/express-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});

// 監聽log rotate事件
// transport.on('rotate', function (oldFilename, newFilename) {
//     // do something fun
// });

// 設定log格式
const combineThing = combine(
    label({ label: 'API' }),
    timestamp(),
    loggerFormat,
    colorize()
)

const Logger = winston.createLogger({
    format: combineThing,
    transports: [
        infoTransport,
        new winston.transports.File({ filename: './log/app/error.log', level: 'error' }),
        new winston.transports.Console({
            level: 'info',
            format: combineThing
        }),
    ]
});

export default Logger