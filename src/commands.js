const commands = {
    '!指令': '目前指令：!樂透 !骰 !運勢 !dc !ffz !bgm，剩下自己猜~',
    '!樂透': getLottoNumbers,
    '!骰': getDice,
    '!運勢': getFortune,
    '!點歌': getSong,
    '?': 'shushu23What',
    '老': '我才不老，我三歲！ FrogeMad',
    '早安': '早安！晚安！友露安！ Evilowo',
    'ㄤㄤ': 'ㄤ什麼ㄤ！好好打字！ mindyouFroge',
    '副歌': '我就是副歌超人！ 其它都不會 OkaygeClap',
    '嗆': '哪有倫家最溫柔了~~~~ shushu23HiLove',
    '派': '哪有倫家最溫柔了~~~~ shushu23HiLove',
    '安安': sayHello,
};

function getLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    return `樂透預測：${sortedNumbers.join(', ')}，祝您中大獎！🎰`;
}

function getDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    const emoji = dice === 1 ? '🎲' : dice === 2 ? '⚀' : dice === 3 ? '⚁' : dice === 4 ? '⚂' : dice === 5 ? '⚃' : '⚄';
    return `骰到${dice}點 ${emoji}`;
}

function getFortune() {
    const strawList = [
            "🌈 大吉",
            "🔆 中吉",
            "✨ 小吉",
            "💤 平淡無奇",
            "💥 凶",
            "🔥 大凶",
        ];
    const result = strawList[Math.floor(Math.random() * strawList.length)];
    console.log(result)
    return `今日運勢：${result}`;
}

function getSong() {
    console.log('點歌指令');
    return 
}

function sayHello() {
    return "噗噗安安 shushu23Hi";
}

module.exports = commands;
