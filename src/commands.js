const commands = {
  "!指令": "目前指令：!樂透 !骰 !運勢 !點歌 !dc !ffz !bgm",
  "!樂透": getLottoNumbers,
  "!骰": getDice,
  "!運勢": getFortune,
  "!點歌": getSongHandler,
  "!請問": "問就是下次一定！",
  "!bgm":
    "Background Music Made by Hunter Milo. > https://youtu.be/ewywwZe7cDI?si=HP1qpQicjPB2djN_",
  "!開台":
    "幾乎天天都會小開一下，平日時段看我下班時間，假日大概都是中午開台除非我睡死 # 佛系開台！如果有請假會在我的 DC 群告知 ~",
  "!ffz":
    "在線上應用程式插件下載 FrankerFaceZ：https://chrome.google.com/webstore/detail/frankerfacez/fadndhdgpmmaapbmfcknlfgcflmmmieb?hl=zh-TW，進 FFZ 設定 Add-Ons 把 7tv 打開就能看到啦！",
  "?": "shushu23What",
  老: "我才不老，我三歲！ FrogeMad",
  早安: "早安！晚安！友露安！ Evilowo",
  安安: "噗噗安安 shushu23Hi",
  ㄤㄤ: "ㄤ什麼ㄤ！好好打字！ mindyouFroge",
  副歌: "我就是副歌超人！ OkaygeClap",
  嗆: "哪有倫家最溫柔了~~~ shushu23Love",
  派: "哪有倫家最溫柔了~~~ shushu23Love",
};

function getLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 49) + 1);
  }
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  return `樂透預測：${sortedNumbers.join(", ")}，祝您中大獎！🎰`;
}

function getDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  return `骰到${dice}點`;
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
  return `今日運勢：${result}`;
}

async function getSong(songName) {
  const response = await fetch("https://shustream.zeabur.app/songList/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: songName }),
  });

  if (response.status === 201) {
    return `已收到你的點歌訊息：${songName}`;
  }
  return `點歌失敗 :P`;
}

async function getSongHandler(songName) {
  const result = await getSong(songName);
  return result;
}

module.exports = commands;
