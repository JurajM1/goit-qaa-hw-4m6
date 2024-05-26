function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}


//------------------------------------------------------

//Słowo kluczowe "this" w JavaScript odnosi się do bieżącego obiektu, w którym jest używane. Jest to wskaźnik na obiekt, w którym aktualnie znajduje się kod. Slowo kluczowe "this" jest dynamiczne i zależy od kontekstu wywołania funkcji lub metody.

// Przyklad 1 - w kontekscie Obiektu

// const person = {
//   name: "Joana",
//   greet: function() {
//     console.log(`Cześć, jestem ${this.name}.`);
//   }
// };

// person.greet(); // Wyświetli: "Cześć, jestem Anna."

//--------------------------------------------------------

// Przyklad 2 - w Konstruktorze

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// const myCar = new Car("Suzuki", "Jimmy");
// console.log(myCar.make); // Wyświetli: "Suzuki"

//--------------------------------------------------

// Zadanie czesc 1 Obiekt "Maciej"

// const person = {
//   username: "Maciej",
//   showName: function() {
//     console.log(this.username);
//   }
// };

// person.showName(); // Wywołanie metody showName() wyświetli: "Maciej"

//----------------------------------------------------------------------

//Zadanie czesc 2 Ksiazki

// const bookshelf = {
//   authors: [], // Pusta tablica na początek

//   Metoda dodająca autora do półki
//   addAuthor: function(authorName) {
//     this.authors.push(authorName);
//   },

//   Metoda zwracająca tablicę autorów
//   getAuthors: function() {
//     return this.authors;
//   }
// };

// Dodawanie autorów do półki
// bookshelf.addAuthor("Olga Tokarczuk");
// bookshelf.addAuthor("Mikolaj Rej");
// bookshelf.addAuthor("Dorota Maslowska");
// bookshelf.addAuthor("William Shakespeare");

// Pobieranie listy autorów
// const allAuthors = bookshelf.getAuthors();
// console.log("Lista autorów na półce:", allAuthors);
