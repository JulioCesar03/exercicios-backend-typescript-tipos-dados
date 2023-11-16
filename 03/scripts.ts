type valores = number[]
const multiplicacao = (numeros: valores) => {
    for (const numero of numeros) {
        for (let i = 0; i < 11; i++) {
            console.log(`${numero} x ${i} = ` + numero * i);
        }
        console.log("--------------------");
        
    }
}
multiplicacao([1, 5, 2])