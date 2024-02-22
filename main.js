import { parose } from "./fuggveny.js";

console.log(parose(5))

/* Tesztelési esetek */

/* 1. teszteset szam = 0 */
console.log(`1. teszteset: szam = 0 | várt   eredmény: true`)
console.log(`1. teszteset: szam = 0 | kapott eredmény: ${parose(0)}`)
console.log(`1. szam = 0 | várt: true | kapott: ${parose(0)} | ${true === parose(0)? "Jó" : "Hibás"}`)
/* 2. teszteset szam = 4 */ /* equivalencia osztály - azon értékek halmaza, amelyek azonos tesztesetet jelenteneke, mivel várhatóan a függvény ugyan azokat fogja kiadni */
console.log(`2. szam = 4 | várt: true | kapott: ${parose(4)} | ${true === parose(4)? "Jó" : "Hibás"}`)
/* 3. teszteset szam = 5 */
let szam = 5
console.log(`3. szam = ${szam} | várt: false | kapott: ${parose(szam)} | ${false === parose(szam)? "Jó" : "Hibás"}`)
/* 4. teszteset szam = -4 */
szam = -4
console.log(`4. szam = ${szam} | várt: true | kapott: ${parose(szam)} | ${true === parose(szam)? "Jó" : "Hibás"}`)
/* 5. teszteset szam = -5 */
szam = -5
console.log(`5. szam = ${szam} | várt: false | kapott: ${parose(szam)} | ${false === parose(szam)? "Jó" : "Hibás"}`)
/* 6. teszteset szam = 2.5 // tört szám pi, 1/3*/
szam = 2.5
console.log(`6. szam = ${szam} | várt: "nem egész szám" | kapott: ${parose(szam)} | ${"nem egész szám" === parose(szam)? "Jó" : "Hibás"}`)
/* 7. teszteset szam = 40000000000000000000000000000000000000 */
szam = 40000000000000000000000000000000000000
console.log(`7. szam = ${szam} | várt: true | kapott: ${parose(szam)} | ${true === parose(szam)? "Jó" : "Hibás"}`)
/* 8. teszteset szam = 40000000000000000000000000000000000001 */
szam = 400000000000000000000000000000000000001
console.log(`8. szam = ${szam} | várt: false | kapott: ${parose(szam)} | ${false === parose(szam)? "Jó" : "Hibás"}`)
/* 9. teszteset szam = -40000000000000000000000000000000000000 */
szam = -40000000000000000000000000000000000000
console.log(`9. szam = ${szam} | várt: true | kapott: ${parose(szam)} | ${true === parose(szam)? "Jó" : "Hibás"}`)
/* 10. teszteset szam = "valami" */
console.log(`10. szam = "valami" | várt: "ez nem szám" | kapott: ${parose(szam)} | ${false === parose(szam)? "Jó" : "Hibás"}`)
/* 11. teszteset szam = "7" */
console.log(`11. szam = "7" | várt: false | kapott: ${parose(szam)} | ${false === parose(szam)? "Jó" : "Hibás"}`)