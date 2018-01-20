let itemArray = [
    {
        "itemId":"1",
        "itemType":"electronics",
        "itemSubType":"mobiles",
        "imagePath":"./assets/items/electronics/mobiles/0.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
        "quantity":4,
    },
     {
        "itemId":"2",
        "itemType":"electronics",
        "itemSubType":"mobiles",
        "imagePath":"./assets/items/electronics/mobiles/1.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
         "quantity":4,
    },
     {
        "itemId":"3",
        "itemType":"electronics",
        "itemSubType":"mobiles",
        "imagePath":"./assets/items/electronics/mobiles/2.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
         "quantity":4,
    },
    {
        "itemId":"4",
        "itemType":"electronics",
        "itemSubType":"laptops",
        "imagePath":"./assets/items/electronics/laptops/0.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
        "quantity":4,
    },
     
    {
        "itemId":"5",
        "itemType":"electronics",
        "itemSubType":"laptops",
        "imagePath":"./assets/items/electronics/laptops/1.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
        "quantity":4,
    },
     {
        "itemId":"6",
        "itemType":"electronics",
        "itemSubType":"laptops",
        "imagePath":"./assets/items/electronics/laptops/2.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
         "quantity":4,
    },
     {
        "itemId":"7",
        "itemType":"electronics",
        "itemSubType":"cameras",
        "imagePath":"./assets/items/electronics/cameras/0.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
         "quantity":4,
    },
    {
        "itemId":"8",
        "itemType":"electronics",
        "itemSubType":"cameras",
        "imagePath":"./assets/items/electronics/cameras/1.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
        "quantity":4,
    },
    {
        "itemId":"9",
        "itemType":"electronics",
        "itemSubType":"cameras",
        "imagePath":"./assets/items/electronics/cameras/2.png",
        "itemName":"Samsung Galexy Note 8",
        "itemPrice":"10000",
        "itemRating":"4.2",
        "itemDescription":`<p>
                  <b>Display Size:  </b> 5.7 inch</br>
                  <b>Resolution:  </b> 2560 x 1440 Pixels</br>
                  <b>Resolution Type:  </b> Quad HD<br>
                  <b>GPU:  </b> ARM Mali-T760 MP8<br>
                  <b>Display Type:  </b>Super AMOLED
                </p>`,
        "quantity":4,
    },
    
    
    

];
let currentDisplayArray=[];
let itemsInCart=[];
let totalItemsInCart=0;
let elementString = `<div class="single_product">
          <div class="product_left">
            <img class ="product_image" />
            <br/>
            <button class="product_button"><i  class="fa fa-shopping-cart product_cart_logo"  aria-hidden="true"></i>ADD TO CART</button>
          </div>
          <div class="product_right">
            <ul>
              <li class="item_name"></li>
              <li class="item_price"></li>
              <li class="item_rating">
              </li>
              <hr style="color:burlywood;border:1px solid">
              <li class="item_description">
               
              </li>
            </ul>
          </div>
        </div>`

function appendElementOnProductBox(obj)
{
console.log(obj);
let itemObj = document.createElement('div');
itemObj.innerHTML = elementString;
console.log(itemObj);
itemObj.getElementsByClassName('product_image')[0].src=obj.imagePath;
itemObj.getElementsByClassName('item_name')[0].innerHTML=obj.itemName;
itemObj.getElementsByClassName('item_price')[0].innerHTML='<i class="fa fa-inr" aria-hidden="true"></i>'+obj.itemPrice;
itemObj.getElementsByClassName('item_rating')[0].innerHTML=obj.itemRating+'<i class="fa fa-star" aria-hidden="true" ></i>';
itemObj.getElementsByClassName('item_description')[0].innerHTML=obj.itemDescription;
itemObj.getElementsByClassName('product_button')[0].id = obj.itemId;
itemObj.getElementsByClassName('product_button')[0].addEventListener('click',addToCartHandler);
document.getElementById('product_box').appendChild(itemObj);
}
function displayProductBox()
{
    for(let i=0;i<currentDisplayArray.length;i++)
     appendElementOnProductBox(currentDisplayArray[i]);
}
function clearProductBox()
{
     document.getElementById('product_box').innerHTML="";
}
function onClickHandler(itemSubType)
{
    clearProductBox();
    currentDisplayArray=[];
    for(let i=0;i<itemArray.length;i++)
    {
        if(itemSubType==itemArray[i].itemSubType)
        {
            currentDisplayArray.push(itemArray[i]);
        }
    }
    console.log(currentDisplayArray);
    displayProductBox();
}

function eventHandler(event)
{
    console.log(event.target.innerHTML);
    onClickHandler(event.target.innerHTML.toLowerCase());
}
var  categories = document.getElementsByClassName('filterable');
for(let i=0;i<categories.length;i++)
{
    categories[i].addEventListener('click',eventHandler);
}
function incrementCountInCartDisplay()
{
    if(totalItemsInCart!=0)
  document.getElementById('countInCart').innerHTML = totalItemsInCart;
}
function addToCartHandler(event)
{
  let itemId = event.target.id;
   //console.log("HRER");
let itemToAdd = currentDisplayArray.find(function(elm)  {
     return elm.itemId===itemId;
});
    let isInCart = itemsInCart.includes(itemToAdd);
    if(isInCart==true)
    {
        alert("Item is already in cart, go to cart to for changing quantity");
        return;
    }
    console.log(itemToAdd);
    itemsInCart.push(itemToAdd);
    totalItemsInCart++;
    incrementCountInCartDisplay();
    console.log(itemId);
}
function search()
{
    let input,filter;
    input = document.getElementsByClassName('single_product');
    console.log(input);
}
function goToCart()
{
     /*   url = './checkout.html?name=' + URL.createObjectURL(itemsInCart);
    console.log("HRERE "+url);
    document.location.href = url;*/
    console.log("HERE");
window.localStorage.setItem("cart",JSON.stringify(itemsInCart));
    url = './checkout.html';
     document.location.href = url;
    
}
