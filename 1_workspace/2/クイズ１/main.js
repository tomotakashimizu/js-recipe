const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// STEP3 - フィードバックと正解判定をわける
// feedback の内容
const feedbacks = [
  "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
  "正解！ガニメデは、木星の第三惑星だよ！",
]

// 正解を判定する
const choose = function(choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}

// STEP2 - 選択肢と選択をわける
// // 正解を判定する
// const choose = function(choiceString) {
//   if (choiceString === 0) {
//     feedback.textContent =
//       "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//   } else if (choiceString === 1) {
//     feedback.textContent =
//       "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//   } else {
//     feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//   }
// }
//
// choice1.onclick = function() {
//   // 0 番目の選択肢を選択
//   choose(0)
// }
// choice2.onclick = function() {
//   // 1 番目の選択肢を選択
//   choose(1)
// }
// choice3.onclick = function() {
//   // 2 番目の選択肢を選択
//   choose(2)
// }

// STEP1 - 選択肢と正解判定をわける
// // 正解を判定する
// const choose = function(choiceString) {
//   if (choiceString === "ゴリアテ") {
//     feedback.textContent =
//       "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//   } else if (choiceString === "ゼニガメ") {
//     feedback.textContent =
//       "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//   } else if (choiceString === "ガニメデ") {
//     feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//   }
// }
//
// choice1.onclick = function() {
//   // ゴリアテを選択
//   choose("ゴリアテ")
// }
// choice2.onclick = function() {
//   // ゼニガメを選択
//   choose("ゼニガメ")
// }
// choice3.onclick = function() {
//   // ガニメデを選択
//   choose("ガニメデ")
// }

// choice1.onclick = function() {
//   feedback.textContent =
//     "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// }
// choice2.onclick = function() {
//   feedback.textContent =
//     "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// }
// choice3.onclick = function() {
//   feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
// }
