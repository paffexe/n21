// 1. Ikkita massivdagi takrorlanmaydigan elemntlarni chiqaruvchi dastur yozing:
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]

// const arr1 = [
//   [1, 2, 3],
//   [100, 2, 1, 10],
// ];
// const arr2 = [
//   [1, 2, 3, 4, 5],
//   [1, [2], [3, [[4]]], [5, 6]],
// ];

// function uniqueValuesToStr(array) {
//   let rem = [];
//   let unique = [];
//   let result = [];

//   rem = array.flat(Infinity);

//   rem.forEach((element) => {
//     if (!unique.includes(element)) unique.push(element);
//     unique.sort((a, b) => a - b)
//   });

//   unique.forEach((element) => {
//     result.push(String(element));
//   });

//   return result
// }

// console.log(uniqueValuesToStr(arr1));
// console.log(uniqueValuesToStr(arr2));

// 2.  Massiv elementini bir joydan ikkinchi joyga oâ€˜tkazuvchi move(array, fromIndex, toIndex) nomli funksiya yozing.

// Sinov ma'lumotlari :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

// const arr = [10, 20, 30, 40, 50];

// function changeIndex(array, fromIndex, toIndex) {
//   let rem = Number(array.splice(fromIndex, 1));
//   array.splice(toIndex, 0, rem);
//   return array;
// }

// console.log(changeIndex([10, 20, 30, 40, 50], 0, 2));
// console.log(changeIndex([10, 20, 30, 40, 50], -1, -2));

// 3. Massivdagi barcha noyob qiymatlarni topish dasturini yozing.

// Sinov ma'lumotlari :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5 ]
// Kutilayotgan natija:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// const arr1 = [1, 2, 2, 3, 4, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];
// const arr3 = [1, -2, -2, 3, 4, -5, -6, -5];

// function uniqueValues(array){
//     let result = []
//     array.forEach(element => {
//         if(!result.includes(element)) result.push(element)
//     });
//     return result
// }

// console.log(uniqueValues(arr1));
// console.log(uniqueValues(arr2));
// console.log(uniqueValues(arr3));

// 4. Berilgan matn ichidagi barcha so'zlarni uzunligi bo'yicha teskari tartibda tartiblab chiqaring.
// const arr = [
//   "Berilgan",
//   "matn",
//   "ichidagi",
//   "barcha",
//   "sozlarni",
//   "uzunligi",
//   "boyicha",
//   "teskari",
//   "tartibda",
//   "tartiblab",
//   "chiqaring",
// ];

// function sortByWords(array) {
//   let result = array.sort((a, b) => a.length - b.length).reverse();
//   return result;
// }

// console.log(sortByWords(arr));
