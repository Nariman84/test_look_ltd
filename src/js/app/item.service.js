function ItemService() {

  const items = makeDefaultData();
  let selectedItem = items[0];

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
    
    addTagToItem: tagName => {
      selectedItem.tags.push(tagName);
    },

    removeTag: tagIdx => {
      selectedItem.tags.splice(tagIdx, 1);
    },

    getItemById: itemId => {
      selectedItem = items.find(item => item.id === itemId);
      return selectedItem;
    }
  }
}