function ItemService() {

  const items = makeDefaultData();
  let copyItems = [...items];

  return {
    getAllItems: () => [...copyItems],
    addItem: title => {

      const newItem = {
        id: makeDataId(),
        title: title,
        tags: [],
        date: (new Date()).toISOString()
      };

      items.push(newItem);
      return newItem;
    },

    addTagToItem: (itemId, tagName) => {
      let item = items.find(item => item.id === itemId);
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.tags.push(tagName);

      items.forEach(function(item, index) {
        if (item.id === itemId) {
          this[index] = newItem;
        }
      }, items);

      copyItems = [...items];
    },

    removeTagAt: (itemId, tagIdx) => {
      let item = items.find(item => item.id === itemId);
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.tags.splice(tagIdx, 1);

      items.forEach(function(item, index) {
        if (item.id === itemId) {
          this[index] = newItem;
        }
      }, items);

      copyItems = [...items];
    },

    getItemById: itemId => {
      const item = items.find(item => item.id === itemId);
      return JSON.parse(JSON.stringify(item));
    }
  }
}