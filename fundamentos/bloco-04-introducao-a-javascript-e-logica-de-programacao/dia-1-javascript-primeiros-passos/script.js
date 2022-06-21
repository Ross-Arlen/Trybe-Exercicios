let peça = 'REI';
peça = peça.toLowerCase();
switch (peça) {
    case 'peão':
    console.log('Se move para a frente, até duas casas no primeiro turno, ou só uma casa à partir daí. Ataca em diagonal, uma casa apenas.');
    break;
    case 'bispo':
    console.log('Se move e ataca em diagonal. Quantas casas de distância for necessário.');
    break;
    case 'torre':
    console.log('Se move e ataca em linha reta. Quantas casas de distância for necessário.');
    break;
    case 'cavalo':
    console.log('Se move e ataca em L. Três casas de movimento ou no total.');
    break;
    case 'rainha':
    console.log('Se move e ataca em qualquer direção. Quantas casas de distância for necessário.');
    break;
    case 'rei':
    console.log('Se move e ataca em qualquer direção. Apenas uma casa de distância.');
    break;
}