const _config = {
    'development': {
        BASE_URL:'http://172.16.10.39:8080/',//sit
        BASE_FILE_URL: '/',
    },
    'production': {
        BASE_URL:'http://116.236.220.210:34081/byx-app-api/1.0.0',//sit
        BASE_FILE_URL: '/',
    }
}
const config = _config[process.env.NODE_ENV]
export const BASE_URL= config.BASE_URL
export const BASE_FILE_URL= config.BASE_FILE_URL
