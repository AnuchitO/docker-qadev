module.exports = ((env) => ({
    API_BASE_URL: env.API_BASE_URL || 'localhost',
    API_PORT: env.API_PORT || 3000,
}))(process.env)