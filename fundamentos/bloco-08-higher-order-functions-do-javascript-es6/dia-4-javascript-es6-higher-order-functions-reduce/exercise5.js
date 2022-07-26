const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) => {
        curr.split('').forEach((char) => (char === 'a' || char ==='A') ? acc += 1 : acc = acc);
        return acc;
    }, 0);
  }
  console.log(containsA());