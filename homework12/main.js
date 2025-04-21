// masala 1
// function tozala(arr){
//   const check = new Set()
//   const natija = []

//   for (let i = 0; i < arr.length; i++) {
//     const orgVal = arr[i]
//     const rem2 = arr[i].split("").sort().join("")

//     if(!check.has(rem2)){
//       check.add(rem2)
//       natija.push(orgVal)
//     }
//   }

//   return natija
// }

// const val = ["olma", "dastur", "kut", "tuk", "sudrat", "mola"];

// console.log(tozala(val));

// masala 3
// function odamSoni(arr) {
//   const remArr = arr.flat();
//   let oddSum = 0, evenSum = 0, natija = 0

//   for(let i = 0; i<remArr.length; i++){
//     if(i % 2){
//       oddSum+= remArr[i]
//     } else {
//       evenSum+= remArr[i]
//     }
//   }

//    return natija = Math.abs(oddSum - evenSum)

// }

// const arr = [
//   [10, 0],
//   [3, 5],
//   [5, 8]
// ];

// const arr2 = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]

// console.log(odamSoni(arr));
// console.log(odamSoni(arr2));

// masala 2
// class Avto {
//   constructor(marka, model, year) {
//     (this.marka = marka), (this.model = model), (this.year = year);
//   }
// }

// class YengilAvto extends Avto {
//   constructor(marka, model, year) {
//     super(marka, model, year);
//   }
// }

// class YukAvto extends Avto {
//   constructor(marka, model, year) {
//     super(marka, model, year);
//   }
// }

// class Garaj {
//   constructor(joylarSoni) {
//     this.joylarSoni = joylarSoni;
//     this.avtolar = [];
//   }

//   joyla(yangiAvto) {
//     if (this.avtolar.length < this.joylarSoni) {
//       this.avtolar.push(yangiAvto);
//     } else {
//       console.log("Uzr joy to'ldi");
//     }
//   }

//   display() {
//     this.avtolar.forEach((avto) => {
//       console.log(`${avto.marka} ${avto.model} ${avto.year}`);
//     });
//   }
// }

// let garage = new Garaj(2);

// garage.display();

// garage.joyla(new YengilAvto("Toyota", "SupraMK14", 2001));
// garage.joyla(new YukAvto("Volvo", "M12", 2024))

// garage.display();
