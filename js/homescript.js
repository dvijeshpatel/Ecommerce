(function() {
  "use strict"
  let modelCategories = {
    electronis: {
      catId: 0,
      label: "Electronics",
      subCategories: {
        mobiles: {
          subCatId: 0,
          label: "Mobiles"
        },
        laptops: {
          subCatId: 1,
          label: "Laptops"
        },
        cameras: {
          subCatId: 2,
          label: "Cameras"
        }
      }
    },
    Appliances: {
      catId: 1,
      label: "Appliances",
      subCategories: {
        televisions: {
          subCatId: 0,
          label: "Televisions"
        },
        washingMachines: {
          subCatId: 1,
          label: "Washing Machines"
        },
        refrigarators: {
          subCatId: 2,
          label: "Refrigarators"
        },
      }
    },


    Furniture: {
      catId: 2,
      label: "Furnitures",
      subCategories: {
        beds: {
          subCatId: 0,
          label: "Beds"
        },
        sofas: {
          subCatId: 1,
          label: "Sofas"
        },
        chairs: {
          subCatId: 2,
          label: "Chairs"
        },
      }
    },




  };
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
}


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
  navigationController.init();

  let modelItems = [{
      itemId: 1,
      itemType: modelCategories.electronis.catId,
      itemSubType: modelCategories.electronis.subCategories.mobiles.subCatId,
      imagePath: "./assets/items/electronics/mobiles/0.png",
      itemName: "Samsung Galexy Note 8",
      itemPrice: 10000,
      itemRating: 4.2,
      itemDescription: {
        "Display Size": "5.7 inch",
        "Resolution": "2560 x 1440 Pixels",
        "Resolution Type": "Quad HDh",
        "GPU": "ARM Mali-T760 MP8",
        "Display Type": "Super AMOLED",

      },
      quantity: 4,
    },
    {
      itemId: 2,
      itemType: modelCategories.electronis.catId,
      itemSubType: modelCategories.electronis.subCategories.mobiles.subCatId,
      imagePath: "./assets/items/electronics/mobiles/1.png",
      itemName: "Redmi Note 4 ",
      itemPrice: 11999,
      itemRating: 4.4,
      itemDescription: {
        "Display Size": "5.5 inch",
        "Resolution": "1920 x 1080 pixels",
        "Resolution Type": "Full HD",
        "GPU": "Adreno 506",
        "Display Type": "IPS",

      },
      quantity: 3,
    },
    {
      itemId: 3,
      itemType: modelCategories.electronis.catId,
      itemSubType: modelCategories.electronis.subCategories.mobiles.subCatId,
      imagePath: "./assets/items/electronics/mobiles/2.png",
      itemName: "Sony Xperia R1 Dual",
      itemPrice: 12990,
      itemRating: 3.9,
      itemDescription: {
        "Display Size": "5.2 inch",
        "Resolution": "1280 x 720 Pixels",
        "Resolution Type": "HD",
        "GPU": "ARM",
        "Display Type": "Super AMOLED",

      },
      quantity: 2,
    },
    {
      itemId: 4,
      itemType: modelCategories.electronis.catId,
      itemSubType: modelCategories.electronis.subCategories.laptops.subCatId,
      imagePath: "./assets/items/electronics/laptops/0.png",
      itemName: "Apple MacBook Air",
      itemPrice: 57990,
      itemRating: 4.7,
      itemDescription: {
        "Processor Brand": "Intel",
        "Processor Name": "Core i5",
        "RAM": "8 GB",
        "GPU": "ARM Mali-T760 MP8",
        "Clock Speed": "1.8 GHz",

      },
      quantity: 3,
    },
    {
      itemId: 5,
      itemType: modelCategories.electronis.catId,
      itemSubType: modelCategories.electronis.subCategories.laptops.subCatId,
      imagePath: "./assets/items/electronics/laptops/1.png",
      itemName: "Apple MacBook Air",
      itemPrice: 57990,
      itemRating: 4.7,
      itemDescription: {
        "Processor Brand": "Intel",
        "Processor Name": "Core i5",
        "RAM": "8 GB",
        "GPU": "ARM Mali-T760 MP8",
        "Clock Speed": "1.8 GHz",

      },
      quantity: 3,
    },

    {
      itemId: 6,
      itemType: modelCategories.electronis.catId,
      itemSubType: modelCategories.electronis.subCategories.laptops.subCatId,
      imagePath: "./assets/items/electronics/laptops/2.png",
      itemName: "Apple MacBook Air",
      itemPrice: 57990,
      itemRating: 4.7,
      itemDescription: {
        "Processor Brand": "Intel",
        "Processor Name": "Core i5",
        "RAM": "8 GB",
        "GPU": "ARM Mali-T760 MP8",
        "Clock Speed": "1.8 GHz",

      },
      quantity: 3,
    },
    {
      itemId: 7,
      itemType: modelCategories.Appliances.catId,
      itemSubType: modelCategories.Appliances.subCategories.televisions.subCatId,
      imagePath: "./assets/items/appliances/televisions/0.png",
      itemName: "Vu 98cm (39 inch) Full HD LED TV",
      itemPrice: 19999,
      itemRating: 4.4,
      itemDescription: {
        "Dimensions": "886 mm x 517 mm x 84 mm",
        "Weight": "6.5 kg",
        "Warranty Summary": "1 Year VU India Warranty",
        "Power Consumption": "70 W",

      },
      quantity: 3,
    },


  ];

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


  let viewProductBox = {
    init: function() {
      viewProductBox.render();
      this.addPutInCartHandler();

    },
    /*add to cart button event handler*/
    addPutInCartHandler: function() {
      document.querySelector(".product-box").addEventListener("click", this.addToCartEventHandler);
    },
    addToCartEventHandler: function(event) {
      console.log("HEREEE");
      let elementType = event.target.getAttribute('data-type');
      if (elementType == 'addToCart') {
        let itemId = event.target.getAttribute('data-itemId')
        let isItemPresent =
          cartController.getItemByItemId(itemId);
        if (isItemPresent) {
          alert('Item is All ready in cart');
          return;
        }
        let itemToBePutInCart = controllerProductBox.getItemById(itemId);
        console.log("TTTT " + itemToBePutInCart);
        let itemToAdd = {};
        itemToAdd.item = itemToBePutInCart;
        itemToAdd.quantityInCart = 1;
        //console.log(itemToAdd);
        //controller.incrementCountInCart(itemToAdd);
        cartController.addNewItemInCart(itemToAdd);
        //cartController.incrementCount();
      }
    },
    makeItemHTML: function(itemObj) {
      return `<div class="single-product">
          <div class="product-left">
            <img class="product-image" src=${itemObj.imagePath}>
            <br>
            <button class="product-button" data-type="addToCart" data-itemId="${itemObj.itemId}"><i class="fa fa-shopping-cart product_cart_logo" aria-hidden="true"></i>ADD TO CART</button>
          </div>
          <div class="product-right">
              <div class="item_name content-padding">
              ${itemObj.itemName}
              </div>
              <div class="flex-row content-padding">
              <div class="item-price"><i class="fa fa-inr" aria-hidden="true"></i>${itemObj.itemPrice}</div>
              <div class="item-rating">${itemObj.itemRating}<i class="fa fa-star" aria-hidden="true"></i></div>
                  </div>
              <hr style="color:burlywood;border:1px solid">
              <div class="item-description content-padding">
              ${this.makeDescriptionHTML(itemObj.itemDescription)}
               </div>
           </div>
        </div>`;
    },
    /*when we use search box for searching items*/
    addItemsUsingSearch: function(itemsToDisplay) {
      let string = "";
      itemsToDisplay.forEach((item) => {
        string += this.makeItemHTML(item);
      });
      if (string.length == 0) {
        string = `<div class="notice-message">Items Not Available</div>`;
      }
      document.querySelector(".product-box").innerHTML = string;
    },
    makeDescriptionHTML: function(description) {
      let string = "<p>";
      for (let key in description) {
        string += "<b>" + key + ":  </b>" + description[key] + "<br>";
      }
      string += "</p>"
      return string;
    },
    render: function() {
     console.log(controllerProductBox.getItems());
      let string = "";
      controllerProductBox.getItems().forEach((item) => {
        string += this.makeItemHTML(item);
      });
      if (string.length == 0) {
        string = `<div class="notice-message">Items Not Available</div>`;
      }
      document.querySelector(".product-box").innerHTML = string;

    },
  };

  controllerProductBox.init();
  let modelCart = {
    init: function() {
      if (!localStorage.itemsInCart) {
        localStorage.itemsInCart = JSON.stringify([]);
      }
      if (!localStorage.totalItemsInCart) {
        localStorage.totalItemsInCart = JSON.stringify(0);

      }
      if (!localStorage.totalPrice) {
        localStorage.totalPrice = JSON.stringify(0);
      }
    },
    add: function(obj) {
      var data = JSON.parse(localStorage.itemsInCart);
      data.push(obj);
      localStorage.itemsInCart = JSON.stringify(data);
    },
    getAllItems: function() {
      return JSON.parse(localStorage.itemsInCart);
    },
    setAllItems: function(items) {
      localStorage.itemsInCart = JSON.stringify(items);
    },
    getItemById: function(itemId) {
      let itemsInCart = this.getAllItems();
      console.log(itemsInCart);
      if (!itemsInCart)
        return;
      let itemPresent = itemsInCart.find(function(element) {
        return element.item.itemId == itemId;
      });
      return itemPresent;
    },
    incrementCount: function() {
      let totalItemsInCart = JSON.parse(localStorage.totalItemsInCart);
      localStorage.totalItemsInCart = JSON.stringify(totalItemsInCart + 1);
    },
    decrementCount: function() {
      let totalItemsInCart = JSON.parse(localStorage.totalItemsInCart);
      localStorage.totalItemsInCart = JSON.stringify(totalItemsInCart - 1);
    },
    getTotalItemsInCart: function() {
      return JSON.parse(localStorage.totalItemsInCart);
    },
    setTotalItemsInCart: function(totalItems) {
      localStorage.totalItemsInCart = JSON.stringify(totalItems);

    },
    getTotalPrice: function() {
      return JSON.parse(localStorage.totalPrice);
    },
    setTotalPrice: function(totalPrice) {
      localStorage.totalPrice = JSON.stringify(totalPrice);

    },
  };



  let cartController = {
    addNewItemInCart: function(obj) {
      modelCart.add(obj);
      this.incrementCount();
      modelCart.setTotalPrice(modelCart.getTotalPrice() + obj.item.itemPrice);
      viewCart.render();
    },

    getAllItems: function() {
      return modelCart.getAllItems();
    },
    setAllItems: function(items) {
      modelCart.setAllItems(items);
    },
    getItemByItemId: function(itemId) {
      return modelCart.getItemById(itemId);
    },
    incrementCount: function() {
      modelCart.incrementCount();
      viewCart.render();
    },
    decrementCount: function() {
      modelCart.decrementCount();
      viewCart.render();
    },
    init: function() {
      modelCart.init();
      viewCart.init();
    },
    getTotalItemsInCart: function() {
      return modelCart.getTotalItemsInCart();
    },
    getTotalPrice: function() {
      return modelCart.getTotalPrice();
    },
    setTotalItemsInCart: function(totalItems) {
      modelCart.setTotalItemsInCart(totalItems);

    },
    setTotalPrice: function(totalPrice) {
      modelCart.setTotalPrice(totalPrice);

    },
  };



  let viewCart = {
    init: function() {
      this.addOnClickHandler();
      viewCart.render();
    },
    /*if we click on cart button*/
    goToCheckoutPage: function() {

      window.location.href = "./checkout.html";
    },
    addOnClickHandler: function() {
      document.querySelector(".cart").addEventListener("click", this.goToCheckoutPage);
    },
    render: function() {
      let totalItemsInCart = modelCart.getTotalItemsInCart();
      console.log(totalItemsInCart);
      if (totalItemsInCart > 0) {
        document.querySelector(".cart__count-in-cart").innerHTML = totalItemsInCart;
      } else {
        document.querySelector(".cart__count-in-cart").innerHTML = "";
      }
    }
  };

  cartController.init();


})();