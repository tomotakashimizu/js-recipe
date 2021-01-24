const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const feedback = document.getElementById("feedback");

choice1.onclick = function () {
  feedback.textContent = "見事！正解！！！";
};

choice2.onclick = function () {
  feedback.textContent = "残念...不正解！";
};

choice3.onclick = function () {
  feedback.textContent = "残念...不正解！";
};
