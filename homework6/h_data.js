// 1. Foydalanuvchilarning ismi va har bir foydalanuvchining bir nechta telefon raqamlari mavjud.
// Vazifa:
// Nested Map (ichki Map) yaratish, bunda asosiy Mapda foydalanuvchilarning ismlar va uning ichidagi Mapda
//  ularning telefon raqamlari saqlanadi.
// Foydalanuvchilarning telefon raqamlarini qo'shish, o'zgartirish va o'chirish uchun funksiyalar yarating.
// So'ralgan foydalanuvchi uchun barcha telefon raqamlarini chiqarish funksiyasini yozing.

// const mainMap = new Map();

// function addUser(name) {
//   if (!mainMap.has(name)) {
//     mainMap.set(name, new Map());
//     console.log("User added");
//   } else {
//     return console.log("User exists");
//   }
// }

// function addNumber(name, number) {
//   if (!mainMap.has(name)) return console.log("User not found");

//   const userPhone = mainMap.get(name);
//   const phoneKey = `number${userPhone.size + 1}`;

//   userPhone.set(phoneKey, number);
//   console.log("malumot qoshildi");
// }

// function changeNum(name, phoneKey, newNumber) {
//   if (!mainMap.has(name)) return console.log("User not found");

//   const userPhone = mainMap.get(name);

//   if (!userPhone.has(phoneKey)) return console.log("Number not found");

//   userPhone.set(phoneKey, newNumber);
// }

// function getUser(name) {
//   if (!mainMap.has(name)) return console.log("User not found");

//   for (const [key, value] of mainMap.get(name)) {
//     console.log(key, value);
//   }
// }

// function deleteNum(name, phoneKey) {
//   if (!mainMap.has(name)) return console.log("User not found");

//   const userPhone = mainMap.get(name);

//   if (!userPhone.has(phoneKey)) return console.log("Number not found");

//   userPhone.delete(phoneKey);
//   console.log("NUmber deleted");
// }

// addUser("Eshmat");
// addNumber("Eshmat", "+998997020518");
// getUser("Eshmat");
// changeNum("Eshmat", "number1", "0000000000");
// getUser("Eshmat");
// addNumber("Eshmat", "+88988989899");
// getUser("Eshmat");
// deleteNum("Eshmat", "number2");
// getUser("Eshmat");

// png1
// const input = [
//   "IP=192.23.30.40 message='Hello&derps.' user=destroyer",
//   "IP=192.23.30.41 message='Hello&yall.' user=destroyer",
//   "IP=192.23.30.40 message='Hello&hi.' user=destroyer",
//   "IP=192.23.30.42 message='Hello&Dudes.' user=destroyer",
//   "IP=192.23.30.41 message='Hey&son' user=mother",
//   "IP=192.23.33.40 message='Hi&mom!' user=child0",
//   "IP=192.23.30.40 message='Hi&from&me&too' user=child1",
//   "IP=192.23.30.42 message='spam' user=destroyer",
//   "IP=192.23.30.42 message='spam' user=destroyer",
//   "IP=192.23.30.41 message='spam' user=destroyer",
//   "IP=192.23.50.40 message='' user=yetAnotherUsername",
//   "IP=192.23.50.40 message='comment' user=yetAnotherUsername",
//   "IP=192.23.155.40 message='Hello.' user=unknown",
// ];

// const userMap = new Map();

// input.forEach((line) => {
//   const startIp = line.indexOf("IP=") + 3;
//   const endIp = line.indexOf(" ", startIp);
//   const ip = line.substring(startIp, endIp);

//   const userStart = line.indexOf("user=") + 5;
//   const user = line.substring(userStart);

//   if (!userMap.has(user)) {
//     userMap.set(user, new Map());
//   }

//   const ipMap = userMap.get(user);
//   if (ipMap.has(ip)) {
//     ipMap.set(ip, ipMap.get(ip) + 1);
//   } else {
//     ipMap.set(ip, 1);
//   }
// });

// userMap.forEach((ips, user) => {
//   console.log(`${user}:`);
//   ips.forEach((count, ip) => {
//     console.log(`${ip}: ${count}`);
//   });
// });
