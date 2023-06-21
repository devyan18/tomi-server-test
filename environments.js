require('dotenv').config()

const environments = {
    PORT: process.env.PORT,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
}

module.exports = { environments }