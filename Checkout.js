var items = JSON.parse(localStorage.getItem("items"));
var main = document.querySelector(".main-page");
console.log(items);
var total_item = 0;
var total_price = 0;
console.log("total_item" + total_item);
console.log("total_price" + total_price);

var total_old_price = 0;
for (let item of items) {
  total_item += Number(item.quantity);
}

var div = `
    <div class="time">
    <p>Delivery in 10 minutes </p> 
    <p id="item-count">  ${total_item} items</p>
    </div>
`;
main.innerHTML += div;

for (let item of items) {
  if (item.quantity > 0) {
    total_price += Number(item.currentPrice) * item.quantity;
    total_old_price += Number(item.oldPrice) * item.quantity;
    var div = `
        <div class="items item-${item.itemId}">
            <div class="main-image1">
                <img src=${item.imgSrc}>
            </div>
            <div class="item-info">
                <div class="main-item">   
                    <div class="details">
                        <div class="main-name">
                            ${item.name}
                            <p class="main-weight">${item.weight}</p>
                        </div>
                        <div class="main-price">
                            <span class="new-price">₹${item.currentPrice} </span> 
                            <span class="old-price">₹${item.oldPrice}</span>
                        </div>
                    </div>
                    
                </div>
                <div class="add-btn">
                    <button class="minus" id="minus-${item.itemId}">-</button>
                    <button class="count" id="count-${item.itemId}">${item.quantity}</button>
                    <button class="plus" id="plus-${item.itemId}">+</button>
                
                </div>
            </div>
            
        </div>`;
    main.innerHTML += div;
  }
}
var login_cart = document.querySelector(".login-cart");
console.log(login_cart);
div = `<div>
<button class="cart"> 
    <div>🛒</div>
    <div id="item-total-price">${total_item} items <p>₹${total_price}</p></div>  
</button>
</div>`;
login_cart.innerHTML += div;

console.log(total_old_price);
console.log(total_price);

div = `<div class="mrp">
            <p>MRP</p>
            <p id="total-old-price">₹${total_old_price}</p>
        </div>`;
main.innerHTML += div;

div = `<div class="discount">
        <p>Product discount</p>
        <p id="product-discount">-₹${total_old_price - total_price}</p>
    </div>`;
main.innerHTML += div;

div = `<div class="delivery-charge">
        <p>Delivery charge</p>
        <p> <span class="free-charge">₹15</span> <span class="free">FREE</span></p>
    </div>`;
main.innerHTML += div;

div = `<div class="grant-total">
        <p>Grant total</p>
        <p id='grant-mrp'>₹${total_price}</p>
    </div>`;
main.innerHTML += div;

div = `<div class="coupons">
            Coupons are only applicable on the Blinkit app
        </div>`;
main.innerHTML += div;
div = `
<div class="bg-final">
<div class="final-value">
    <div id='final-price'> ${total_item} items • ₹${total_price}
        <span class="cross-price">₹${total_old_price}</span>
    </div>
    <div class="proceed">
        Proceed >
    </div>
</div>
</div>
`;
main.innerHTML += div;

var item_count = document.getElementById("item-count");
var cart_details = document.getElementById("item-total-price");
var old_mrp = document.getElementById("total-old-price");
var prod_discount = document.getElementById("product-discount");
var grant_total = document.getElementById("grant-mrp");
var final_price = document.getElementById("final-price");
var cross_price = document.querySelector(".cross-price");
console.log(cross_price);

function update() {
  item_count.innerHTML = `${total_item} items`;
  cart_details.innerHTML = `${total_item} items <p>₹${total_price}</p>`;
  old_mrp.innerHTML = ` ₹${total_old_price}`;
  prod_discount.innerHTML = `-₹${total_old_price - total_price}`;
  grant_total.innerHTML = `₹${total_price}`;
  final_price.innerHTML = `${total_item} items • ₹${total_price}`;
  final_price.innerHTML += ` <span class="cross-price">₹${total_old_price}</span>`;
  localStorage.setItem("item2", JSON.stringify(items));
}

for (let i = 0; i < items.length; i++) {
  localStorage.setItem("item2", JSON.stringify(items));
  if (items[i].quantity > 0) {
    let minus = document.getElementById(`minus-${items[i].itemId}`);
    let plus = document.getElementById(`plus-${items[i].itemId}`);
    let count = document.getElementById(`count-${items[i].itemId}`);
    minus.addEventListener("click", function () {
      if (total_item === 1) location.href = "Homepage.html";
      items[i].quantity--;
      count.textContent--;
      total_item--;
      total_price -= Number(items[i].currentPrice);
      total_old_price -= Number(items[i].oldPrice);
      if (items[i].quantity === 0) {
        var div = document.querySelector(`.item-${items[i].itemId}`);
        div.remove();
      }

      update();
    });

    plus.addEventListener("click", function () {
      console.log(i);
      console.log("done dona done");
      items[i].quantity++;
      count.textContent++;
      total_item++;
      total_price += Number(items[i].currentPrice);
      total_old_price += Number(items[i].oldPrice);

      update();
    });
  }
}
var logo = document.querySelector(".blinkit-logo");
logo.addEventListener("click", function () {
  localStorage.setItem("item2", JSON.stringify(items));
  location.href = "Homepage.html";
});
