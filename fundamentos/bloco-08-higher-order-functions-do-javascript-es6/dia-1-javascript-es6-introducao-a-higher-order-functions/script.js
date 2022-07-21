const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const addEmployee = (nome) => {
    const lowerCase = nome.toLowerCase();
    const splitName = lowerCase.split(' ');
    let email = '@trybe.com';
    email = `${splitName[splitName.length - 1]}${email}`;
    for (let index = splitName.length - 2; index >= 0; index -= 1) {
        const element = splitName[index];
        email = `${element}_${email}`;
    }
    return {
        nomeCompleto: nome,
        email: email,
    };
  }

  console.log(newEmployees(addEmployee));