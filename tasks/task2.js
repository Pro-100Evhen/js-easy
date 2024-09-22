// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
   let result = [];
   for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (
         letter == "1" ||
         letter == "2" ||
         letter == "3" ||
         letter == "4" ||
         letter == "5" ||
         letter == "6" ||
         letter == "7" ||
         letter == "8" ||
         letter == "9" ||
         letter == "0"
      ) {
         continue;
      } else {
         result.unshift(letter);
      }
   }
   resultStr = result.join("");
   return resultStr;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz")); // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
