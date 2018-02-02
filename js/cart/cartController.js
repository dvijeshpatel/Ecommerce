let cartController = (function(){

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



return cartController;
})();