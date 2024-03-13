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
    if (self) return;

    if (message.toLowerCase() === '!樂透') {
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
    } else if (message.toLowerCase() === '!骰') {
        const dice = Math.floor(Math.random() * 6) + 1;
        const emoji = dice === 1 ? '🎲' : dice === 2 ? '⚀' : dice === 3 ? '⚁' : dice === 4 ? '⚂' : dice === 5 ? '⚃' : '⚄';
        client.say(channel, `@${tags.username} 骰到${dice}點 ${emoji}`);
    } else if (message.toLowerCase() === '!運勢') {
        const strawList = [
            "🌈 大吉",
            "🔆 中吉",
            "✨ 小吉",
            "💤 平淡無奇",
            "💥 凶",
            "🔥 大凶",
        ];
        const result = strawList[Math.floor(Math.random() * strawList.length)];
        client.say(channel, `@${tags.username} 今日運勢：${result}`);
    } else if (message.toLowerCase() === '?') {
        client.say(channel, 'shushu23What');
    } else if (message.toLowerCase() === '老') {
        client.say(channel, '我才不老，我三歲！ FrogeMad  ');
    } else if (message.toLowerCase() === '早安') {
        client.say(channel, '早安！晚安！友露安！ Evilowo ');
    } else if (message.toLowerCase() === 'ㄤㄤ') {
        client.say(channel, 'ㄤ什麼ㄤ！好好打字！ mindyouFroge');
    } else if (message.toLowerCase() === '副歌') {
        client.say(channel, '我就是副歌超人！ 其它都不會 OkaygeClap');
    } else if (message.toLowerCase() === '嗆' || message.toLowerCase() === '派') {
        client.say(channel, '哪有倫家最溫柔了~~~~ shushu23HiLove');
    } else if (message.toLowerCase() === '點歌') {
        client.say(channel, '可以用忠誠點數點歌喔！但請做好點了十首我只會唱一首的準備 peepoShy');
    } else if (message.toLowerCase() === '安安') {
        client.say(channel, `@${tags.username} 噗噗安安 shushu23Hi`);
    }
});
