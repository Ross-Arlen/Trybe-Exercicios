let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
  };


  info['recorrente'] = 'Sim';
  info2['recorrente'] = 'Sim';

  for (const key in info, info2) {
    if (key === 'recorrente') {
        if (info['recorrente'] === 'Sim' && info2['recorrente'] === 'Sim') {
            console.log('Ambos recorrentes');   
        } else if (info['recorrente'] != 'Sim' && info2['recorrente'] != 'Sim') {
            console.log('Nenhum recorrente');
        } else if (info['recorrente'] != 'Sim' && info2['recorrente'] === 'Sim') {
            console.log('Apenas ' + info2.personagem + ' é recorrente');
        } else if (info['recorrente'] === 'Sim' && info2['recorrente'] != 'Sim') {
            console.log('Apenas ' + info.personagem + ' é recorrente');
        }
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
  }