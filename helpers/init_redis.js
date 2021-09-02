const redis = require('redis');

const client = redis.createClient({
    host : '127.0.0.1',
    port : '1337'
});

client.on('connect', () => console.log("Connecting to redis..."));

client.on('ready', () => console.log("Connected to redis and ready to use..."));

client.on('error', err => console.log(err.message))

client.on('end', () => console.log("Disconnected from redis..."));

process.on("SIGINT",() => client.quit());

module.exports = client;