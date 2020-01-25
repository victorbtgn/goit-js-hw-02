const checkForSpam = function(message) {
  message = message.toLowerCase().split(" ");
  let isSpam;
  for (let i = 0; i < message.length; i += 1) {
    message[i] = message[i].match(/\w/g).join("");
    if ((isSpam = message[i] === "spam" || message[i] === "sale")) {
      break;
    }
  }

  return isSpam;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

console.log(checkForSpam("How to earn fast money? [sAle]"));
