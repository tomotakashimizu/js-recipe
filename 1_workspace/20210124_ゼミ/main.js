const input = document.getElementById("input")
const button = document.getElementById("button")
const display = document.getElementById("display")

// let list = 値 ? 値が空じゃなければこの値を採用 : 値が空の場合この値を採用
let list = localStorage.list ? JSON.parse(localStorage.list) : []

// テキストの保存
const saveText = function(textData) {
  // listにtextDataを追加する
  list.push(textData)

  // localStorage.listにJSON化したlistを保存
  localStorage.list = JSON.stringify(list)
}

// 保存したテキストの削除
const removeText = function(textData) {
  // 削除しようとしているtextDataのidと一致している
  // list(保存済み)のidがあるかどうかを探し、あった場合その配列のindexを返す
  const index = list.findIndex(function(item) {
    return item.id === textData.id
  })

  // splice を使って、index 番目から 1 個を list から取り除くことができる
  list.splice(index, 1)
  // 削除したlistを保存
  localStorage.list = JSON.stringify(list)

  // （補足）findIndex はアロー関数を使うとシンプルに書ける
  // const index2 = list.findIndex((item) => item.id === textData.id)
}

// 保存したカードを画面に表示する
const addCard = function(textData) {
  // card を作る
  const card = document.createElement("div")
  const textSpan = document.createElement("span")
  textSpan.textContent = textData.text
  card.append(textSpan)
  // card.textContent = textData

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = function() {
    // cardを消す
    card.remove()

    // ローカルストレージから消す
    removeText(textData)
  }
  card.append(deleteButton)

  // card を追加する
  display.append(card)

  input.value = null
}

button.onclick = function() {
  if (input.value == "") {
    alert(
      "入力欄に何も入力されていません。テキストを入力してから保存してください。",
    )
    return
  }

  // オブジェクト型を作る
  const textData = { text: input.value, id: Date.now() }
  // テキストの保存
  saveText(textData)
  addCard(textData)
}

input.onkeypress = function(e) {
  if (e.key == "Enter") {
    if (input.value == "") {
      alert(
        "入力欄に何も入力されていません。テキストを入力してから保存してください。",
      )
      return
    }

    // オブジェクト型を作る
    const textData = { text: input.value, id: Date.now() }
    // テキストの保存
    saveText(textData)
    addCard(textData)
  }
}

// 初期表示（textDataの読み込み）（画面が表示された時、リロードされた時に読まれる）
for (let i = 0; i < list.length; i++) {
  addCard(list[i])
}

// // 保存
// localStorage.name = "[1, 2, 3]" // JSON
// localStorage.setItem("name", "[1, 2, 3]") // JSON

// // 取得
// localStorage.name

// // 脱 JSON化
// JSON.parse(localStorage.name)

// // JSON化
// JSON.stringify([1, 2, 3])
// // 脱 JSON化
// JSON.stringify("[1, 2, 3]")
//

// splice を使って、n 番目から m 個を list から取り除くことができる
// array.splice(n, m)
//
// const list = ["aa", "bb"]
// list.splice(0, 1)
// console.log(list) // ["bb"]
//
// // テキストの情報をもつオブジェクトを配列に入れる
// const list = [
//   {
//     text: "aa",
//     id: 123,
//   },
//   {
//     text: "bb",
//     id: 456,
//   },
// ]
//
// // 配列から条件をもとにインデックス番号を教えてくれるメソッド findIndex を使う（ここが難しい）
// // 引数には、配列の要素を受け取って true/false を返す関数をいれる
// const index = list.findIndex(function(item) {
//   return item.id === 123
// })
// console.log(index) // 0
//
// // splice を使って、index 番目から１つを list から取り除く
// list.splice(index, 1)
//
// // 最後に list を保存すれば削除完了！
// localStorage.list = JSON.stringify(list)
//
// // （補足）findIndex はアロー関数を使うとシンプルに書ける
// const index2 = list.findIndex((item) => item.id === 123)
// console.log(index2) // 0
