/*var mobiles = [1,2,3,4,5];
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
      
}*/
var itemInCart=[];
function setCountInCart()
{
 if(itemInCart.length>0)
    {
        document.getElementById("countInCart").innerHTML = itemInCart.length;
    }
}
var categaries = {
    "electronics":["mobiles","laptops","cameras"],
    "appliances":["telivisons","washing_machines","refrigarators"],
    "fernitures":["beds","sofas","chairs"],
    
};
var itemArray=[];
var count=0;
function addItem(itemType,itemSubType,image_path)
{
    var item = {};
    item.id = count;
    count++;
    item.itemType = itemType;
    item.itemSubType = itemSubType;
    item.image_path = image_path;
    item.item_details = "item have id "+item.id;
    itemArray.push(item);
    
}
for(var itemType in categaries)
{
    for(var itemSubType in categaries[itemType])
        {
          for(var i=0;i<3;i++)
                {
                    addItem(itemType,categaries[itemType][itemSubType],"./assets/items/"+itemType+"/"+categaries[itemType][itemSubType]+"/"+i+".png");
                }
        }
    
}
    console.log(itemArray);
function clickOnItem(itemType,itemSubType)
{
    
      document.getElementById("product_box").innerHTML = "";
  //  console.log(itemType+" "+itemSubType);
for(var i=0;i<itemArray.length;i++)
    {
        if(itemArray[i].itemType===itemType && itemArray[i].itemSubType===itemSubType)
            {
            //    console.log(itemArray[i]);
 var prodcut;
product = document.createElement("div");
var product_class = document.createAttribute("class");
product_class.value="single_product";
console.log("hrere rwee");
product.setAttribute("class","single_product");
        var image = document.createElement("img");
        image.setAttribute("src",itemArray[i].image_path);
        product.appendChild(image);
        product.appendChild(document.createElement("br"));
        var button = document.createElement("button");
        button.setAttribute("class","product_button");
        button.innerHTML = "Add to Cart";
                button.item_id=itemArray[i].id;
                button.itemType=itemArray[i].itemType;
                button.itemSubType=itemArray[i].itemSubType;
                button.addEventListener("click",addToCart);
        product.appendChild(button);
                var details = document.createElement("div");
                details.setAttribute("class","item_details");
                details.innerHTML = itemArray[i].item_details;
                product.appendChild(details);
document.getElementById("product_box").appendChild(product);
            }
    }
}
function addToCart(e)
{
   
    // console.log(e.target.item_id+" "+e.target.itemType+" "+e.target.itemSubType);
var item =   itemArray.find(function(obj){
    return (obj.id===e.target.item_id);
       
});
    var newArray = itemArray.filter(function(obj){
       return obj.id!=e.target.item_id; 
    });
    itemArray = newArray;
    itemInCart.push(item);
    setCountInCart();
     console.log(itemInCart);
    clickOnItem(e.target.itemType,e.target.itemSubType);
}