var items = [
  {
    itemId: 0,
    offer: "18% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/199435a.jpg?ts=1638183410" alt="Potato"`,
    source: "3PM",
    name: "New Potato (Aloo)",
    weight: "1 Kg",
    currentPrice: "13",
    oldPrice: "16",
    quantity: 0,
  },

  {
    itemId: 1,
    offer: "17% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/391306a.jpg?ts=1652789363" alt="Onion"`,
    source: "3PM",
    name: "Onion (Pyaz)",
    weight: "1 Kg",
    currentPrice: "32",
    oldPrice: "39",
    quantity: 0,
  },
  {
    itemId: 2,
    offer: "15% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/332740a.jpg?ts=1642139871" alt="Carrot"`,
    source: "5AM",
    name: "Local Carrot",
    weight: "500 g",
    currentPrice: "17",
    oldPrice: "20",
    quantity: 0,
  },
  {
    itemId: 3,
    offer: "15% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/423735a.jpg?ts=1639905261" alt="Green Chilli"`,
    source: "5AM",
    name: "Green Chilli (Hari Mirch)",
    weight: "100 g",
    currentPrice: "11",
    oldPrice: "13",
    quantity: 0,
  },
  {
    itemId: 4,
    offer: "16% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/3881a.jpg?ts=1671620195" alt="Tomato"`,
    source: "5AM",
    name: "Hybrid Tomato (Tamatar)",
    weight: "500 g",
    currentPrice: "15",
    oldPrice: "18",
    quantity: 0,
  },
  {
    itemId: 5,
    offer: "18% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/339153a.jpg" alt="Cauliflower"`,
    source: "5AM",
    name: "Cauliflower",
    weight: "1 piece (400g -600g)",
    currentPrice: "22",
    oldPrice: "27",
    quantity: 0,
  },

  {
    itemId: 6,
    offer: "18% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/445675a.jpg?ts=1648026977" alt="Desi Tomato"`,
    source: "5AM",
    name: "Desi Tomato (Desi Tamatar)",
    weight: "500 g",
    currentPrice: "18",
    oldPrice: "22",
    quantity: 0,
  },
  {
    itemId: 7,
    offer: "21% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/421703a.jpg?ts=1639905261" alt="Ginger"`,
    source: "5AM",
    name: "Ginger (Adrak)",
    weight: "250 g",
    currentPrice: "37",
    oldPrice: "47",
    quantity: 0,
  },
  {
    itemId: 8,
    offer: "21% OFF",
    imgSrc: `"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/3952a.jpg?ts=1660305579" alt="Sweet Potato"`,
    source: "5AM",
    name: "Sweet Potato (Shakarkandi)",
    weight: "500 g - 700 g",
    currentPrice: "50",
    oldPrice: "64",
    quantity: 0,
  },
  {
    itemId: 9,
    offer: "17% OFF",
    imgSrc: ` "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/4927a.jpg?ts=1671620198" alt="Bitter Gourd (Karela)" `,
    source: "5AM",
    name: "Bitter Gourd (Karela)",
    weight: "250 g - 300 g",
    currentPrice: "33",
    oldPrice: "40",
    quantity: 0,
  },
];
window.localStorage.setItem("items", JSON.stringify(items));
var item2 = JSON.parse(window.localStorage.getItem("item2"));
if (item2 != undefined) {
  items = item2;
}
console.log("hii");
console.log(items);

