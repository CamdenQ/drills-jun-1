/* eslint-disable no-console */
/* eslint-disable strict */
class Character {
  constructor (name, race, origin = 'Middle Earth', attack, defense, nickname = '') {

    this.name = name;
    this.nickname = nickname;
    this.race = race;
    this.origin = origin;
    this.attack = attack;
    this.defense = defense;
  }

  describe() {
    console.log(`${this.name} is a ${this.race} from ${this.origin}`);
  }

  evaluateFight(characterObj) {
    if (this.attack-characterObj.defense>=0 && characterObj.attack-this.defense>=0) {
      return `Your opponent takes ${this.attack-characterObj.defense} damage and you receive ${characterObj.attack-this.defense} damage.`;
    } else if (this.attack-characterObj.defense<0 && characterObj.attack-this.defense>=0) {
      return `Your opponent takes 0 damage and you take ${characterObj.attack-this.defense} daamge.`;
    } else if (this.attack-characterObj.devense<=0 && characterObj.attack-this.defense<0) {
      return `Your opponent takes ${this.attack-characterObj.defense} damage and you take 0 damage.`;
    } else if (this.attack-characterObj.defense<0 && characterObj.attack-this.defense<0) {
      return 'You and your opponent each take no damage.';
    }
  }
}

const gandalf = new Character('Gandalf the White', 'Wizard', 'Middle Earth', 10, 6, 'gandalf');
console.log(gandalf);

const bilbo = new Character('Bilbo Baggins', 'Hobbit', 'The Shire', 2, 1, 'bilbo');

const frodo = new Character('Frodo Baggins', 'Hobbit', 'The Shire', 3, 2, 'frodo');

const aragorn = new Character('Aragorn son of Arathorn', 'Man', 'Dunnedain', 6, 8, 'aragorn');

const legolas = new Character('Legolas', 'Elf', 'Woodland Realm', 8, 5, 'legolas');

const characters = [gandalf, bilbo, frodo, aragorn, legolas];

const arwen = new Character('Arwen Undomiel', 'Half-Elf', 'Rivendell', 7, 4, 'arwen');

characters.push(arwen);

// let found = characters.find(character => character.nickname==='aragorn');

characters
  .find(character => character.nickname==='aragorn')
  .describe();

let hobbits = characters.filter(character => character.race==='Hobbit');

console.log(JSON.stringify(hobbits));

let highAttack = characters.filter(character => character.attack > 5);

console.log(JSON.stringify(highAttack));

function equipChar(target, equipment) {
  characters.find(character => character.nickname === target).weapons = equipment;
}

equipChar('gandalf', 'a wizard staff');
equipChar('bilbo', 'the One Ring');
equipChar('frodo', 'Sting and Barrow Blade');
equipChar('aragorn', 'Anduril');
equipChar('legolas', 'Bow and Arrow');
equipChar('arwen', 'Hadhafang');

console.log(characters.find(character => character.nickname === 'bilbo').weapons);