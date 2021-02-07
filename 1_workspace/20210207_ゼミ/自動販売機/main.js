new Vue({
  el: "#app",
  data: {
    totalMoney: 0,
    state: "",
    totalTea: 0,
    totalTeaState: "",
  },
  methods: {
    addMoney: function() {
      this.totalMoney += 100
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
