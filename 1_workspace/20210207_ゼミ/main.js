new Vue({
  el: "#app",
  data: {
    count: 0,
    name: "ヒカキン",
    memos: ["メモ1", "メモ2", "メモ3"],
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
    addHikakin: function() {
      this.memos.push("ヒカキン")
    },
  },
})
