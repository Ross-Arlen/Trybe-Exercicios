let palavra = 'tryber';
let palavraInvertidaArray = [];
let palavraInvertida

for (let index = 0; index < palavra.length; index += 1) {
    palavraInvertidaArray[palavra.length-(index+1)] = palavra[index];
    palavraInvertida = palavraInvertidaArray.join('');
}
console.log(palavraInvertida);