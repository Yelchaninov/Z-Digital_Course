'use strict'

// ОБЪЕКТЫ
// Создать объект с набором параметров на свое усмотрение.
// Вывести содержимое объекта на экран.
// Поменять значения у двух ключей местами.
// Вывести "обновленный" объект.

// Создаем объект Настольный компьютер
// с обычными параметрами
let desktop_computer = {
  motherboard : 'Intel Z370',
  processor : 'Core i7',
  monitor : 'Acer',
  keyboard : 'Genius',
  mouse : 'Logitech',
  price : 5000
}
// Выводим содержимое объекта на экран.
console.log('The object');
console.log(desktop_computer);

let k = desktop_computer.keyboard;
let m = desktop_computer.mouse;
// Меняем значения у двух ключей местами.
desktop_computer.keyboard = m;
desktop_computer.mouse = k;
// Выводим "обновленный" объект.
console.log('Updated object');
console.log(desktop_computer);
