let viewItemTable = (function(){

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

return viewItemTable;
})();