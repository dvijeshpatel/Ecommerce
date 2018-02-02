let viewNavigation = (function(){

  let viewNavigation = {
    init: function() {
      this.addOnClickHandler();
      this.setSearchHandler();
      viewNavigation.render();


    },


    createHomeIconHTML: function() {
      return `<li>
            <a >
            <i id="home-button" data-itemType="*" data-itemSubType="*" class="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>`;
    },
    makeSubCategoiresHTML: function(category) {
      let string = "";
      for (let key in category.subCategories) {
        let item = category.subCategories[key];
        string += `<li><a data-itemType="${category.catId}" data-itemSubType="${item.subCatId}">${item.label}</a></li>`;
      }
      return string;
    },
    makeCategorieHTML: function(category) {
      return ` <li >
            <a data-itemType=${category.catId} data-itemSubType="*">${category.label}</a>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            <ul>
           ${this.makeSubCategoiresHTML(category)}
            </ul>
          </li>`;
    },
    /*navigation  and filter */
    addOnClickHandler: function() {
      document.querySelector(".navigation-bar").addEventListener("click", this.handleOnClick);

    },
    /*click event on navigation element and go for filtering*/
    handleOnClick: function(event) {
      let itemType = event.target.getAttribute('data-itemType');
      let itemSubType = event.target.getAttribute('data-itemSubType');
      console.log(itemType + " " + itemSubType);
      if (itemType != null && itemSubType != null) {
       controllerProductBox.filterItems(itemType, itemSubType);
      }
    },
    /*using search box text go for filtering*/
    searchForItem: function(event) {
      event.stopPropagation();
      let filter = event.target.value.toUpperCase();
      console.log(filter);
      console.log(event.target);
      controllerProductBox.filterUsingSearch(filter);
    },

    setSearchHandler: function() {
      document.getElementById("search-box").addEventListener("keyup", this.searchForItem);
    },
    render: function() {

      let categories = navigationController.getAllCategories();
      let string = "";
      string += this.createHomeIconHTML();
      for (let key in categories) {
        let item = categories[key];
        string += this.makeCategorieHTML(item);
      }
      document.querySelector(".menu").innerHTML = string;
      console.log("HERE");
    },

  };

return viewNavigation;
})();