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

export const findInAllItems = (itemName) => {
  const itemTypes = Object.keys(allItems);
  let item;

  itemTypes.forEach((itemType) => {
    const possibleItem = allItems[itemType].find(({ name }) => name === itemName);
    if (possibleItem) {
      item = { item: possibleItem, itemType };
    }
  });

  return item;
};

export const isItemInList = (list, itemName) => {
  const newList = [];
  const listTypes = Object.keys(list);

  listTypes.forEach((listType) => {
    const itemTypes = Object.keys(list[listType]);

    itemTypes.forEach((itemType) => newList.push(...list[listType][itemType]));
  });

  return !!newList.find(({ name }) => name === itemName);
};

export const filterAllItems = (value) => {
  const itemTypes = Object.keys(allItems);
  const filteredItems = {};

  itemTypes.forEach((itemType) => {
    const data = allItems[itemType].filter(
      ({ name }) => name.toLowerCase().includes(value.toLowerCase()),
    );
    if (data.length) {
      filteredItems[itemType] = data;
    }
  });

  return filteredItems;
};
