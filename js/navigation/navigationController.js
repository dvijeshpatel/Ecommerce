let navigationController = (function(){

  let navigationController = {
    addNewCategory: function(categoryName, categoryObject) {
      modelNavigation.add(categoryName, categoryObject);
      viewNavigation.render();
    },

    getAllCategories: function() {
      return modelNavigation.getAllCategories();
    },

    init: function() {
      modelNavigation.init();
      viewNavigation.init();
      this.viewFilterMenu.init();
    },
    viewFilterMenu: {
      /*hiding filtermenu*/
      hide: function() {
        document.querySelector(".filter-menu").style.display = "none";
      },
      /*showing filtermenu*/
      show: function() {
        document.querySelector(".filter-menu").style.display = "flex";
      },
      /*appending items to filtered path*/
      apendItem: function(name, itemType, itemSubType) {
        let string = `<div data-itemType="${itemType}" data-itemSubType="${itemSubType}" class="filter-menu-item">${name}</div>`;
        document.querySelector(".filter-menu").innerHTML += string;
      },
      /*append arrow to separate elements*/
      apendArrow: function() {
        document.querySelector(".filter-menu").innerHTML += `<i class="fa fa-caret-right" aria-hidden="true" class="filter-menu-item"></i>`;
      },
      /*clearing whole path*/
      clearFilterMenu: function() {
        document.querySelector(".filter-menu").innerHTML = "";
      },
      init: function() {
        document.querySelector(".filter-menu").addEventListener("click", viewNavigation.handleOnClick);
      },
    },
};

return navigationController;
})();