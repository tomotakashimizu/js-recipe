const input = document.getElementById("input")
const button = document.getElementById("button")
const display = document.getElementById("display")

button.onclick = function() {
  const card = document.createElement("div")
  card.textContent = input.value
  display.append(card)

  input.value = null
}
