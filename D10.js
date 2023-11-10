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

/* const sum = 10 + 20;
console.log(sum) */

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

/* const random = Math.floor(Math.random() * 21);
console.log(random) */

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

/* const me = {
  name: "Gabriele",  
  surname: "Delfrate Alvazzi", 
  age: 28 
};   */

//console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

/* delete me.age;
//console.log(me) */

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

/* me.skills = ["HTML", "CSS", "JAVASCRIPT(più o meno)"]
me.skills.push
//console.log(me) */

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

/* me.skills.push("Python")
//console.log(me) */


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

/* me.skills.pop();
console.log(me) */

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

 /* const dice = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

const result = dice(); */
//console.log("Il numero estratto dal dado è " + result);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

/* const whoIsBigger = (num1, num2) => {
  return Math.max(num1, num2);
}

const result = whoIsBigger(994, 3);
console.log("Il numero più grande è: " + result); */

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

/* const splitMe = (input) => {
  const wordsArray = input.split(' ');
  return wordsArray;
}

const frase = "JavaScrip è il linguaggio di programmazione più bello è semplice del mondo";
const result = splitMe(frase);
console.log(result); */


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

/* const deleteOne = (input, veroFalso) => {
  if (veroFalso === true) {
      return input.substring(1);
  } else {  
    return input.substring(0, input.length - 1);
  }
}

const input1 = "Java";
const result = deleteOne(input1, true);
//console.log(result); 

const input2 = "Script";
const result2 = deleteOne(input2, false);
console.log(result2);  */


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

/* const onlyLetters = (input) => {
  return input.replace(/[0-9]/g, ''); //soluzione trovata su stackoverflow
}

const frase = "Io amo J1a2v3a4S5c6r7i8p9t";
const result = onlyLetters(frase);
console.log(result);  */


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* const isThisAnEmail = (email) => {
  const emailTester = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//regular expression trovata su google
  return emailTester.test(email);
}

const email1 = "gabriele@epicode.com";
//console.log(isThisAnEmail(email1));

const email2 = "gabriele,epicode.com";
console.log(isThisAnEmail(email2)); 
 */

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

/* const whatDayIsIt = () => { 
  const currentDate = new Date();
  const giorniDellaSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const indiceGiorno = currentDate.getDay();
  return giorniDellaSettimana[indiceGiorno];
}

const giornoCorrente = whatDayIsIt();
console.log("Oggi è " + giornoCorrente); */


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

/* const rollTheDices = (numeroInvocazioni) => {
  let result = {
    sum: 0,
    values: []
  };

  for (var i = 0; i < numeroInvocazioni; i++) {  
    const valoreEstratto = dice();
    result.sum += valoreEstratto;
    result.values.push(valoreEstratto);
  }
  return result;
}

const valoreLanci = rollTheDices(87);
console.log("Risultato dei lanci:", valoreLanci); */


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

/* const howManyDays = (inputData) => {
  const giornoAttuale = new Date();
  const inserisciGiorno = new Date(inputData);  
  const msTrascorsi = giornoAttuale - inserisciGiorno;
  
  const giorniTrascorsi = Math.floor(msTrascorsi / (1000 * 60 * 60 * 24));
  return giorniTrascorsi;
}

const inputData = "1995-04-27"; 
const daysPassed = howManyDays(inputData);
console.log("Giorni trascorsi dalla data:", daysPassed); */

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

