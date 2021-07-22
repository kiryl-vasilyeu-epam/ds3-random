import { attunementSlots, allItems } from './data';

export const getRandomFromArray = (array) => array[Math.floor(Math.random() * array.length)];

export const getNearestSlotsCount = (attunement) => {
  let slotsCount = 0;
  for (let i = 0; attunementSlots; i++) {
    if (attunement < attunementSlots[i]) break;
    slotsCount = i + 1;
  }

  return slotsCount;
};

export const setAllFounded = (char) => {
  const keys = Object.keys(allItems);
  keys.forEach((key) => {
    allItems[key].forEach((item) => {
      char.setFounded(key, item.name);
    });
  });
};
