const tmi = require("tmi.js");
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
    if (self || !message.startsWith('!')) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if (command === '樂透') {
        const getLottoNumbers = () => {
            const numbers = new Set();
            // 隨機選擇六個不重複的號碼
            while (numbers.size < 6) {
                numbers.add(Math.floor(Math.random() * 49) + 1);
            }
            // 從小到大排序
            const sortedNumbers = [...numbers].sort((a, b) => a - b);
            return sortedNumbers;
        };

        const lottoNumbers = getLottoNumbers();
        client.say(channel, `@${tags.username} 樂透預測：${lottoNumbers.join(', ')}，祝您中大獎！🎰`);
    }
});
