const imgminus = document.querySelector(".imgminus");
const pp1 = document.querySelector(".pp1");

imgminus.addEventListener("click", () => {
  pp1.classList.toggle("close");
});

const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

const imgplus1 = document.querySelector(".imgplus1");
const imgplus2 = document.querySelector(".imgplus2");
const imgplus3 = document.querySelector(".imgplus3");

imgplus1.addEventListener("click", () => {
  text1.classList.toggle("close");
});

imgplus2.addEventListener("click", () => {
  text2.classList.toggle("close");
});

imgplus3.addEventListener("click", () => {
  text3.classList.toggle("close");
});
