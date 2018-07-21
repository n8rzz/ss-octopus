'use strict';

require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const userRouter = require('./routes/user');

// const REDIS_OPTIONS = {};
const PORT_NUMBER = process.env.PORT_NUMBER || 8080;
const LOG_LEVEL = process.env.LOG_LEVEL || 'combined';

const redisClient = redis.createClient('6379', 'redis');

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

app.use(morgan(LOG_LEVEL));
app.use(session({
    saveUninitialized: true,
    store: new RedisStore({
        client: redisClient
    }),
    secret: 'llamasaurus',
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true
    }
}));

app.use('/', userRouter);

app.listen(PORT_NUMBER, () => {
    console.log(`${process.env.APP_NAME} listening on port ${PORT_NUMBER}!`);
});
