//  1 doira nomli obyekt yarating va unga  foydalanuvchi tomonidan
//   kiritilgan qiymatni radius nomli xususiyat sifatida kiriting.
//   Obyekt ichiga doiraning yuzini hisoblovchi metod qo'shing.

// let son = +prompt("Qiymat kiriting");

// const doira = {
//   radius: son,

//   calculate: function(radius){
//     let s = (radius*radius) * 3.1416
//     console.log(`Doiraning yuzasi ${Math.round(s)}`);
//   }
// };

// doira.calculate(son);

// 2. Unga uzatilgan objectdagi key va valuelar o'rnini almashtiruvchi
//   InvertKeyValue(obj) funksiyasini yozing.
//         Input: InvertKeyValue({red: 芦qizil禄, green: 芦yashil禄})
//         Output:{芦qizil禄: 芦red禄, 芦yashil禄: 芦green禄}

// function InvertKeyValue(object) {
//   let natija = {};

//   for (let key in object) {
//     natija[object[key]] = key;
//   }
//   return natija;
// }
// console.log(InvertKeyValue({ red: "qizil", green: "yashil" }));

// 3. Berilgan obyekt qiymatlari orasida eng ko'p takrorlanganini aniqlovchi funksiya yozing.
// Agar bir nechta qiymat bir xil ko'p takrorlangan bo'lsa, ulardan birinchisini qaytaring.
// const data = { a: 3, b: 5, c: 3, d: 7, e: 5, f: 5 };

// Natija: 5
// const data = { a: 3, b: 5, c: 3, d: 7, e: 5, f: 5 };

// const data_values = Object.values(data);
// let result = {};
// let maxCount = 0,
//   maxValue = 0;

// for (let i = 0; i < data_values.length; i++) {
//   let value = data_values[i];

//   if (value in result) {
//     result[value]++;
//   } else {
//     result[value] = 1;
//   }
// }

// for (let key in result) {
//   if (result[key] > maxCount) {
//     maxCount = result[key];
//     maxValue = Number(key);
//   }
// }

// console.log(maxValue);

// 5 masala
// function isEqual(obj1, obj2) {
//   return JSON.stringify(obj1) == JSON.stringify(obj2);
// }

// const obj1 = { a: 1, b: { c: 2, d: 3 } };
// const obj2 = { a: 1, b: { c: 2, d: 3 } };

// const obj3 = { a: 1, b: { c: 100, d: 3 } };
// const obj4 = { a: 1, b: { c: 200, d: 3 } };

// console.log(isEqual(obj1, obj2));
// console.log(isEqual(obj3, obj4));
