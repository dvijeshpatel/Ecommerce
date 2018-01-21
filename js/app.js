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
//window.localStorage.setItem("cart",JSON.stringify(itemsInCart));
window.onload = function()
{
    // console.log(window.localStorage.getItem("cart"));
    document.getElementById('filter_menu').style.display="none";
    let temp = JSON.parse(window.localStorage.getItem("cart"));
    console.log('printing temp');
    console.log(temp);
    if(temp)
    {
     //   console.log("temp "+temp);
        console.log("HEERER ");
        itemsInCart= temp;
    }
    console.log(itemsInCart);
    incrementCountInCartDisplay();
   // console.log(window.location.hash);
    let parts = window.location.hash.split(":");
    console.log(parts);
    if(parts[0]==="#filter")
    {
        let filterable = document.getElementsByClassName('filterable');
        console.log(filterable.length);
        for(let i=0;i<filterable.length;i++)
        {
            if(filterable[i].innerHTML.toLowerCase() === parts[1].toLowerCase())
            {
                console.log("there");
                filterable[i].click();
                return;
            }
        }
    }
}

/*window.onload = function()
{
     console.log(JSON.parse(window.localStorage.getItem("cart")));
    itemsInCart = JSON.parse(window.localStorage.getItem("cart"));
    incrementCountInCartDisplay();
}*/

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
//console.log(obj);
let itemObj = document.createElement('div');
itemObj.className = "itemWrapper "+obj.itemSubType;
itemObj.style.display = "none";
itemObj.innerHTML = elementString;
//console.log(itemObj);
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
    
    for(let i=0;i<itemArray.length;i++)
     appendElementOnProductBox(itemArray[i]);
}

function onClickHandler(itemType,itemSubType)
{
    /*clearProductBox();
    currentDisplayArray=[];
    for(let i=0;i<itemArray.length;i++)
    {
        if(itemSubType==itemArray[i].itemSubType)
        {
            currentDisplayArray.push(itemArray[i]);
        }
    }
    console.log(currentDisplayArray);
    displayProductBox();*/
    let allItems = document.getElementsByClassName('itemWrapper');
    for(let i=0;i<allItems.length;i++)
    {
        allItems[i].style.display="none";
    }
    let items= document.getElementsByClassName(itemSubType);
    for(let i=0;i<items.length;i++)
        items[i].style.display ="block";
    console.log(itemType+" "+itemSubType);
    document.getElementById('filter_menu').style.display="flex";
    document.getElementById('filter_menu').innerHTML="";
    let cat = document.createElement('div');
    cat.style.fontSize="15px";
    cat.style.background="#4B4B4B";
      cat.style.margin="2px 10px";
    cat.style.padding="2px";
    cat.innerHTML = itemType+" &nbsp;&nbsp;>&nbsp;&nbsp;"+itemSubType;
   /* let subCat = document.createElement('div');
    subCat.style.background="#4B4B4B";
    subCat.style.margin="2px 10px";
     subCat.style.padding="2px";
    subCat.innerHTML = itemSubType;*/
    
    document.getElementById('filter_menu').appendChild(cat);
     //document.getElementById('filter_menu').appendChild(subCat);
}
function eventHandler(event)
{
    //console.log(event.target.innerHTML);
    let itemType = event.target.parentElement.parentElement.parentElement.getElementsByTagName('a')[0].innerHTML;
   // console.log("HRER "+itemType);
    onClickHandler(itemType,event.target.innerHTML.toLowerCase());
}
displayProductBox(); 
var  categories = document.getElementsByClassName('filterable');
for(let i=0;i<categories.length;i++)
{
    categories[i].addEventListener('click',eventHandler);
}

function addToCartHandler(event)
{
  let itemId = event.target.id;
  // console.log("HRER");
    
let itemToAdd = itemArray.find(function(elm)  {
     return elm.itemId===itemId;
});
    console.log('printing');
    console.log(itemsInCart);
    let itemCopy = itemsInCart.find(function(elm)  {
     return elm.itemId===itemId;
});
    
   // let isInCart = itemsInCart.includes(itemToAdd);
    if(itemCopy!=null)
    {
        alert("Item is already in cart, go to cart to for changing quantity");
        return;
    }
    console.log("HERER");
    console.log(itemsInCart);
   // console.log(itemToAdd);
    itemsInCart.push(itemToAdd);
    totalItemsInCart++;
    incrementCountInCartDisplay();
   // console.log(itemId);
}
function incrementCountInCartDisplay()
{
    if(itemsInCart.length>0)
  document.getElementById('countInCart').innerHTML = itemsInCart.length;
}

function goToCart()
{
     
window.localStorage.setItem("cart",JSON.stringify(itemsInCart));
    url = './checkout.html';
     document.location.href = url;
    
}

/*function displayProductBox()
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
    document.location.href = url;
    console.log("HERE");
window.localStorage.setItem("cart",JSON.stringify(itemsInCart));
    url = './checkout.html';
     document.location.href = url;
    
}
var x = 5;
export default x;*/
