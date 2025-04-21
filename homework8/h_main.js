// //1
// // class Product {
// //   static productCount = 0;
// //   static totalPrice = 0;

// //   constructor(id, name, price) {
// //     this.id = id;
// //     this.name = name;
// //     this.price = price;
// //     Product.productCount++;
// //     Product.totalPrice += price;
// //   }

// //   static getTotalPrice() {
// //     return Product.totalPrice;
// //   }
// // }

// // class CareProduct extends Product {
// //   constructor(id, name, price, warrantyPeriod) {
// //     super(id, name, price);
// //     this.warrantyPeriod = warrantyPeriod;
// //   }

// //   totalPrice() {
// //     let discountedPrice = this.price;

// //     switch (this.warrantyPeriod) {
// //       case 1:
// //         discountedPrice *= 0.5;
// //         break;
// //       case 2:
// //         discountedPrice *= 0.6;
// //         break;
// //       case 3:
// //         discountedPrice *= 0.7;
// //         break;
// //       case 4:
// //         discountedPrice *= 0.8;
// //         break;
// //       case 5:
// //         discountedPrice *= 0.9;
// //         break;
// //       default:
// //         console.log("Kafolat muddati tugagan");
// //         return;
// //     }

// //     console.log(`Chegirmadan keyingi narx: ${discountedPrice}`);
// //     return discountedPrice;
// //   }
// // }

// // let product1 = new Product(1, "Olma", 1200);
// // let product2 = new Product(2, "Banan", 2100);

// // console.log(`Umumiy narx: ${Product.getTotalPrice()}`);
// // let careProduct = new CareProduct(3, "Sut", 5000, 3);
// // careProduct.totalPrice();

//2

// class Universitet {
//   constructor(name) {
//     this.name = name;
//     this.departments = [];
//   }

//   addDepartment(Newdepartment) {
//     if (!this.departments.includes(Newdepartment)) {
//       this.departments.push(Newdepartment);
//       console.log("Bo'lim qo'shildi");
//     } else {
//       console.log("Bunday bo'lim bor");
//     }
//   }

//   removeDepartment(department) {
//     let rem = this.departments.indexOf(department);
//     if (rem != -1) {
//       this.departments.splice(rem, 1);
//       console.log("O'chirildi");
//     } else {
//       console.log("Bunday bo'lim yo'q");
//     }
//   }

//   showDepartments() {
//     if (this.departments.length > 0) {
//       console.log("universitetining bo'limlari:");
//       for (const bolim of this.departments) {
//         console.log(bolim);
//       }
//     } else {
//       console.log("Bo'limlar mavjud emas");
//     }
//   }
// }

// const otm = new Universitet("TATU");

// otm.addDepartment("Matematika");
// otm.addDepartment("Fizika");
// otm.addDepartment("Biologiya");
// otm.addDepartment("Kimyo");
// otm.addDepartment("Tarix");

// otm.showDepartments();

// otm.removeDepartment("Fizika");

// otm.showDepartments();
