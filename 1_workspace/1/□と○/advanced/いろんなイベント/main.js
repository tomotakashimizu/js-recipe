const figure = document.getElementById("figure")

// 要素.classList.toggle(クラス名) は、 add と remove をあわせたような動きをします。
// すなわち、そのクラス名が要素にあれば削除し、なければ追加します。
figure.onmouseover = function() {
  figure.classList.toggle("rounded")
}
