const fs = require("fs")
const flagsfile = "./datos.js";

const data = fs.readFileSync(flagsfile, { encoding: "utf8" });
const numbers = data.split(" ").map(Number);
const evenNumbers = numbers.filter((number) => number % 2 === 0)
const quantity = evenNumbers.length;



function readFile(archive) {
    const content = fs.readFileSync(archive, { encoding: "utf8" })
    return content;
}
readFile(flagsfile)


function writeFile(archive, content) {
    fs.writeFileSync(archive, content)
}

writeFile('./datos_numeros_pares.txt', `El archivo "datos.txt" tiene ${quantity} numeros pares`)


console.log(quantity)




