const button100 = document.getElementById("button-100")
const ryokucha = document.getElementById("ryokucha")
const display = document.getElementById("display")
const moneyDisplay = document.getElementById("money-display")
const saifuMoneyDisplay = document.getElementById("saifu-money-display")
// const otsuri = document.getElementById("otsuri")

// 僕の財布の状態をあらわす値
let saifuMoney = 1000

// 自動販売機の状態をあらわす値（のひとつ）
let money = 0

// 自動販売機のフロー（のひとつ）
button100.onclick = function() {
  money += 100
  moneyDisplay.textContent = money + "円"
  saifuMoney -= 100
  saifuMoneyDisplay.textContent = saifuMoney + "円"
}

ryokucha.onclick = function() {
  if (money >= 150) {
    // お金をひく
    money -= 150
    moneyDisplay.textContent = money + "円"
    // 商品を出す
    display.textContent += "🍵"
  }
}
