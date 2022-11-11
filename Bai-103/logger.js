import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
    TYPE_INFO,
} from './contant.js'


function logger(log, type = TYPE_LOG) {
    console[type](log)
}


export { default as logger2} from './logger.js'