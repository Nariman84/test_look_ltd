function ItemService() {

  const items = makeDefaultData();

  return {
    getAllItems: () => items,
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
    
    addTagToItem: (item, tagName) => {
      item.tags.push(tagName);
    },

    removeTagAt: (item, tagIdx) => {
      item.tags.splice(tagIdx, 1);
    },

    getItemById: itemId => {
      return items.find(item => item.id === itemId);
    }
  }
}