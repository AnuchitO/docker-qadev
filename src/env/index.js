module.exports = ((env) => ({
    apiBaseURL: env.API_BASE_URL || 'localhost',
    apiPort: env.API_PORT || 3000,
}))(process.env)