'use strict'

// ЗАДАЧА С ДВУМЯ ЗВЕЗДОЧКАМИ
// Инициализировать строковую переменную ticket.
// Написать алгоритм, который определяет, является ли "билет" счастливым.
// Вывести результат на экран.

let min_n = 1; // минимум (включительно)
let max_n = 10; // максимум (не включая)
let ticket = '';

let i = 0;
for (; i < 6; i++) {
  ticket += String(Math.floor(Math.random() * (max_n - min_n)) + min_n);
}

let sum_first_three = Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2]);
let sum_last_three = Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5]);
if (sum_first_three == sum_last_three) {
  console.log('The ticket ' + ticket + ' is happy');
} else {
  console.log('The ticket ' + ticket + ' is not happy');
}
