// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDolarToYen = function(dollarValue){
    let valueInYen = dollarValue * 147
    return valueInYen
}
const fromYenToPound = (yenValue) =>{
    let valueInPound = yenValue * 0.54
    return valueInPound
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDolarToYen, fromYenToPound };