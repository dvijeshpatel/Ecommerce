let viewProductBox = (function(){

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
        let discription="";
        for(let key in itemObj.itemDescription)
        {
            let value = itemObj.itemDescription[key];
            discription+=key+":"+value+"\n";
        }
        
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
              <div class="item-description content-padding" title="${discription}">
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

return viewProductBox;
})();