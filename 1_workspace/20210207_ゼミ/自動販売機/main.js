new Vue({
  el: "#app",
  data: {
    totalMoney: 0,
    state: "",
    totalTea: 0,
    totalTeaState: "",
    inputText: "",
  },
  methods: {
    addMoney: function() {
      if (!Number.isNaN(Number(this.inputText))) {
        // this.totalMoney += 100
        this.totalMoney += Number(this.inputText)
        this.inputText = ""
      } else {
        this.state = "数字を入力してください。"
        this.inputText = ""
      }
    },
    tea: function() {
      if (this.totalMoney >= 120) {
        this.totalMoney -= 120
        this.totalTea += 1
        this.state = "購入できました。"
        this.totalTeaState = `お茶を${this.totalTea}本購入できました。`
      } else {
        this.state = "投入金額が足りず、購入できません。"
      }
    },
  },
})
