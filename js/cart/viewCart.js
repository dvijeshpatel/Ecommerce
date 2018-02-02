let viewCart= (function(){

  let viewCart = {
    init: function() {
      this.addOnClickHandler();
      viewCart.render();
    },
    /*if we click on cart button*/
    goToCheckoutPage: function() {
      //console.log("Going");
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

return viewCart;
})();