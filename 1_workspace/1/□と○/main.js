const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

circleButton.onclick = function() {
  // figure に rounded クラスを追加する
  figure.classList.add("rounded")
}

squareButton.onclick = function() {
  // figure から rounded クラスを削除する
  figure.classList.remove("rounded")
}

// 要素.classList.toggle(クラス名) は、 add と remove をあわせたような動きをします。
// すなわち、そのクラス名が要素にあれば削除し、なければ追加します。
figure.onclick = function() {
  figure.classList.toggle("rounded")
}
