module.exports = ((env) => ({
    apiBaseURL: env.API_BASE_URL || 'localhost'
}))(process.env)