for (let i = 0; i < items.length; i++) {
  var main2 = document.querySelector(".main2");
  console.log(main2);
  let divItem = `
        <div id=${items[i].itemId}>
            <div class="main2-offer" >
                ${items[i].offer}
            </div>
            <div class="main2-image">
                <img src=${items[i].imgSrc}>
            </div>
            <div class="main2-source">
                <img width="12" height="12" loading="lazy" src="https://cdn.grofers.com/assets/ui/fresh_icon.png">
                Sourced at ${items[i].source}
            </div>
    
            <div class="main2-name">
                ${items[i].name}
                <p class="main2-weight">${items[i].weight}</p>
            </div>
    
            <div class="main2-last">
                <div>
                    <p class="main2-new-price"> ₹${items[i].currentPrice}</p> 
                    <p class="main2-price">₹${items[i].oldPrice}</p>
                </div>
                <div class="adding-btn-div">
    
                    <button class="adding-btn adding-btn-${items[i].itemId}"> ADD</button>
                    
                    <button class="minus minus-${items[i].itemId}" style="display:none"> -</button>
                    <button class="count count-${items[i].itemId}" style="display:none"> ${items[i].quantity}</button>
                    <button class="plus plus-${items[i].itemId}" style="display:none"> +</button>
    
                </div>
            </div>
        </div> `;
  main2.innerHTML += divItem;
}

var btns = document.getElementsByClassName("adding-btn");
var add_btn_div = document.getElementsByClassName("adding-btn-div");
var cartLogo = document.querySelector(".cart-logo");
var total_item = 0,
  total_price = 0;
var new_btns = document.getElementsByClassName("quantity");
var add_cart = document.getElementById("cart_count_item");
var logo = document.getElementsByClassName("cart-logo");

function update(i, total_item, total_price) {
  let minus = document.querySelector(`.minus-${items[i].itemId}`);
  let count = document.querySelector(`.count-${items[i].itemId}`);
  let plus = document.querySelector(`.plus-${items[i].itemId}`);
  let add = document.querySelector(`.adding-btn-${items[i].itemId}`);
  minus.style.display = "inline";
  plus.style.display = "inline";
  count.style.display = "inline";
  add.style.display = "none";
  count.textContent = items[i].quantity;
  add_btn_div[i].style.backgroundColor = "rgba(0, 128, 0,0.9)";
  add_cart.innerHTML = `${total_item} items
        <p>₹${total_price}</p>`;
  cartLogo.style.height = "50%";
  cartLogo.style.fontSize = "large";
  cartLogo.style.paddingTop = "5%";
}

for (let i = 0; i < items.length; i++) {
  if (items[i].quantity > 0) {
    total_item += items[i].quantity;
    total_price += items[i].quantity * Number(items[i].currentPrice);
    update(i, total_item, total_price);
  }
}

window.localStorage.setItem("items", JSON.stringify(items));

function add(i, button = "plus") {
  if (button === "plus") {
    console.log("button comes");
    items[i].quantity++;
  }
  total_item++;
  total_price += Number(items[i].currentPrice);
  update(i, total_item, total_price);
  localStorage.setItem("items", JSON.stringify(items));
}
function subtract(i) {
  items[i].quantity--;
  total_item--;
  total_price -= Number(items[i].currentPrice);
  update(i, total_item, total_price);
  if (items[i].quantity === 0) {
    var minus = document.getElementsByClassName("minus");
    var count = document.getElementsByClassName("count");
    var plus = document.getElementsByClassName("plus");
    btns[i].style.display = "inline-block";
    minus[i].style.display = "none";
    count[i].style.display = "none";
    plus[i].style.display = "none";
    add_btn_div[i].style.backgroundColor = "rgb(235,255, 239)";
    cartLogo.style = "none";
  }
  if(total_item===0){
     add_cart.innerHTML="My Cart"
  }
  localStorage.setItem("items", JSON.stringify(items));
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (items[i].quantity === 0) {
      items[i].quantity++;
    }
    add(i, "btn");
  });
}
for (let i = 0; i < btns.length; i++) {
  var minus = document.getElementsByClassName("minus");
  minus[i].addEventListener("click", function () {
    subtract(i);
  });
  var plus = document.getElementsByClassName("plus");
  plus[i].addEventListener("click", function () {
    add(i, "plus");
  });
}
var cart = document.querySelector(".cart");

cart.addEventListener("click", function () {
  if (total_item > 0) location.href = "Checkout.html";
  else
    alert(
      "You haven't added anthing in cart, please add atleast one item in the cart"
    );
});

window.onload = function () {
  localStorage.removeItem("item2");
};
