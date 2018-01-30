(function(){
let replacer = (key, value) => {
    if (typeof value === 'function') {
      return value.toString();
    }
    return value;
  }

  let reviver = (key, value) => {
    if (typeof value === 'string' &&
      value.indexOf('function ') === 0) {
      let functionTemplate = `(${value})`;
      return eval(functionTemplate);
    }
    return value;
  }

  console.log("LOADING_______");
  let view, model;
  if (JSON.stringify(view, replacer, 2) != sessionStorage.view) {

    view = JSON.parse(sessionStorage.view, reviver);

  }
  if (JSON.stringify(model, replacer, 2) != sessionStorage.model) {

    model = JSON.parse(sessionStorage.model, reviver);

  }
  //console.log(view);
 // console.log(model);
    /*retrive all the data from session storage*/
  let modelCategories = model.modelCategories;
  let modelItems = model.modelItems;
  let modelCart = model.modelCart;
  let viewNavigation = view.viewNavigation;
  let viewProductItems = view.viewProductItems;
  let viewCart = view.viewCart;
  let viewFilterMenu = view.viewFilterMenu;
  let viewItemTable = {
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
    <th id="totalItems">${modelCart.totalItemsInCart} items</th>
      <th id="totalPrice">${modelCart.totalPrice} Rs. </th>
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
    validateForm: function() {
        console.log("Inside validate form");
        
    },
    addFormValidater: function() {
      document.querySelector(".user-details").addEventListener("submit", this.validateForm);

    },
    addFormToDom: function() {
      document.querySelector(".form-wrapper").innerHTML = this.makeFormHTML();

    },
      /*insering content in table*/
    addItemsToDom: function(itemsInCart) {
      let string = "";
      string += this.makeTableTitle();
      itemsInCart.forEach((element) => {
        item = element.item;
        quantity = element.quantityInCart;
        string += this.makeItemHTML(item, quantity);

      });
     // console.log(modelCart);
      string += this.makeTableFooter();
      console.log(document.querySelector(".cart-table").getElementsByTagName('tbody'));
      document.querySelector(".cart-table").innerHTML = string;
    },
      /*quantity input box changes*/
    addOnQuantityChange: function() {
      document.querySelector(".cart-table").addEventListener("change", this.handlerInputChange);
      document.querySelector(".cart-table").addEventListener("click", this.handlerOnClick.bind(viewItemTable));
    },
    handlerInputChange: function() {
      if (!event.target.getAttribute("data-id"))
        return;
      let id = event.target.getAttribute("data-id");
      let quantity = Number(event.target.value);
      let itemInCart = modelCart.itemsInCart.find(function(element) {
        return element.item.itemId == id;
      });
      if (!quantity) {
        event.target.value = itemInCart.item.quantity;
        alert("Insert a number");
        return;
      }
      if (quantity < 0) {
        event.target.value = itemInCart.item.quantity;
        alert("Insert positive value");
        return;
      }
      if (!Number.isInteger(quantity)) {
        event.target.value = itemInCart.item.quantity;
        alert("Enter numberic data");
        return;
      }

      if (quantity > itemInCart.item.quantity) {
        alert("quantity not available");
        event.target.value = itemInCart.item.quantity;
        return;
      }
      let oldQuantity = Number(event.target.getAttribute("data-old-quantity"));
      modelCart.totalItemsInCart += (quantity - oldQuantity);
      modelCart.totalPrice += (quantity - oldQuantity) * itemInCart.item.itemPrice;
      itemInCart.item.quantity = quantity;
      event.target.setAttribute("data-old-quantity", quantity);
      viewItemTable.updateFooter();
    },
    handlerOnClick: function(event) {
      console.log(event.target);
      let dataPlus = Number(event.target.getAttribute('data-plus'));
      let dataMinus = Number(event.target.getAttribute('data-minus'));
      let itemId = event.target.getAttribute("data-button-id");
      console.log("TTT " + itemId);
      event.stopPropagation();
      if (itemId) {
        console.log("HERRE");
        this.removeItem(itemId);

        return;
      }
      console.log(dataPlus + " " + dataMinus);
      if (!dataPlus && !dataMinus) {
        return;
      }
      if (dataPlus) {
        let itemInCart = modelCart.itemsInCart.find(function(element) {
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
        modelCart.incrementCount();
        modelCart.totalPrice += Number(itemInCart.item.itemPrice);

        viewCart.updateCartCount();
        this.updateFooter();
        return;
      }
      if (dataMinus) {
        let itemInCart = modelCart.itemsInCart.find(function(element) {
          return element.item.itemId == dataMinus;
        });
        let quantity = Number(event.target.previousElementSibling.value);
        if (quantity == 0) {
          alert("this is the minimum quantity");
          return;
        }
        event.target.previousElementSibling.value = quantity - 1;
        itemInCart.quantityInCart--;
        modelCart.decrementCount();
        modelCart.totalPrice -= Number(itemInCart.item.itemPrice);
        viewCart.updateCartCount();
        this.updateFooter();
        return;

      }
    },
    removeItem: function(itemId) {
      console.log("HERREE");
      console.log(itemId);
      let itemInCart = modelCart.itemsInCart.find((element) => {
        return element.item.itemId == itemId;
      });
      modelCart.itemsInCart = modelCart.itemsInCart.filter((element) => {
        return element != itemInCart;
      });
      console.log(itemInCart);
      console.log(modelCart);
      modelCart.totalItemsInCart = modelCart.totalItemsInCart - itemInCart.quantityInCart;
      modelCart.totalPrice -= itemInCart.quantityInCart * itemInCart.item.itemPrice;
      viewCart.updateCartCount();
      viewItemTable.addItemsToDom(modelCart.itemsInCart);
      viewItemTable.addFormToDom();

    },

    updateFooter: function() {
      document.getElementById("totalItems").innerHTML = modelCart.totalItemsInCart;
      document.getElementById("totalPrice").innerHTML = modelCart.totalPrice + " Rs."
    },

    init: function() {
      let table = document.querySelector(".cart-table");
      if (!table)
        return;

      this.addOnQuantityChange();
      this.addItemsToDom(modelCart.itemsInCart);
      this.addFormToDom();
      this.updateFooter();
      this.addFormValidater();
    }
  };
  let controller = {
    init: function() {
      console.log("inside init");
      viewNavigation.init();
      //  viewFilterMenu.init();
      viewFilterMenu.hide();
      viewNavigation.addCategoriesToDom(modelCategories);
      viewCart.init();
      viewItemTable.init();
      viewProductItems.init();

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
      modelCart.incrementCount();
      modelCart.totalPrice += itemToAdd.item.itemPrice;
      modelCart.itemsInCart.push(itemToAdd);
      viewCart.updateCartCount();
      viewItemTable.init();
    }


  }

  controller.init();
}
)();