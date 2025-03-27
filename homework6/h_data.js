// 1. Foydalanuvchilarning ismi va har bir foydalanuvchining bir nechta telefon raqamlari mavjud.
// Vazifa:
// Nested Map (ichki Map) yaratish, bunda asosiy Mapda foydalanuvchilarning ismlar va uning ichidagi Mapda
//  ularning telefon raqamlari saqlanadi.
// Foydalanuvchilarning telefon raqamlarini qo'shish, o'zgartirish va o'chirish uchun funksiyalar yarating.
// So'ralgan foydalanuvchi uchun barcha telefon raqamlarini chiqarish funksiyasini yozing.

const mainMap = new Map();

function addUser(name) {
  if (!mainMap.has(name)) {
    mainMap.set(name, new Map());
    console.log("User added");
  } else {
    return console.log("User exists");
  }
}

function addNumber(name, number) {
  if (!mainMap.has(name)) return console.log("User not found");

  const userPhone = mainMap.get(name);
  const phoneKey = `number${userPhone.size + 1}`;

  userPhone.set(phoneKey, number);
  console.log("malumot qoshildi");
}

function changeNum(name, phoneKey, newNumber) {
  if (!mainMap.has(name)) return console.log("User not found");

  const userPhone = mainMap.get(name);

  if (!userPhone.has(phoneKey)) return console.log("Number not found");

  userPhone.set(phoneKey, newNumber);
}

function getUser(name) {
  if (!mainMap.has(name)) return console.log("User not found");

  for (const [key, value] of mainMap.get(name)) {
    console.log(key, value);
  }
}

function deleteNum(name, phoneKey) {
  if (!mainMap.has(name)) return console.log("User not found");

  const userPhone = mainMap.get(name);

  if (!userPhone.has(phoneKey)) return console.log("Number not found");

  userPhone.delete(phoneKey);
  console.log("NUmber deleted");
}

addUser("Eshmat");
addNumber("Eshmat", "+998997020518");
getUser("Eshmat");
changeNum("Eshmat", "number1", "0000000000");
getUser("Eshmat");
addNumber("Eshmat", "+88988989899");
getUser("Eshmat");
deleteNum("Eshmat", "number2");
getUser("Eshmat");
