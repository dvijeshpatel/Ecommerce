let modelCart = (function(){

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


return modelCart;
})();