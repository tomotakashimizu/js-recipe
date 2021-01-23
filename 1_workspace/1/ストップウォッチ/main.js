const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  // count を更新
  count += 1
  console.log(count) // setInterval確認のために追加
  // count を秒単位にして表示
  display.textContent = count / 100
}

// button.onclick = function() {
//   // 10ms ごとに countUp を実行するように登録する
//   setInterval(countUp, 10)
//   button.textContent = "stop"
// }

// このままだとstopできない
// タイマーが複数個生成されてしまう

let id = null

button.onclick = function() {
  if (id === null) {
    // start
    // setInterval(countUp, 10) を実行した結果（戻り値）が、
    // タイマーの識別子（ id ）なのです。
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
