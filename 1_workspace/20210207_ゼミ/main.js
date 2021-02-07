new Vue({
  el: "#app",
  data: {
    count: 0,
    name: "ヒカキン",
    memos: ["メモ1", "メモ2", "メモ3"],
    inputText: "",
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
    addHikakin: function() {
      this.memos.push("ヒカキン")
    },
    removeMemo0: function() {
      this.memos.splice(0, 1)
    },
    addMemo: function() {
      this.memos.push(this.inputText)
    },
  },
})
