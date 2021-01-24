const tomo = {
  // key: value
  age: 23,
  // []配列の中に複数のvalueをかけます
  hobbies: ["読書", "映画", "プログラミング"],
  // オブジェクトの中にオブジェクトもかけるよ
  name: {
    first: "tomotaka",
    last: "shimizu",
  },
  // オブジェクトの中に関数もかける
  // 定義をしただけで実行されない
  Hello: function () {
    console.log("Hello GeekSalon");
  },
};

tomo.Hello();
