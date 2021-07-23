import { getRandomFromArray, getNearestSlotsCount } from './helpers';
import {
  classes, stats, allItems, skippedTypes, catalystsToMagicPairs,
} from './data';

export default class Character {
  constructor(savedData) {
    if (savedData) {
      this.className = savedData.className;
      this.founded = savedData.founded;
      this.leftHand = savedData.leftHand;
      this.rightHand = savedData.rightHand;
      this.spellSlots = savedData.spellSlots;
      this.spells = savedData.spells;
      this.state = savedData.state;
    } else {
      const {
        name,
        leftHand,
        rightHand,
        spells,
        ...state
      } = getRandomFromArray(classes);
      this.state = state;
      this.className = name;
      this.leftHand = leftHand;
      this.rightHand = rightHand;
      this.spells = spells;
      this.spellSlots = getNearestSlotsCount(state.Attunement);
      this.founded = {};
      this.setFounded('shields', leftHand[0]);
      if (leftHand[1]) {
        this.setFounded('catalysts', leftHand[1]);
      }
      rightHand.forEach((weaponName) => this.setFounded('weapons', weaponName));
      spells.forEach((spellName) => this.setFounded('spells', spellName));
    }
  }

  getCharToSave = () => ({
    className: this.className,
    founded: this.founded,
    leftHand: this.leftHand,
    rightHand: this.rightHand,
    spellSlots: this.spellSlots,
    spells: this.spells,
    state: this.state,
  })

  updateStats = (stat, isLower) => {
    const currentStat = this.state[stat];
    if (isLower && currentStat > 0) {
      this.state = {
        ...this.state,
        [stat]: currentStat - 1,
        lvl: this.state.lvl - 1,
      };
    } else if (!isLower && currentStat < 99) {
      this.state = {
        ...this.state,
        [stat]: currentStat + 1,
        lvl: this.state.lvl + 1,
      };
    }
    this.spellSlots = getNearestSlotsCount(this.state.Attunement);
  }

  updateRandomLvl = () => {
    const stat = getRandomFromArray(stats);
    this.state = {
      ...this.state,
      lvl: this.state.lvl + 1,
      [stat]: this.state[stat] + 1,
    };
    this.spellSlots = getNearestSlotsCount(this.state.Attunement);

    return stat;
  }

  updateRandomLevels = (count) => {
    const updated = {};
    for (let i = 0; i < count; i++) {
      const stat = this.updateRandomLvl();
      if (updated[stat]) {
        updated[stat] += 1;
      } else {
        updated[stat] = 1;
      }
    }

    return updated;
  }

  setFounded = (type, name) => {
    const item = allItems[type].find((sItem) => sItem.name === name);
    if (!this.founded[type]) this.founded[type] = {};
    if (!this.founded[type][item.type]) this.founded[type][item.type] = [];

    this.founded = {
      ...this.founded,
      [type]: {
        ...this.founded[type],
        [item.type]: [
          ...this.founded[type][item.type],
          item,
        ],
      },
    };
  }

  removeFounded = (type, name) => {
    const item = allItems[type].find((sItem) => sItem.name === name);
    this.founded = {
      ...this.founded,
      [type]: {
        ...this.founded[type],
        [item.type]: this.founded[type][item.type].filter(
          ({ name: itemName }) => itemName !== name,
        ),
      },
    };
  }

  checkRequirements = ({
    Strength,
    Dexterity,
    Intelligence,
    Faith,
  }, withCoeff) => (
    this.state.Strength * (withCoeff ? 1.5 : 1) >= (Strength || 0)
            && this.state.Dexterity >= (Dexterity || 0)
            && this.state.Intelligence >= (Intelligence || 0)
            && this.state.Faith >= (Faith || 0)
  )

  getRandomItemByStatsMeet = (itemType, coeff) => {
    if (!this.founded[itemType]) return;
    const types = Object.keys(this.founded[itemType]);
    const foundedItems = [];
    types.forEach((type) => {
      if (skippedTypes.includes(type)) return;
      foundedItems.push(...this.founded[itemType][type]);
    });
    const possibleItems = foundedItems.filter(
      ({ requirements }) => this.checkRequirements(requirements, coeff),
    );
    const randomItem = getRandomFromArray(possibleItems);
    // eslint-disable-next-line no-console
    console.log({
      founded: this.founded,
      possibleItems,
      foundedItems,
      randomItem,
    });

    // eslint-disable-next-line consistent-return
    return getRandomFromArray(possibleItems);
  }

  getRandomSpells = (type) => {
    const spells = [];
    let slotsLeft = this.spellSlots;
    if (!slotsLeft || !type) return spells;
    let stopper = 0;
    const spellTypes = catalystsToMagicPairs[type];
    if (!this.founded.spells || !this.founded.spells[spellTypes]) return spells;
    let possibleSpells = this.founded.spells[spellTypes].filter((spell) => {
      const { requirements: { Slots, ...rest } } = spell;
      return this.checkRequirements(rest) && Slots <= slotsLeft;
    });

    if (!possibleSpells.length) return spells;

    do {
      stopper++;
      const spell = getRandomFromArray(possibleSpells);
      if (slotsLeft - spell.requirements.Slots < 0) {
        possibleSpells = possibleSpells.filter(({ name }) => name === spell.name);
        // eslint-disable-next-line no-continue
        continue;
      }
      spells.push(spell);
      slotsLeft -= spell.requirements.Slots;
      possibleSpells = possibleSpells.filter(({ name }) => name !== spell.name);
    } while (slotsLeft > 0 && possibleSpells.length && stopper < 20);

    return spells.map(({ name }) => name);
  }

  getRandomItems = () => {
    const { name: weapon } = this.getRandomItemByStatsMeet('weapons', true) || {};
    const { name: shield } = this.getRandomItemByStatsMeet('shields') || {};
    const { name: catalyst, type } = this.getRandomItemByStatsMeet('catalysts', true) || {};
    const spells = this.getRandomSpells(type);

    this.leftHand = [shield, catalyst].filter((a) => a);
    this.rightHand = [weapon];
    this.spells = spells;
  }
}
