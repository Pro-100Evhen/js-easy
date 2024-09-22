// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u)
// на певний символ, наприклад *.

function replaceVowels(str) {
   let result = "";
   for (let index = 0; index < str.length; index++) {
      const letter = str[index];
      if (
         letter === "a" ||
         letter === "e" ||
         letter === "i" ||
         letter === "o" ||
         letter === "u" ||
         letter === "A" ||
         letter === "E" ||
         letter === "I" ||
         letter === "O" ||
         letter === "U"
      ) {
         result += "*";
      } else {
         result += letter;
      }
   }
   return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript")); // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
