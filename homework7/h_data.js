// masala 1
// function calculateWorkingHours(startTime, endTime) {
//   const start = new Date(`2025-01-01T${startTime}:00`);
//   const end = new Date(`2025-01-01T${endTime}:00`);

//   if (end < start) return "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas";

//   let hours = end.getHours() - start.getHours();
//   let minutes = end.getMinutes() - start.getMinutes();

//   if (minutes < 0) {
//     hours -= 1;
//     minutes += 60;
//   }

//   return `Ish vaqti: ${hours} soat ${minutes} daqiqa`;
// }

// console.log(calculateWorkingHours("10:00", "17:30"));
// console.log(calculateWorkingHours("07:00", "05:30"));

// masala 2
// function findBankWorkDay(startDate, workDays) {
//   let date = new Date(startDate);
//   let count = 0;

//   while (count < workDays) {
//     date.setDate(date.getDate() + 1);
//     count++;
//   }

//   return date.toLocaleDateString();
// }

// let workDays = +prompt("Bank ish kunini kiriting:");
// if (workDays > 0) {
//   console.log(
//     "Belgilangan bank ish kuni:",
//     findBankWorkDay(new Date(), workDays)
//   );
// } else {
//   console.log("Input noto'gri");
// }
