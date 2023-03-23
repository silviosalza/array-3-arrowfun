//pari dispari con arrowfunction, non è hoisted quindi va invocata DOPO

const evenOrOdd = (numberToCheck) => numberToCheck % 2 === 0 ? "even" : "odd"; //la prima risposta è sempre true, la seconda false


evenOrOdd();console.log((evenOrOdd(6)));

// ciclo for each

const students = ["Silvio" , "Hector", "John"]

//scorro array senza for i
// .forEach da tre informazioni (elemento, indice, array) sempre nel solito ordine

students.forEach( (curStudent, index) => {
    console.log(curStudent, index);
})



//creare nuovo array da un array di partenza usando costrutto MAP

const myNumbers = [39, 5, 67, 89, 2 , 11];

// const newArray = []
// myNumbers.forEach((curNumber) => {
//     const nextNumber = curNumber + 1
//     newArray.push(nextNumber)
// })
// console.log(newArray);

const NewArray = myNumbers.map((element)=> element + 1)

console.log(NewArray);


//costrutto filter, che filtra gli elementi e li sposta in un array se sono true. Se sono false non vengono spostati

const myNumbers2 = [24, 7, 29, 86, 22, 111];


const evenNumbers = myNumbers2.filter((elem, index)=> elem % 2 === 0)
console.log(evenNumbers);

//! esercizi snack
// Crea un array composto da 10 automobili.Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array.


cars = [{
    marca: "bmw",
    modello: "M3",
    motore: "benzina",
},
{
    marca: "alfa romeo",
    modello: "giulia",
    motore: "benzina",
},
{
    marca: "volvo",
    modello: "polar",
    motore: "benzina",
},
{
    marca: "mini",
    modello: "cooper",
    motore: "elettrica",
},
{
    marca: "jeep",
    modello: "commander",
    motore: "diesel",
}]

const gasoline = cars.filter((elem)=> elem.motore === "benzina")

const electric = cars.filter((elem)=> elem.motore === "elettrica")

const diesel = cars.filter((elem)=> elem.motore === "diesel")


console.log(gasoline);
console.log(electric);
console.log(diesel);

// Crea un array di oggetti che rappresentano delle persone.Ogni persona ha un nome, un cognome e un’età.Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const people = [{
    nome: "Silvio",
    cognome: "Salza",
    età: 33,
},
{
    nome: "Hector",
    cognome: "Rodriguez",
    età: 31,
},
{
    nome: "John",
    cognome: "Dela Vega",
    età: 13,
}]

const newArray = people.map((elem)=> {
    if (elem.età>17){
        return `${elem.nome} ${elem.cognome} può guidare`;
    } else{
        return `${elem.nome} ${elem.cognome} non può guidare`;
    }
})
console.log(newArray);


