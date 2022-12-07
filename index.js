// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
   
function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(Ralph){
    var newArray = cats.slice();
    newArray.push(Ralph)
    return newArray
}


function prependCat(Ralph){
    var newArray = cats.slice();
    newArray.unshift(Ralph)
    return newArray
}


function removeLastCat(Ralph){
    var newArray = cats.slice();
    newArray.pop(Ralph)
    return newArray
}


function removeFirstCat(Ralph){
    var newArray = cats.slice();
    newArray.shift(Ralph)
    return newArray
}