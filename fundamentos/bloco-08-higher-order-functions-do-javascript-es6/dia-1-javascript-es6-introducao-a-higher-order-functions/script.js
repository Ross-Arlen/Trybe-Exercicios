const sorteio = (number, func) => {
    const randNumber = Math.round(Math.random() * 5);
    if (func(number, randNumber)) {
    return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

const check = (number, randNumber) => {
    if (number === randNumber) {
        return true;
    }
    return false;
}

console.log(sorteio(3, check));