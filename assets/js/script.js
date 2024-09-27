const words = document.getElementById("wordsContainer");
let eachWord = words.textContent.split(" ");

words.textContent = "";

eachWord.forEach((word) => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  span.classList.add("hidden-word");
  words.appendChild(span);
});

const line3El = document.querySelector(".line3");
const containerEl = document.getElementById("container");

line3El.addEventListener("mouseover", function () {
  line3El.textContent = "Magic";
  line3El.style.cursor = "pointer";
});

line3El.addEventListener("mouseout", function () {
  line3El.textContent = "Line";
});

line3El.addEventListener("click", function () {
  containerEl.innerHTML =
    '<img src="assets/img/inner-box.jpg" alt="" class="inner-box" />';
  containerEl.style.background = "white";
});
