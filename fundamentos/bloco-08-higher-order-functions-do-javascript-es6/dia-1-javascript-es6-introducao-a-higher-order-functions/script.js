const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const  dragonDmg = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;

  const  warriorDmg = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;

  const mageAtk = () => {
    if (mage.mana < 15) {
        return {
            dmg: 'Não possui mana suficiente',
        manaCost: 0,
        }
    }
    return {
        dmg: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence,
    manaCost: 15,
    }
  }

  const gameActions = {
    warriorTurn: (dmg) => {
        dragon.healthPoints -= dmg;
        warrior.damage = dmg;
    },
    mageTurn: (dmg) => {
        dragon.healthPoints -= dmg.dmg;
        mage.damage = dmg.dmg;
        mage.mana -= dmg.manaCost;
    },
    dragonTurn: (dmg) => {
        warrior.healthPoints -= dmg;
        mage.healthPoints -= dmg;
        dragon.damage = dmg;
    },
    update: () => {
        console.log(`Dano do Dragão: ${dragon.damage}
Dano do Guerreiro: ${warrior.damage}
Dano do Mago: ${mage.damage}

HP restante-
Dragão: ${dragon.healthPoints}
Guerreiro: ${warrior.healthPoints}
Mago: ${mage.healthPoints}
Mana restante do Mago: ${mage.mana}
`);
        return battleMembers;
    },
  }

  while ((warrior.healthPoints > 0 || mage.healthPoints > 0) && dragon.healthPoints > 0) {
    gameActions.warriorTurn(warriorDmg());
    gameActions.mageTurn(mageAtk());
    gameActions.dragonTurn(dragonDmg());
    gameActions.update();
  }
  if ((warrior.healthPoints > 0 || mage.healthPoints > 0)) {
    console.log('Vitória dos Heróis!');
  } else {
    console.log('Vitória do Dragão!');
  }