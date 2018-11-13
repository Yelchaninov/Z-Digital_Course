'use strict'

// ОПРЕДЕЛИТЬ СУЩЕСТВОВАНИЕ ТРЕУГОЛЬНИКА
// На основе трех переменных вывести на экран информацию,
// может ли существовать треугольник с такими длинами.

// Генерация трёх случайных чисел
// между 0 (включительно) и 1 (не включая 1)
let a = Math.random();
let b = Math.random();
let c = Math.random();

console.log('Side a = ' + a);
console.log('Side b = ' + b);
console.log('Side c = ' + c);
// Проверка существования треугольника
if (a+b>c && b+c>a && c+a>b) {
  console.log('The triangle exists');
} else {
  console.log('The triangle does not exist');
}
