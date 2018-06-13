const API_URL = 'API_URL'

const dev = {
    API_URL: 'http://localhost:8080/government/api/'
}

const prod = {
    API_URL:  'http://192.168.24.43:8080/government/api/'
}

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default({
    API_URL: config[API_URL]
})
