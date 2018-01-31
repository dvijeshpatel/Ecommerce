(function() {
  "use strict";
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

  let modelItemTable = {
    init: function() {

    },
    add: function(obj) {

    },
    getAllNotes: function() {

    }
  };


  let controllerItemTable = {
    addNewNote: function(noteStr) {

      viewItemTable.render();
    },

    getNotes: function() {

    },

    init: function() {

      viewItemTable.init();
    }
  };


  let viewItemTable = {
    init: function() {

      viewItemTable.render();
      this.addOnQuantityChange();

    },
    /*making single row for single element in table of items*/
    makeItemHTML: function(itemObj, quantity) {
      console.log(itemObj + " " + quantity);
      return `<tr>
           <td class="product-image-wrapper">
           <img src="${itemObj.imagePath}" />           
            </td>
            <td class="item-name">${itemObj.itemName}</td>
            <td class=" item-price">
            <i class="fa fa-inr" aria-hidden="true"></i>
            ${itemObj.itemPrice}</td>
            <td >
            <button class="btn-plus" data-plus="${itemObj.itemId}">+</button>
            <input type="text" data-id=${itemObj.itemId} data-old-quantity=${quantity} class="quantity" value="${quantity}"/>
            <button class="btn-minus" data-minus="${itemObj.itemId}">-</button>
            </td> 
            <td>              
            <button class="remove-button" data-button-id=${itemObj.itemId}>
            Remove
            <i class="fa fa-times" aria-hidden="true" ></i>
            </button></td>
            </tr>`;
    },
    /*makes title for table*/
    makeTableTitle: function() {
      return `<tr>
    <th>Product Image</th>
    <th>Product Name</th> 
    <th>Price </th>
    <th>Quantity </th>
    <th> </th>
    </tr>`;
    },
    /*makes table footer, this footer includes calculation of total price total items*/
    makeTableFooter: function() {
      return `  
    <tr>
    <th></th>
    <th></th> 
    <th>Subtotal </th>
    <th id="totalItems">${cartController.getTotalItemsInCart()} items</th>
      <th id="totalPrice">${cartController.getTotalPrice()} Rs. </th>
    </tr>
                  
                `;
    },
    /*make html string for form*/
    makeFormHTML: function() {
      return `<form class="user-details">
          <label class="form-title">User Details</label>
          <label class="required-field">Full Name</label>
            <input type="text" placeholder="Full name" name="fullName"  required/>

          <label class="required-field">Mobile number</label>
            <input type="text" placeholder="Mobile no"  name="mobileNo" required/>
          <label class="required-field">Pin Code</label>
            <input type="text" placeholder="Pincode" name="pinCode" required/>
          <label class="required-field"> Address</label>
          <textarea placeholder="Address" name="address" required>
          </textarea>
          <input type="submit" value="Deliver to this address"/>
        </form>`;
    },
    addOnQuantityChange: function() {
      document.querySelector(".cart-table").addEventListener("change", this.handlerInputChange);
      document.querySelector(".cart-table").addEventListener("click", this.handlerOnClick.bind(viewItemTable));
    },
    handlerInputChange: function() {
      if (!event.target.getAttribute("data-id"))
        return;
      let id = event.target.getAttribute("data-id");
      let quantity = Number(event.target.value);
      let allItems = cartController.getAllItems();
      let itemInCart = allItems.find(function(element) {
        return element.item.itemId == id;
      });
      if (!Number.isInteger(quantity)) {
        event.target.value = itemInCart.quantityInCart;
        alert("Enter numberic data");
        return;
      }

      if (!Number.isInteger(quantity)) {
        event.target.value = itemInCart.quantityInCart;
        alert("Enter numberic data");
        return;
      }

      if (quantity < 0) {
        event.target.value = itemInCart.quantityInCart;
        alert("Insert positive value");
        return;
      }

      if (quantity > itemInCart.item.quantity) {
        alert("quantity not available");
        event.target.value = itemInCart.quantityInCart;
        return;
      }
      let oldQuantity = Number(event.target.getAttribute("data-old-quantity"));
      cartController.setTotalItemsInCart(cartController.getTotalItemsInCart() + (quantity - oldQuantity));
      cartController.setTotalPrice(cartController.getTotalPrice() + (quantity - oldQuantity) * itemInCart.item.itemPrice);
      itemInCart.quantityInCart = quantity;
      event.target.setAttribute("data-old-quantity", quantity);
      cartController.setAllItems(allItems);
      viewItemTable.render();
      viewCart.render();
    },
    handlerOnClick: function(event) {
       event.stopPropagation();
      console.log("INSIDE handlerOnClick");
      console.log(event.target);
      let dataPlus = Number(event.target.getAttribute('data-plus'));
      let dataMinus = Number(event.target.getAttribute('data-minus'));
      let itemId = event.target.getAttribute("data-button-id");
      console.log("TTT " + itemId);
      event.stopPropagation();
      if (itemId) {
        console.log(event.currentTarget);
        this.removeItem(itemId);

        return;
      }
      console.log(dataPlus + " " + dataMinus);
      if (!dataPlus && !dataMinus) {
        return;
      }
      if (dataPlus) {
        let allItems = cartController.getAllItems();
        let itemInCart = allItems.find(function(element) {
          return element.item.itemId == dataPlus;
        });
        let quantity = Number(event.target.nextElementSibling.value);
        if (quantity == itemInCart.item.quantity) {
          alert("this is the maximum quantity");
          return;
        }
        console.log(event.target.nextElementSibling.value);
        event.target.nextElementSibling.value = quantity + 1;
        itemInCart.quantityInCart++;
        cartController.setAllItems(allItems);
        cartController.incrementCount();
        cartController.setTotalPrice(cartController.getTotalPrice() + Number(itemInCart.item.itemPrice));
        viewCart.render();
        viewItemTable.render();
        return;
      }
      if (dataMinus) {
        let allItems = cartController.getAllItems();
        let itemInCart = allItems.find(function(element) {
          return element.item.itemId == dataMinus;
        });
        let quantity = Number(event.target.previousElementSibling.value);
        if (quantity == 0) {
          alert("this is the minimum quantity");
          return;
        }
        event.target.previousElementSibling.value = quantity - 1;
        itemInCart.quantityInCart--;
        cartController.setAllItems(allItems);
        cartController.decrementCount();
        cartController.setTotalPrice(cartController.getTotalPrice() - Number(itemInCart.item.itemPrice));
        viewCart.render();
        viewItemTable.render();
        return;

      }
    },
    removeItem: function(itemId) {
      console.log("HERREE");
      console.log(itemId);
      console.log(cartController.getAllItems());
      let itemInCart = cartController.getAllItems().find((element) => {
        return element.item.itemId == itemId;
      });
      console.log(itemInCart);
      let newItemsInCart = cartController.getAllItems().filter((element) => {
        return element.item.itemId != itemInCart.item.itemId;
      });
      console.log(newItemsInCart);
      cartController.setAllItems(newItemsInCart);
      console.log(cartController.getAllItems());
      cartController.setTotalItemsInCart(cartController.getTotalItemsInCart() - itemInCart.quantityInCart);
      cartController.setTotalPrice(cartController.getTotalPrice() - itemInCart.quantityInCart * itemInCart.item.itemPrice);
      viewCart.render();
      viewItemTable.render();

    },

    updateFooter: function() {
      document.getElementById("totalItems").innerHTML = cartController.getTotalItemsInCart();;
      document.getElementById("totalPrice").innerHTML = cartController.getTotalPrice() + " Rs."
    },
    render: function() {
      let string = "";
      string += this.makeTableTitle();
      cartController.getAllItems().forEach((element) => {
        let item = element.item;
        let quantity = element.quantityInCart;
        string += this.makeItemHTML(item, quantity);

      });
      // console.log(modelCart);
      string += this.makeTableFooter();
      console.log(document.querySelector(".cart-table").getElementsByTagName('tbody'));
      document.querySelector(".cart-table").innerHTML = string;

      this.updateFooter();
      //    

    }
  };

  controllerItemTable.init();


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
      console.log("HERER");

      let itemsToDisplay = JSON.parse(localStorage.items);
      console.log(itemsToDisplay);
      navigationController.viewFilterMenu.clearFilterMenu();

      let cat, subCat;

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
      console.log("INSIDE");
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
      // viewProductBox.render();
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
        cartController.addNewItemInCart(itemToAdd);
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
      console.log(typeof controllerProductBox.getItems());
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



  let formController = {

    init: function() {
      viewForm.init();
    }
  };


  let viewForm = {
    init: function() {

      viewForm.render();
    },
    makeFormHTML: function() {
      return `<form class="user-details">
          <label class="form-title">User Details</label>
          <label class="required-field">Full Name</label>
            <input type="text" placeholder="Full name" name="fullName"  required/>

          <label class="required-field">Mobile number</label>
            <input type="text" placeholder="Mobile no"  name="mobileNo" required/>
          <label class="required-field">Pin Code</label>
            <input type="text" placeholder="Pincode" name="pinCode" required/>
          <label class="required-field"> Address</label>
          <textarea placeholder="Address" name="address" required>
          </textarea>
          <input type="submit" value="Deliver to this address"/>
        </form>`;
    },
    render: function() {
      document.querySelector(".form-wrapper").innerHTML = this.makeFormHTML();

    },
  };
  formController.init();
})();