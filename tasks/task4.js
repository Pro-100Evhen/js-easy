// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
   let maxValue = numbers[0];
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
         maxValue = numbers[i];
      }
   }
   return maxValue;
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;
