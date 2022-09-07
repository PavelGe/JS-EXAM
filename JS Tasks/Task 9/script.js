/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie() {
  this.movieObj = () => {
    this.title = prompt("Enter movie title");
    this.director = prompt("Who was movie director?");
    this.budget = Number(prompt("What was the movie budget?", 0));
  };

  this.wasExpensive = () => {
    if (movie.budget > 100000000) {
      return true;
    } else return false;
  };
}
let movie = new Movie();
movie.movieObj();
console.log(movie);
console.log("Was movie expensive?", movie.wasExpensive());
