let modelProductBox = (function(){

  let modelProductBox = {
    init: function() {
      if (!localStorage.items) {
        localStorage.items = JSON.stringify(modelItems);
      }
      if (!localStorage.itemsToDisplay) {
        console.log(modelItems);
        localStorage.itemsToDisplay = JSON.stringify(modelItems);
      }
    },
    add: function(obj) {
      var data = JSON.parse(localStorage.items);
      data.push(obj);
      localStorage.items = JSON.stringify(data);
    },
    getAllItems: function() {
      let itemsToDisplay = JSON.parse(localStorage.itemsToDisplay);
      console.log(typeof itemsToDisplay);
      return itemsToDisplay;
    },
    filterItems: function(itemType, itemSubType) {
      let itemsToDisplay = JSON.parse(localStorage.items);
      console.log(itemsToDisplay);
      navigationController.viewFilterMenu.clearFilterMenu();

      let cat, subCat;
      navigationController.viewFilterMenu.show();
      navigationController.viewFilterMenu.apendItem("All", "*", "*")

      if (itemType != '*') {
        itemsToDisplay = itemsToDisplay.filter(function(item) {
          return item.itemType == itemType;
        });
        navigationController.viewFilterMenu.apendArrow();
        let categories = JSON.parse(localStorage.categories);
        for (let key in categories) {
          cat = categories[key];
          if (cat.catId == itemType) {
            break;
          }
        }
        navigationController.viewFilterMenu.apendItem(cat.label, itemType, "*");
      }

      if (itemSubType != '*') {
        itemsToDisplay = itemsToDisplay.filter(function(item) {
          return item.itemSubType == itemSubType;
        });

        navigationController.viewFilterMenu.apendArrow();

        for (let key in cat.subCategories) {
          subCat = cat.subCategories[key];
          console.log(subCat);
          if (subCat.subCatId == itemSubType) {

            break;
          }
        }
        console.log(subCat);
        navigationController.viewFilterMenu.apendItem(subCat.label, itemType, itemSubType);
      }
      console.log(itemsToDisplay);
      localStorage.itemsToDisplay = JSON.stringify(itemsToDisplay);
    },
  };



return modelProductBox;
})();