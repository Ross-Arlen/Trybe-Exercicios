// Exercício 1:
// const testingScope = (escopo) =>  {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// Exercício 2:

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const crescent = (array) => array.sort((a, b) => a - b);

// console.log(`Os números ${crescent(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Parte II -
// Exercício 1:

// const fatorial = (n) => n <= 1 ? 1 : n * fatorial(n - 1);

// console.log(fatorial(6));

// Exercício 2:

// const longestWord = (str) => {
//     let longest = '';
//     const split = str.split(' ');
//     for (let index = 0; index < split.length; index += 1) {
//         const element = split[index];
//         if (element.length > longest.length) longest = element; 
//     }
//     return longest;
// }

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Exercício 3:
let clickCount = 0;
const count = () => {
    clickCount += 1;
    document.getElementById('counter').innerText = JSON.stringify(clickCount);
}

document.getElementById('count').addEventListener('click', count);