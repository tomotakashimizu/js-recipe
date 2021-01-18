// 3の倍数、または3を含む数字の時に元気になる関数
const threeLoveFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    // 文字列に変換
    const str = String(n)

    // 3を含む場合true
    const include3 = str.includes("3")

    // 3の倍数、または3を含む数字
    if (n % 3 === 0 || include3 == true) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

threeLoveFunction(100)
