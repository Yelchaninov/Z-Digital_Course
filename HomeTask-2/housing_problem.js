'use strict';

// ИСХОДНЫЕ ДАННЫЕ
let rooms_area = [24, 12.3, 15]; // Площадь каждой комнаты
let n_residents = 3; // Количество жильцов жилплощади
let heating_season = true; // Зима/Осень - true; Лето/Весна - false

// Постоянная величина
let net_amount = 1480; // Чистая сумма комунальных услуг с одного человека (грн)

// Налог на недвижимость (1.15 грн * кв. метр)
function property_tax (...values) {
  let sum = 0;
  values.forEach(function(value){sum += 1.15*value});
  return sum;
}
let p_tax = property_tax(...rooms_area);

// Поправка на комнатность (на 15% больше за каждую комнату)
function amendment_on_rooms (p_tax, n_rooms) {
  let sum = p_tax*n_rooms*0.15;
  return sum;
}

// Количество жильцов (налог 22% от "чистой" суммы с каждого жильца)
function number_of_residents (n_res) {
  let sum = net_amount*n_res*0.22;
  return sum;
}

// Сезонность: в случае отопительного сезона (Осень/Зима), прибавлять 35% к "чистой" сумме
function seasonality (h_season) {
  if (h_season) {
    return net_amount + 0.35*net_amount;
  } else {
    return 0;
  }
}

// Налог за полезную площадь - 5% от "чистой" суммы
function tax_for_useful_area () {
  return net_amount*0.05;
}

// Cтоимость коммунальных платежей
// Написать функцию, которая принимает следующие параметры:
// Кол-во комнат
// Площадь каждой комнаты
// Количество жильцов жилплощади
// Сезон: Зима/Осень или Лето/Весна
function utility_bill (n_rooms=1, r_area=[24], n_res=1, season=false) {
  let p_tax = property_tax(...r_area);
  let a_on_rooms = amendment_on_rooms(p_tax, r_area.length);
  let n_of_res = number_of_residents(n_res);
  let h_season = seasonality(season);
  let t_for_u_area = tax_for_useful_area();
  let sum = p_tax + a_on_rooms + n_of_res + h_season + t_for_u_area;
  return sum;
}

// Все рассчеты вывести в консоли систематизированно.
function print_utility_bill (n_rooms=1, r_area=[24], n_res=1, season=false) {
  console.log(
    `
    Utility Bill
    ------------
    Property tax: ${property_tax(...r_area)}
    Amendment on rooms: ${amendment_on_rooms(p_tax, r_area.length)}
    Number of residents: ${number_of_residents(n_res)}
    Seasonality: ${seasonality(season)}
    Tax for useful area: ${tax_for_useful_area()}
    -------------------
    Totally: ${utility_bill (n_rooms, r_area, n_res, season)}
    `
  );
}

print_utility_bill(rooms_area.length, rooms_area, n_residents, heating_season);
