function ItemService() {

  const items = makeDefaultData();

  return {
    getAllItems: () => [...items],
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
      const item = items.find(item => item.id === itemId);
      const index = items.indexOf(item);
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.tags.push(tagName);

      items.splice(index, 1, newItem);
    },

    removeTagAt: (itemId, tagIdx) => {
      const item = items.find(item => item.id === itemId);
      const index = items.indexOf(item);
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.tags.splice(tagIdx, 1);

      items.splice(index, 1, newItem);
    },

    getItemById: itemId => {
      const item = items.find(item => item.id === itemId);
      return JSON.parse(JSON.stringify(item));
    }
  }
}