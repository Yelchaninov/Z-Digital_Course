'use strict'

// МАССИВНЫЙ ОБЪЕКТ
// Создать объект, значения которого - массивы.
// Проитерировать массив одного из ключей в обратном порядке
// и так вывести его содержимое.

// Создаем объект, значения которого - массивы.
let desktop_computers = {
  motherboard : ['Intel Z370', 'Intel X299', 'Intel H370', 'AMD X470', 'AMD 970'],
  processor : ['Core i7', 'Core i5', 'Core i3', 'AMD Ryzen 7', 'AMD A10'],
  monitor : ['Acer', 'Asus', 'Dell', 'Samsung'],
  keyboard : ['Genius', 'Gembird', 'Logitech'],
  mouse : ['Logitech', 'Rapoo'],
  price : [5000, 7000, 3000, 4000, 9000, 8500]
}

// Итерируем массив ключа processor в обратном порядке
let i = 0;
let len = desktop_computers.processor.length;
for (; i < len; i++) {
  console.log(desktop_computers.processor[len - i - 1]);
}
