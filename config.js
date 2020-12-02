const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "database": {
        "host": process.env.HOST,
        "port": process.env.PORT,
        "user": process.env.USER,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE
    },
    "secret": process.env.SECRET
};