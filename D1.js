/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// I datatype principali sono Numeri, Stringhe, Booleani, Null, Undefined

// Numeri = si usa per numeri primi (1, 2 ,3 ,etc..), e anche decimali (0,5, etc)
// Stringhe = si usa per inserire frasi e parole
// Booleani = i Booleani possono essere solamente true o false
// Null = é un assenza di valori intenzionale data dallo sviluppatore
// Undefined = é una assenza di valore non intenzionale spesso un errore

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Alan";
// const myName = "Alan";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum = 12 + 20;
console.log("Questo é il risultato =", sum);
// CONSOLE: Questo é il risultato = 32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log("Valore di x =", x);
// CONSOLE: Valore di x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Donati";
console.log("Nuovo valore di myName:", myName);
// CONSOLE: Nuovo valore di myName: Donati

// Dimostrazione impossibilitá di riassegnare un valore ad una variabile dichiarata con il costrutto const

// CONSOLE: D1.js:59 Uncaught TypeError: Assignment to constant variable.
// at D1.js:59:8

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let minus = 4 - x;
console.log("Risultato sottrazione con variabile x:", x);
// CONSOLE: Risultato sottrazione con variabile x: 12

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
// let verify = name1 === name2;
// let verify = name1 !== name2;

// console.log("Dimostrazione disuguaglianza variabili name1, name2:", verify);
// CONSOLE: Dimostrazione disuguaglianza variabili name1, name2: true

//lowercase test
// Su MDN la usa in console magari a me serve prima per piú di una variabile?

// name1.toLowerCase()
// name2.toLowerCase()
// console.log(verify);
// Niente cosí da sempre errore

// magari nel log prima di verify?
// console.log(name1.toLowerCase(), name2.toLowerCase(), verify)
// sempre errore forse peggio provo magari nella variabile stessa?

let verify = name1.toLowerCase() === name2.toLowerCase();

console.log("Verifica test toLoweCase:", verify);
// CONSOLE: Verifica test toLoweCase: true // Funziona !!!! :D
