'use strict'

// МАКСИМАЛЬНОЕ ЧИСЛО
// Найти максимальное число из трех переменных.
// Задача со звездочкой: Попробовать решить задачу в две строки.

// Генерация трёх случайных чисел
// между 0 (включительно) и 1 (не включая 1)
let a = Math.random();
let b = Math.random();
let c = Math.random();

console.log('a = ' + a);
console.log('b = ' + b);
console.log('c = ' + c);
// Нахождение максимального числа из трех переменных.
console.log('max number is ' + Math.max(a, b, c));
