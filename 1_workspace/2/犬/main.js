const imageElement = document.getElementById("dog-image")

console.log("fetchの前")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random") // まず fetch でデータの取得をしにいき、
  .then((res) => {
    // fetch がおわったら１つめの then の中の関数を実行し、
    console.log("1つ目")
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    // １つめが終わったら２つめの then の中の関数を実行します。
    console.log("2つ目")
    imageElement.src = data.message // 画像を表示する
  })

console.log("fetchの後")
