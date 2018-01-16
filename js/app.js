
var mobiles = [1,2,3,4,5];
var laptops = [1,2,3];
var showMobiles = function(){
            document.getElementById("product_box").innerHTML = "";
for(var i=1;i<=mobiles.length;i++)
    {
 var prodcut;
product = document.createElement("div");
var product_class = document.createAttribute("class");
product_class.value="single_product";
console.log("hrere rwee");
product.setAttribute("class","single_product");
        var image = document.createElement("img");
        image.setAttribute("src","./assets/items/electronics/mobiles/"+i+".png");
        product.appendChild(image);
        product.appendChild(document.createElement("br"));
        var button = document.createElement("button");
        button.setAttribute("class","product_button");
        button.innerHTML = "Add to Cart";
        product.appendChild(button);
document.getElementById("product_box").appendChild(product);
    }
         
         
};
var showLaptops = function(){
      console.log("inside");
            document.getElementById("product_box").innerHTML = "";
for(var i=1;i<=laptops.length;i++)
    {
 var prodcut;
product = document.createElement("div");
var product_class = document.createAttribute("class");
product_class.value="single_product";
console.log("hrere rwee");
product.setAttribute("class","single_product");
        var image = document.createElement("img");
        image.setAttribute("src","./assets/items/electronics/laptops/"+i+".png");
        product.appendChild(image);
        product.appendChild(document.createElement("br"));
        var button = document.createElement("button");
        button.setAttribute("class","product_button");
        button.innerHTML = "Add to Cart";
        product.appendChild(button);
document.getElementById("product_box").appendChild(product);
    }
      
}