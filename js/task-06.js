let input = document.querySelector('input[name="number"]');
const btnMore = document.querySelector("#more");
const btnTotal = document.querySelector("#total");
const numbers = [];
let total = 0;

btnMore.addEventListener("click", function() {
  const value = Number(input.value);
  numbers.push(value);
  input.value = "";
});

btnTotal.addEventListener("click", function() {
  for (const number of numbers) {
    total += number;
  }

  console.log(`Общая сумма чисел равна ${total}`);
});
