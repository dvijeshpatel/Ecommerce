let controllerProductBox = (function(){

  let controllerProductBox = {
    addNewItem: function(obj) {
      modelProductBox.add(obj);
      viewProductBox.render();
    },

    getItems: function() {
      return modelProductBox.getAllItems();
    },
    filterItems: function(itemType, itemSubType) {
      modelProductBox.filterItems(itemType, itemSubType);
      viewProductBox.render();
    },
    getItemById: function(itemId) {
      let item = modelProductBox.getAllItems().find(function(element) {
        return element.itemId == itemId;
      });
      return item;
    },
    filterUsingSearch: function(keyword) {
      let itemsToDisplay = JSON.parse(localStorage.items);

      itemsToDisplay = itemsToDisplay.filter(function(element) {
        return (element.itemName.toUpperCase().indexOf(keyword) > -1);
      });
      console.log(itemsToDisplay);
      localStorage.itemsToDisplay = JSON.stringify(itemsToDisplay);
      viewProductBox.render();
    },

    init: function() {
      modelProductBox.init();
      viewProductBox.init();
    }
  };


return controllerProductBox;
})();