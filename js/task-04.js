const formatString = function(string) {
  let shortComent;

  if (string.length > 40) {
    string = string
      .split("")
      .slice(0, 41)
      .join("");

    shortComent = string;
    return `${shortComent}...`;
  }

  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
