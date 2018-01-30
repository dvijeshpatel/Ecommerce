(function() {
  "use strict"
  /*define different categories*/
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
    /*all items details in modelItems*/
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
    /*cart related details in modelcart*/
  let modelCart = {
    itemsInCart: [],
    totalItemsInCart: 0,
      /*find item withing cart using id*/
    findItemById: function(itemId) {
      let itemPresent = this.itemsInCart.find(function(element) {
        return element.item.itemId == itemId;
      });
      return itemPresent;
    },
      /*increment count value in cart data*/
    incrementCount: function() {
      this.totalItemsInCart++;
    },
    decrementCount: function() {
      this.totalItemsInCart--;
    },
    totalPrice: 0,
  }
  
  let viewNavigation = {
      /*staring home icon*/
    createHomeIconHTML: function() {
      return `<li>
            <a >
            <i id="home-button" data-itemType="*" data-itemSubType="*" class="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>`;
    },
      /*making subcategories in navigationvbar*/
    makeSubCategoiresHTML: function(category) {
      let string = "";
      for (let key in category.subCategories) {
        let item = category.subCategories[key];
        string += `<li><a data-itemType="${category.catId}" data-itemSubType="${item.subCatId}">${item.label}</a></li>`;
      }
      return string;
    },
      /*making categories in navigationbar*/
    makeCategorieHTML: function(category) {
      return ` <li >
            <a data-itemType=${category.catId} data-itemSubType="*">${category.label}</a>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            <ul>
           ${this.makeSubCategoiresHTML(category)}
            </ul>
          </li>`;
    },
      /*adding categories to dom*/
    addCategoriesToDom: function(categories) {
      let string = "";
      string += this.createHomeIconHTML();
      //console.log(categories);
      for (let key in categories) {
        let item = categories[key];
         // console.log(item);
        string += this.makeCategorieHTML(item);
      }
      document.querySelector(".menu").innerHTML = string;

    },
    init: function() {
      this.addOnClickHandler();
      this.setSearchHandler();
    
    },
      /*navigation  and filter */
    addOnClickHandler: function() {
      document.querySelector(".navigation-bar").addEventListener("click", this.handleOnClick);
     //document.querySelector(".filter-menu").addEventListener("click", this.handleOnClick);
            viewFilterMenu.init();

    },
      /*click event on navigation element and go for filtering*/
    handleOnClick: function(event) {
      let itemType = event.target.getAttribute('data-itemType');
      let itemSubType = event.target.getAttribute('data-itemSubType');
      //console.log(itemType + " " + itemSubType);
      if (itemType != null && itemSubType != null) {
        viewProductItems.addItemsToDom(modelItems, itemType, itemSubType);
      }
    },
      /*using search box text go for filtering*/
    searchForItem: function(event)
      {
         // console.log("Inside Search");
          let filter = event.target.value.toUpperCase();
          let itemsToDisplay = modelItems.filter(function(element){
          return (element.itemName.toUpperCase().indexOf(filter)>-1);
          });
          console.log(itemsToDisplay);
          //viewFilterMenu.hide();
          viewProductItems.addItemsUsingSearch(itemsToDisplay);
          
  },
      /*adding seach box on key up event hander*/
      setSearchHandler: function()
      {
          document.getElementById("search-box").addEventListener("keyup",this.searchForItem);
      }
  };
    /*filtermenu showing path of filtering*/
  let viewFilterMenu = {
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
     // console.log("QQQQ");
     // console.log(name);
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
      init:function()
      {
                document.querySelector(".filter-menu").addEventListener("click", viewNavigation.handleOnClick);
      },
  };
    /*view for showing product box*/
  let viewProductItems = {
      /*creating template for single item*/
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
      /*make item description*/
    makeDescriptionHTML: function(description) {
      let string = "<p>";
      for (let key in description) {
        string += "<b>" + key + ":  </b>" + description[key] + "<br>";
      }
      string += "</p>"
      return string;
    },
      /*when we use search box for searching items*/
    addItemsUsingSearch:function(itemsToDisplay)
      {
           let string = "";
      itemsToDisplay.forEach((item) => {
        string += this.makeItemHTML(item);
      });
       if(string.length==0)
       {
           string=`<div class="notice-message">Items Not Available</div>`;
       }
      document.querySelector(".product-box").innerHTML = string;
      },
      /*using model data to show filterd items to product box*/
    addItemsToDom: function(items, itemType, itemSubType) {
      viewFilterMenu.show();
      viewFilterMenu.clearFilterMenu();
      let cat, subCat;
      viewFilterMenu.apendItem("All", "*", "*")
      //console.log(itemType + " " + itemSubType);
      let itemsToDisplay = items;
      if (itemType != '*') {
        itemsToDisplay = itemsToDisplay.filter(function(item) {
          return item.itemType == itemType;
        });
        viewFilterMenu.apendArrow();
        for (let key in modelCategories) {
          cat = modelCategories[key];
          if (cat.catId == itemType) {
            break;
          }
        }
        viewFilterMenu.apendItem(cat.label, itemType, "*")
      }

      if (itemSubType != '*') {
        itemsToDisplay = itemsToDisplay.filter(function(item) {
          return item.itemSubType == itemSubType;
        });
        viewFilterMenu.apendArrow();

        for (let key in cat.subCategories) {
          subCat = cat.subCategories[key];
          console.log(subCat);
          if (subCat.subCatId == itemSubType) {

            break;
          }
        }
        console.log(subCat);
        viewFilterMenu.apendItem(subCat.label, itemType, itemSubType);
      }
      let string = "";
      itemsToDisplay.forEach((item) => {
        string += this.makeItemHTML(item);
      });
       if(string.length==0)
       {
           string=`<div class="notice-message">Items Not Available</div>`;
       }
      document.querySelector(".product-box").innerHTML = string;
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
        let isItemPresent = controller.isItemPresentInCart(itemId);
        if (isItemPresent) {
          alert('Item is All ready in cart');
          return;
        }
        let itemToBePutInCart = controller.getItemByItemId(itemId);
        console.log("TTTT " + itemToBePutInCart);
        let itemToAdd = {};
        itemToAdd.item = itemToBePutInCart;
        itemToAdd.quantityInCart = 1;
        controller.incrementCountInCart(itemToAdd);


      }
    },
    init: function() {
      this.addPutInCartHandler();
    }

  };
/*cart view*/
  let viewCart = {
      /*update cart counter in dom*/
    updateCartCount: function() {
      if (modelCart.totalItemsInCart > 0) {
        document.querySelector(".cart__count-in-cart").innerHTML = modelCart.totalItemsInCart;
      } else {
        document.querySelector(".cart__count-in-cart").innerHTML = "";
      }

    },
      /*if we click on cart button*/
    goToCheckoutPage: function() {
      let view = {};
      view.viewProductItems = viewProductItems;
      view.viewCart = viewCart;
      view.viewNavigation = viewNavigation;
      view.viewFilterMenu = viewFilterMenu;
      let model = {};
      model.modelCategories = modelCategories;
      model.modelItems = modelItems;
      model.modelCart = modelCart;
      if (JSON.stringify(view, replacer, 2) != sessionStorage.view) {
            sessionStorage.view =JSON.stringify(view, replacer, 2);

      }
      if (JSON.stringify(model, replacer, 2) != sessionStorage.model) {
            sessionStorage.model = JSON.stringify(model, replacer, 2);
      }
      console.log("IN LOCATION");

      window.location.href = "./checkout.html";
    },
    addOnClickHandler: function() {
      document.querySelector(".cart").addEventListener("click", this.goToCheckoutPage);
    },
    init: function() {
      this.addOnClickHandler();
      this.updateCartCount();
    }

  }
  let controller = {
    init: function() {
      console.log("inside init");
      viewNavigation.init();
      viewNavigation.addCategoriesToDom(modelCategories);
      viewProductItems.init();
      viewCart.init();
      document.getElementById("home-button").click();
    },
    isItemPresentInCart: function(itemId) {
      let itemPresent = modelCart.findItemById(itemId);
      return itemPresent;
    },
    getItemByItemId: function(itemId) {
      let item = modelItems.find(function(element) {
        return element.itemId == itemId;
      });
      return item;
    },
    incrementCountInCart: function(itemToAdd) {
      console.log("Inside Controller " + itemToAdd);
      modelCart.incrementCount();
      modelCart.totalPrice += itemToAdd.item.itemPrice;
      modelCart.itemsInCart.push(itemToAdd);
      viewCart.updateCartCount();
    }


  };
  controller.init();
  let replacer = (key, value) => {

    if (typeof value === 'function') {
      return value.toString();
    }
    return value;
  }
})();