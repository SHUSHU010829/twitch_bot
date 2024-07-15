const tmi = require("tmi.js");
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

client.connect();
client.on("message", (channel, tags, message, self) => {
  // console.log("🚀 ~ client.on ~ tags:", tags);
  // subscriber === true
  if (self) return;

  const [command, ...params] = message.split(" ");
  const response = commands[command.toLowerCase()];

  if (typeof response === "function") {
    const result = response(params.join(" "));
    if (result instanceof Promise) {
      result
        .then((reply) => {
          client.say(channel, `@${tags.username} ${reply}`);
        })
        .catch((err) => {
          console.error(err);
          client.say(channel, `@${tags.username} 發生錯誤，請稍後再試`);
        });
    } else {
      client.say(channel, `@${tags.username} ${result}`);
    }
  } else if (response) {
    client.say(channel, response);
  }
});
