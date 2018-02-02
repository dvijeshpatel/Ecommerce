let modelNavigation = (function(){
let modelNavigation = {
      /*data is category */
    init: function() {
      if (!localStorage.categories) {
        localStorage.categories = JSON.stringify(modelCategories);
      }
    },
    add: function(categoryName, categoryObject) {
      let data = JSON.parse(localStorage.categories);
      data[categoryName] = categoryObject;
      localStorage.categories = JSON.stringify(data);
    },
    getAllCategories: function() {
      return JSON.parse(localStorage.categories);
    }
  };
return modelNavigation;
})();