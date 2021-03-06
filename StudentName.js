'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

function wordCutter(words) {
    let result           = '';
    let testWord       = "esternocleidomastoideo";
    let charactersLength = testWord.length;
    for ( let i = 0; i < words; i++ ) {
      result += testWord.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result.split('');

   
}

console.log(wordCutter(24));







/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/



// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    let testTargetWordA = "Sabrosura";
    let testTargetWordB = "Sazón";
    let testTargetWordC = "Tempurado";
    let testWordsList = [
        "Sabr0sura",
        "Gozadera",
        "ritmo",
        "TEMPURADO",
        "SAZON",
        "Chevere",
        "Meneo",
    ];
testTargetWordA.includes(targetWord)
testTargetWordB.includes(targetWord)
testTargetWordC.includes(targetWord)
testWordsList.includes(wordsList)

    
}

console.log(wordSearcherIgnoreCase('a',['Sabrosura','Gozadera','Ritmo','Tempurado']));

/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    // :)
}


/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";
function palindromeVerifier(word) {
   
return word.split('').reverse().join('') === word;


}

console.log(palindromeVerifier(onVerificationWordA))
console.log(palindromeVerifier(onVerificationWordB))
console.log(palindromeVerifier(onVerificationWordC))
console.log(palindromeVerifier(onVerificationWordD))


/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/

function lettersCounter(objectContainer) {
    let containerTestObject = {
        list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
    }

    let result = containerTestObject.list.split('');
    console.log(result);


    let counter = 0;
    for (let i = 0; i < objectContainer.length; i++) {
        if(containerTestObject.indexOf(objectContainer[i]) !== -1){
            counter +=1;
        }
        console.log(counter);
        return counter;
    }
}


/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
 return listA.concat(listB)
}
console.log(arrayJoiner(['a','mi','me','gusta','la','parranda'],['a','mi','me','gustan','las','mujeres']));


/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/


let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    wordToExplore = wordToExplore.split('')
    listOfWords = listOfWords.split('');

    wordToExplore = wordToExplore.sort('')
    listOfWords = listOfWords.sort('')

    wordToExplore = wordToExplore.join('')
    listOfWords = listOfWords.join('')

    if(wordToExplore===listOfWords){
        return true;
    }else{
        return false;
    }

  
}
//console.log(anagramVerifier(testWordToExplore,...wordsToVerify))
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    // :)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));




/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    let replaceWords = words;
    return replaceWords.replace(/[aeiou]/gi,'x')
}
console.log(lastVocalReplacer("compañeros"));
console.log(lastVocalReplacer("estudiantes"));
console.log(lastVocalReplacer("señores"));
console.log(lastVocalReplacer("amigos"));
console.log(lastVocalReplacer("graduandos"));
console.log(lastVocalReplacer("artistas"));
console.log(lastVocalReplacer("universitarios"));





/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}