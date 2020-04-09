// 要素オブジェクトの取得
var getResult = document.getElementById('getResult');
var result = document.getElementById('result');

// イベントの登録
getResult.addEventListener('click', function() {
  var omikujiResult = omikuji.getResult();

  switch (omikujiResult) {
    case "大吉" :
      result.className = "daikichi";
      break;

    case "吉" :
      result.className = "kichi";
      break;

    case "中吉" :
      result.className = "chukichi";
      break;

    case "小吉" :
      result.className = "shokichi";
      break;
    
    case "凶" :
      result.className = "kyo";
      break;

    default :
      result.className = null;
      break;
  }

  result.innerHTML = '結果は「' + omikujiResult + '」でした。';
});

// おみくじオブジェクトの定義
var omikuji = {
  results: ["大吉", "吉", "中吉", "小吉", "凶"],
  getResult: function() {
    var results = this.results;
    return results[Math.floor(Math.random() * results.length)];
  }
}