/*const isTodayMyBirthday = (birthday) => {  
  const dataCorrente = new Date();
  const compleanno = new Date(birthday);

  const oggiCompleanno = dataCorrente.getDate() === compleanno.getDate() && dataCorrente.getMonth() === compleanno.getMonth();
  return oggiCompleanno;
}

const mioCompleanno = "1995-11-10"; 
const result = isTodayMyBirthday(mioCompleanno);
console.log("Oggi è il mio compleanno?", result); */

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/*const deleteProp = (object, property) => {
    if (property in object) {    
    delete object[property];
  }
  return object;
}

const car = {
  brand: "Cupra",
  name: "Formentor",
  chilometres: 5000
};

const propertyNameToDelete = "chilometres";
const modObject = deleteProp(car, propertyNameToDelete);

console.log(modObject); */


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (movies) => { 
    
  movies.sort(function(a, b) {
    return parseInt(b.Year) - parseInt(a.Year);
  }); //l'idea di riordinare mi è venuta cercando su google
  return movies[0]; //cosi dovrebbe selezionare il primo della lista riordinata
}
//l'invocazione si trova sotto l'array

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (movies) => {
  return movies.length;
}
//l'invocazione si trova sotto l'array

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (movies) => {  
  const yearsArray = movies.map(function(movie) {
    return movie.Year;
  });
  return yearsArray;
}
//l'invocazione si trova sotto l'array

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (movies) => {  
  const lastMillenniumMovies = movies.filter(function(movie) {
    const year = parseInt(movie.Year);
    return year >= 1000 && year < 2000;
  });
  return lastMillenniumMovies;
}
//l'invocazione si trova sotto l'array

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (movies) => {
   const sommaAnni = movies.reduce(function(sum, movie) {
    return sum + parseInt(movie.Year);
  }, 0);
  return sommaAnni;
}
//l'invocazione si trova sotto l'array

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (stringaRicerca, movies) => {
  if (stringaRicerca.trim() === '') {    
    alert("Scrivi qualcosa!");
  } else { 
  const matchingMovies = movies.filter(function(movie) {
    return movie.Title.toLowerCase().includes(stringaRicerca.toLowerCase());
  });
  return matchingMovies;
}}
//l'invocazione si trova sotto l'array

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (ricerca, movies) => { 
  if (ricerca.trim() === '') {    
    alert("Scrivi qualcosa!");
  } else {
  const matchingMovies = movies.filter(function(movie) {
    return movie.Title.toLowerCase().includes(ricerca.toLowerCase());
  }); 
  const nonMatchingMovies = movies.filter(function(movie) {
    return !movie.Title.toLowerCase().includes(ricerca.toLowerCase());
  }); 
  return {
    match: matchingMovies,
    unmatch: nonMatchingMovies
  };
}}
//l'invocazione si trova sotto l'array

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (index, movies) => {  
  if (index >= 0 && index < movies.length) {    
    const updatedMovies = [...movies.slice(0, index), ...movies.slice(index + 1)];
    return updatedMovies;
  } else {    
    return movies;
  }
}
//l'invocazione si trova sotto l'array

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selezionaContainer = () => {
  const cont = document.getElementById("container");
  console.log(cont)
}
console.log(selezionaContainer())

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selezionaTd = () => {
  const elementiTd = document.getElementsByTagName("td");
  console.log(elementiTd)
}
console.log(selezionaTd())

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stampaTd = () => {
  const elementiTd = document.getElementsByTagName("td");
  for (let i = 0; i < elementiTd.length; i++) {
    console.log(elementiTd[i].textContent);
  }
}
console.log(stampaTd())

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const sfondoLinkRosso = () => {
  const links = document.querySelectorAll("a");  
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}
sfondoLinkRosso()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const aggiungiElementoLi = () => {
  const lista = document.getElementById("myList")
  const nuovoElemento = document.createElement("li");
  nuovoElemento.innerText = "PERIOD"
  lista.appendChild(nuovoElemento)
}
aggiungiElementoLi()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const svuotaLista =() => {
  const lista = document.getElementById("myList");
  lista.innerHTML = "";
}
//svuotaLista() //commento l'invocazione per far vedere che la funzione dell'esercizio 24 va.

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const stileTr = () => {
  const elementiTr = document.getElementsByTagName("tr")
  for (let i = 0; i < elementiTr.length; i++) {
    elementiTr[i].classList.add("test");
  }
}
stileTr()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
// inizialmente avevo concepito una funzione identica a quella dell'esercizio 28, con la differenza che alla riga 498 scrivevo ".repeat(i-1)". In questo modo però l'albero veniva specchiato rispetto all'esempio. Ho poi provato annidando 2 cicli for, uno per stampare righe vuote e un altro successivo per stamparci dentro gli asterischi. Per assurdo funziona (prima di capire che sul secondo for serviva += ci ho messo 10min e qualche imprecazione)

const halfTree = (altezza2) => {
for (let i = 1; i <= altezza2; i++) {
  let riga = ' ';
  for (let k = 1; k <= i; k++) {
    riga += '*';
  }
  console.log(riga);
}}
halfTree(9)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (altezza) =>{
  for (let i = 1; i <= altezza; i++) {
    let spazi = ' '.repeat(altezza - i);
    let asterischi = '*'.repeat(2*i - 1);
    console.log(spazi + asterischi);
  }
}
tree(9)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

//invocazione esercizio12
/* const filmRecente = newestMovie(movies);
console.log("Il film più recente è:", filmRecente); */

//invocazione esercizio13
/* const numeroFilm = countMovies(movies);
console.log("Il numero totale di film è:", numeroFilm); */

//invocazione esercizio14
 /* const yearsOfMovies = onlyTheYears(movies);
console.log("Anni di uscita dei film:", yearsOfMovies); */ 

//invocazione esercizio15
/* const secondMillenniumMovies = onlyInLastMillennium(movies);
console.log("Film prodotti nel secondo millennio:", secondMillenniumMovies); */

//invocazione esercizio16
/* const sommaAnniTotale = sumAllTheYears(movies);
console.log("La soomma di tutti gli anni è:", sommaAnniTotale); */

//invocazione esercizio17
/* const risultatoRicerca = searchByTitle("Avengers", movies);
console.log("Risultato della ricerca per titolo:", risultatoRicerca);  */

//invocazione esercizio18
/* const risultatoRicerca = searchAndDivide("flies", movies);
console.log("Film corrispondenti:", risultatoRicerca.match);
console.log("Film non corrispondenti:", risultatoRicerca.unmatch); */

//invocazione esercizio19
/* const indexDaRimuovere = 4; 
const moviesModificato = removeIndex(indexDaRimuovere, movies);
console.log(moviesModificato); */