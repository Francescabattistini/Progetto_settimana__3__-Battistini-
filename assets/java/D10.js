/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A");

let sum = 10 + 30;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B");

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C");

let me = {
  name: "francesca",
  surname: "battistini",
  age: 31,
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D");

function remuveAge(obj) {
  delete obj.age;
  console.log(obj);
}
remuveAge(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills",
   contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E");
const skills = ["HTML", "CSS", "JavaScript"];

const addSkills = function (obj, array) {
  obj.skills = array;
  console.log(obj);
};

addSkills(me, skills);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F");

const addSkill = function addSkill(obj, skill) {
  obj.skills.push(skill);
  console.log(obj);
};
addSkill(me, "ES6");
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G");
const removeLastSkill = function (obj) {
  obj.skills.pop();
  console.log(obj);
};
removeLastSkill(me);

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1");
const dice = () => {
  const result = Math.floor(Math.random() * 6) + 1;
  return result;
};
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2");

const whoIsBigger = (n1, n2) => {
  let biggerNum = n1;

  if (n2 === n1) {
    return "i numeri sono uguali";
  } else if (n2 > n1) {
    return (biggerNum = n2);
  }
  return biggerNum;
};
console.log("il numero più grande fra 10 e 20 è =", whoIsBigger(10, 20));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3");

const splitMe = (str) => str.split(" ");

console.log("io amo i gatti =>", splitMe("io amo i gatti"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4");

const deleteOne = function (str, boolean) {
  if (typeof boolean === "boolean" && boolean) {
    const trueStr = str.slice(1);
    return trueStr;
  } else if (typeof boolean === "boolean" && boolean === false) {
    const falseStr = str.slice(0, str.length - 1);
    return falseStr;
  }
};

console.log("ciao amici true =>", deleteOne("ciao amici ", true));
console.log("ciao amici false =>", deleteOne("ciao amici ", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
  
*/

console.log("ESERCIZIO 5");

const onlyLetters = function (str) {
  const words = str.split(" ");
  const convertedStr = [];

  words.forEach((word) => {
    const isNotNum = !parseInt(word);
    if (isNotNum) {
      convertedStr.push(word);
    }
  });

  const final = convertedStr.join(" ");
  return final;
};

console.log("io ho 2gatti =>", onlyLetters("io ho 2 gatti"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(str)) {
    return true;
  } else {
    return false;
  }
};

// Test della funzione
console.log(isThisAnEmail("francescabatt@gmail.com"));
console.log(isThisAnEmail("francescabatt.gmail.com"));
console.log(isThisAnEmail("francescabatt@com"));
console.log(isThisAnEmail("@francescabattgmail.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7");

const whatDayIsIt = function () {
  const now = new Date();
  const day = now.getDay();
  switch (day) {
    case 1:
      return "Lunedì";
    case 2:
      return "Martedì";
    case 3:
      return "Mercoledì";
    case 4:
      return "Giovedì";
    case 5:
      return "Venerdì";
    case 6:
      return "Sabato";
    case 7:
      return "Domenica";
  }
};

console.log("Oggi è:", whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8");

const rollTheDices = function (num) {
  const diceRollsResult = {
    sum: 0,
    results: [],
  };
  for (let i = 0; i < num; i++) {
    const diceRoll = dice();
    diceRollsResult.results.push(diceRoll);
    diceRollsResult.sum += diceRoll;
  }
  return diceRollsResult;
};

console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9");

const yesterday = new Date(2024, 5, 27);

const howManyDays = function (date) {
  const now = new Date();
  const timeDifference = now.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};

console.log(`Giorni passati da ${yesterday}: ${howManyDays(yesterday)}`);
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10");

const isTodayMyBirthday = function () {
  const myBirthdayMonth = new Date(1992, 11, 13).getMonth();
  const myBirthdayDay = new Date(1992, 11, 13).getDate();
  const todayMonth = new Date().getMonth();
  const todayDay = new Date().getDate();
  if (todayMonth === myBirthdayMonth && todayDay === myBirthdayDay) {
    return true;
  } else {
    return false;
  }
};

console.log("Oggi è il mio compleanno?", isTodayMyBirthday(yesterday));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11");

const deleteProp = function (obj, str) {
  delete obj[str];
  return obj;
};

console.log(deleteProp(me, "surname"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

console.log("ESERCIZIO 12");

const newestMovie = function (array) {
  let newMovie = array[0];
  for (let i = 0; i < array.length; i++) {
    const currentMovie = array[i];
    if (currentMovie.Year > newMovie.Year) {
      newMovie = currentMovie;
    }
  }
  console.log(newMovie);
};

newestMovie(movies);
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13");
const countMovies = (array) => array.length;
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14");

const onlyTheYears = function (array) {
  const years = array.map((movie) => movie.Year);
  return years;
};

console.log(onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15");

const onlyInLastMillennium = function (array) {
  const lastMillennium = array.filter(
    (movie) => movie.Year < 2000 && movie.Year >= 1000
  );
  return lastMillennium;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16");

const sumAllTheYears = function (array) {
  const years = array.map((movie) => parseInt(movie.Year));
  const yearSum = years.reduce(
    (accumulator, currentYear) => accumulator + currentYear,
    0
  );
  return yearSum;
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17");

const searchByTitle = (str) =>
  movies.filter((movie) => movie.Title.includes(str));

console.log(searchByTitle("ord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo,
   mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("ESERCIZIO 18");

const searchAndDivide = function (str) {
  const result = {
    match: [],
    unmatch: [],
  };
  movies.forEach((item) =>
    item.Title.toLocaleLowerCase().includes(str.toLocaleLowerCase())
      ? result.match.push(item.Title)
      : result.unmatch.push(item.Title)
  );
  return result;
};
console.log(searchAndDivide("avengers"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e 
  ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19");
function removeIndex(n) {
  let remuve = movies.splice(n, 1);
  return remuve;
}
removeIndex(13);
console.log(movies);
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20");
const getContainer = () => document.getElementById("container");

console.log(getContainer());
const colore = () => {
  const h1 = getContainer();
  h1.style.color = "yellow";
};
colore();
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21");

const getTds = () => document.getElementsByTagName("td");

console.log(getTds());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22");

const printTds = () => {
  const tds = getTds();
  for (let i = 0; i < tds.length; i++) {
    const currenTd = tds[i].innerText;
    console.log(currenTd);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("ESERCIZIO 23");

const addRedBg = () => {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    const currentLink = links[i];
    currentLink.style.background = "red";
  }
};
addRedBg();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 24");

const addLi = () => {
  const myList = document.getElementById("myList");
  const newLi = document.createElement("li");
  newLi.innerText = "New List Item";
  myList.appendChild(newLi);
};
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log("ESERCIZIO 25");

const removeLi = () => {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("ESERCIZIO 26");

const addsTestClass = () => {
  const trs = document.getElementsByTagName("tr");
  for (let i = 0; i < trs.length; i++) {
    const currenTr = trs[i];
    currenTr.classList.add("test");
  }
};
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("ESERCIZIO 27");

const halfTree = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    const stringaSella = [];
    for (let b = 1; b <= i; b++) {
      const asterisco = "*";
      stringaSella.push(asterisco);
      string = stringaSella.join("");
    }
    console.log(string);
  }
};

halfTree(3);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("ESERCIZIO 28");

const tree = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    const stringaSella = ["*"];

    const spazio = [];

    for (let c = n; c > i; c--) {
      let space = " ";
      spazio.unshift(space);
    }
    for (let b = 1; b <= i - 1; b++) {
      const asterisco = "**";
      stringaSella.push(asterisco);
    }
    string = spazio.join("") + stringaSella.join("");
    console.log(string);
  }
};

tree(10);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("ESERCIZIO 29");

const isItPrime = (n) => {
  for (let i = 2, b = Math.sqrt(n); i <= b; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

console.log(isItPrime(11));
