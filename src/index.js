const tmi = require("tmi.js");
const connectToMongoDB = require("./utils/connectMongo");
const commands = require("./commands");
require("dotenv").config();

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: "shushuBot",
        password: process.env.TWITCH_PASSWORD,
    },
    channels: ["shushu010829"],
});

connectToMongoDB();

client.connect();
client.on("message", (channel, tags, message, self) => {
    if (self) return;

    const [command, ...params] = message.split(' ');
    const response = commands[command.toLowerCase()];

    if (typeof response === 'function') {
        client.say(channel, `@${tags.username} ${response(params.join(' '))}`);
    } else if (response) {
        client.say(channel, response);
    }
});
