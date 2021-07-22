import weapons from './weapons';
import shields from './shields';
import catalysts from './catalysts';
import spells from './spells';
import locations from './locations';
import classes from './classes';

export const allItems = {
  weapons,
  shields,
  catalysts,
  spells,
};

export const catalystsToMagicPairs = {
  'Pyromancy Flames': 'Pyromancies',
  Staves: 'Sorceries',
  Talismans: 'Miracles',
  Chimes: 'Miracles',
};

export const skippedTypes = [
  'Bows',
  'Geatbows',
  'Crossbows',
];

export const stats = [
  'Vigor',
  'Attunement',
  'Endurance',
  'Vitality',
  'Strength',
  'Dexterity',
  'Intelligence',
  'Faith',
  'Luck',
];

export const attunementSlots = [
  10,
  14,
  18,
  24,
  30,
  40,
  50,
  60,
  80,
  99,
];

export {
  locations,
  classes,
};
