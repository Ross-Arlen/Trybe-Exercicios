const custo = 10;
const venda = 15;
let lucro = 0;

if (custo<0 || venda<0){
    console.log('Error');
} else {

    for (let index = 0; index < 1000; index++) {
        lucro = lucro+(venda-(custo/100*120));
    }
    console.log(lucro);
}