let itemsInCart;
window.onload = function () {
     itemsInCart= JSON.parse(window.localStorage.getItem("cart"));
    console.log("CART "+itemsInCart);
    displayProductBox();
    incrementCountInCartDisplay();
}
function incrementCountInCartDisplay()
{
    if(itemsInCart.length>0)
  document.getElementById('countInCart').innerHTML = itemsInCart.length;
}

let elementString = `<div class="row checked_product">
               <div class="col-2">
                  <img src="./assets/items/electronics/mobiles/1.png"/>
               </div>
               <div class="col-4 item_name">
               </div>
               <div class="col-3 item_price">
               </div>
               <div class="col-1">
                  <select name="quantity" class="select_quantity">
                  </select>
               </div>
               <div class="col-2">
                  <button class="product_button">
                  <i class="fa fa-times" aria-hidden="true" style="font-size: 16px;margin-right: 10px"></i>
                  Remove
                  </button>
               </div>
            </div>`;
let clickable = document.getElementsByClassName("filterable");
for(let i=0;i<clickable.length;i++)
{
    clickable[i].addEventListener("click",onClick);
}


function onClick(event)
{
    document.location.href = "./index.html#filter:"+event.target.innerHTML;
   // console.log("Inside Event");
    //eventHandler(event);
    
    
}
function appendElementOnProductBox(obj)
{
//console.log(obj);
let itemObj = document.createElement('div');
itemObj.innerHTML = elementString;
//console.log(itemObj);
itemObj.getElementsByTagName('img')[0].src=obj.imagePath;
itemObj.getElementsByClassName('item_name')[0].innerHTML=obj.itemName;
itemObj.getElementsByClassName('item_price')[0].innerHTML='<i class="fa fa-inr" aria-hidden="true"></i>'+obj.itemPrice;
let select = itemObj.getElementsByClassName('select_quantity')[0];
    //console.log(select);
for(let i=0;i<=obj.quantity;i++)
{
    select.innerHTML += "<option>"+i+"</option>";
}
let allOptions = select.getElementsByTagName('option');
    for(let i=0;i<allOptions;i++)
    {
        allOptions[i].addEventListener('')
    }
itemObj.getElementsByClassName('product_button')[0].id = obj.itemId;
itemObj.getElementsByClassName('product_button')[0].addEventListener('click',removeFromCart);
document.getElementById('displayItems').appendChild(itemObj);
}
function displayProductBox()
{
    clearProductBox();
   // console.log("HRERE "+itemsInCart.length );
    for(let i=0;i<itemsInCart.length;i++)
     appendElementOnProductBox(itemsInCart[i]);
}
function clearProductBox()
{
     document.getElementById('displayItems').innerHTML="";
}
function removeFromCart(event){
   // console.log(cart);
let itemId = event.target.id;
    itemsInCart = itemsInCart.filter(function(e){
   return e.itemId!= itemId;                
});
   console.log(itemsInCart);
window.localStorage.setItem("cart",JSON.stringify(cart));
    displayProductBox();
    incrementCountInCartDisplay();
}
function goToHome(){
    window.localStorage.setItem("cart",JSON.stringify(itemsInCart));
    document.location.href="./index.html";
}
function optionHandler(event)
{

    
}