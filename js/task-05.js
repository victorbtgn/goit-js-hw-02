const checkForSpam = function(message) {
  message = message.toLowerCase();
  const isSpam = ["spam", "sale"];

  for (let spam of isSpam) {
    if (message.includes(spam)) {
      return true;
    }
  }

  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

console.log(checkForSpam("How to earn fast money? (spAm)"));
