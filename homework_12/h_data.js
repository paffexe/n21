// 1 Berilgan matn uzunligini tekshiruvchi truncate(str, maxlength)
// funksiyasini yozing. Agar str matn uzunligi maxlength dan uzun
// bo'lsa matnni qisqartirib oxiriga ... qo'yib qaytarishi lozim.

// const str = "salom dunyo!";
// const maxlength = 10;

// function truncate(str, maxlength){
//     let result = ""
//     let rem = "..."

//     if(str.length <= maxlength){
//         return str
//     }

//     if(str.length > maxlength){
//         result = str.slice(0, maxlength-3);
//     }

//     return result.concat(rem)
// }

// console.log(truncate(str, maxlength));

// 2. Ma'lumki, Math.random() funksiyasi 0 va 1 oralig'idagi
// tasodifiy sonni qaytarib beradi. Siz berilgan oraliqdagi
// tasodifiy butun sonni qaytaruvchi randInt(start, end) funksiyasini yozing.

// function randInt(start, end){
//    let result = Math.random() * (end - start + 1) + start;
//    result = Math.floor(result)
//    return result
// }

// console.log(randInt(1, 10));

// 3. Berilgan 2ta satrni solishtirib har ikki satrdan
// takrorlanmaydigan harflarni qaytaruvchi select(s1, s2)
// funksiyasini yozing. Masalan, select('Salom', 'Kalom')=> 'SK'

// function findUnique(str1, str2){

//     let result = ''

//     for(let i = 0; i<str1.length; i++){
//         if(!str2.includes(str1[i])){
//             result += str1[i]
//         }
//     }

//     for (let i = 0; i < str2.length; i++) {
//       if (!str1.includes(str2[i])) {
//         result += str2[i];
//       }
//     }

//     return result

// }

// console.log(findUnique('Salom', 'Kalom'));

// 4. Berilgan satrda har bir harf necha marta qaytarilganligini sanab
// quyidagi ko'rinishda javob qaytaruvchu arrow function yozing:
// IN: NAJOT TA'LIM
// OUT: N*, A**, J*, O*, T**, '*, L*, I*, M*
// Bu yerda A va T harflari 2 marta uchragani sababli 2ta * qo'yilgan

// const countLetter = (str) => {
//   let checkedLetter = "";
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (checkedLetter.includes(str[i])) {
//       continue;
//     }

//     let count = 0;

//     for (let j = 0; j < str.length; j++) {
//       if (str[j] == str[i]) {
//         count++;
//       }
//     }

//     result += str[i];
//     for (let k = 0; k < count; k++) {
//       result += "*";
//     }
//     if (i !== str.length - 1) {
//       result += ", ";
//     }

//     checkedLetter += str[i];
//   }

//   return result;
// };

// console.log(countLetter("NAJOT TA'LIM"));
