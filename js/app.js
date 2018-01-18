
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
                var product_left = document.createElement('div');
                product_left.setAttribute("class","product_left");
        var image = document.createElement("img");
        image.setAttribute("src",itemArray[i].image_path);
        product_left.appendChild(image);
        product_left.appendChild(document.createElement("br"));
        var button = document.createElement("button");
        button.setAttribute("class","product_button");
        button.innerHTML = "Add to Cart";
                button.item_id=itemArray[i].id;
                button.itemType=itemArray[i].itemType;
                button.itemSubType=itemArray[i].itemSubType;
                button.addEventListener("click",addToCart);
        product_left.appendChild(button);
                prod.appendChild(product_left);
                var product_right = document.createElement("div");
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