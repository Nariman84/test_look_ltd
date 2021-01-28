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

    addTagToItem: (itemId, tagName) => {
      items.forEach(item => {
        if (item.id === itemId) {
          item.tags.push(tagName);
        }
      });


    },

    removeTagAt: (itemId, tagIdx) => {
      items.forEach(item => {
        if (item.id === itemId) {
          item.tags.splice(tagIdx, 1);
        }
      });
    },

    getItemById: itemId => {
      return items.find(item => item.id === itemId);
    }
  }
}