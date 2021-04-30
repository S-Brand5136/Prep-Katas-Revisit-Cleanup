const makeCase = function(input, style) {
  if (Array.isArray(style)) {
    style = style.sort(word => {
      const firstLevel = ['camel', 'pascal', 'snake', 'kebab', 'title'];
      const secondLevel = ['vowel', 'consonant'];
      if (firstLevel.includes(word)) {
        return -1;
      } else if (secondLevel.includes(word)) {
        return 1;
      } else return 0;
    });

    for (const word of style) {
      input = conversion(input, word)
    }
  } else {
    input = conversion(input, style);
  }

  return input;
};

const conversion = (string, style) => {
  switch (style) {
    case "snake":
      string = string.replace(/\s+/g, "_");
      break;
    case "kebab":
      string =  string.replace(/\s+/g, "-");
      break;
    case "upper":
      string = string.toUpperCase();
      break;
    case "lower":
      string = string.toLowerCase();
      break;
    case "camel":
      string = string
        .split(" ")
        .map((word, index) => index >= 1 ? word[0].toUpperCase() + word.slice(1) : word)
        .join("");
      break;
    case "title":
      string = string.split(" ")
        .map(word =>  word[0].toUpperCase() + word.slice(1))
        .join("");
      break;
    case "pascal":
      string = string.split(" ")
        .map(word =>  word[0].toUpperCase() + word.slice(1))
        .join("");
      break;
    case 'vowel':
      const regex1 = /[aeiou]/gi;
      string = string.split("").map(letter => regex1.test(letter) ? letter.toUpperCase() : letter).join("");
      break;
    case 'consonant':
      let regex2 = /[aeiou]/gi;
      string = string.split("").map(letter => !regex2.test(letter) ? letter.toUpperCase() : letter).join("");
      break;
    }
    return string
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
