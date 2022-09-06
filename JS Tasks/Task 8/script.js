/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.values = function () {
    this.a = +prompt("enter a number", 0);
    this.b = +prompt("enter another number", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.sub = function () {
    return this.a - this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
  this.div = function () {
    return this.a / this.b;
  };
}
let calculator = new Calculator();
calculator.values();

console.log("summ = " + calculator.sum());
console.log("subtraction = " + calculator.sub());
console.log("multiplication = " + calculator.mul());
console.log("division = " + calculator.div());
