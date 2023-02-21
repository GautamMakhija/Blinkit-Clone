export const View = {
  main: document.querySelector(".main-page"),
  initialize(main, items, checkItems, update, addInStorage, total) {
    var div = `
              <div class="main-header">
                  <div class="time">
                  <p>Delivery in 10 minutes </p> 
                  <p id="item-count">  ${total.item} items</p>
                  </div>
                  <div>
                      <button id="clear-cart"> Clear Cart</button>
                  </div>
                </div>
            `;

    main.innerHTML += div;
    for (let item of items) {
      if (item.quantity > 0) {
        checkItems(item, total);
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
                                    <button class="cross" id="cross-${item.itemId}">x</button>
                                </div>
                            </div>
                            
                        </div>`;
        main.innerHTML += div;
      }
    }
    let login_cart = document.querySelector(".login-cart");
    div = `<div>
              <button class="cart"> 
                  <div>🛒</div>
                  <div id="item-total-price">${total.item} items <p>₹${total.price}</p></div>  
              </button>
              </div>`;
    login_cart.innerHTML += div;
    div = `<div class="mrp">
                  <p>MRP</p>
                  <p id="total-old-price">₹${total.old_price}</p>
              </div>`;
    main.innerHTML += div;
    div = `<div class="discount">
              <p>Product discount</p>
              <p id="product-discount">-₹${total.old_price - total.price}</p>
          </div>`;
    main.innerHTML += div;

    div = `<div class="delivery-charge">
              <p>Delivery charge</p>
              <p> <span class="free-charge">₹15</span> <span class="free">FREE</span></p>
              </div>`;
    main.innerHTML += div;
    div = `<div class="grant-total">
              <p>Grant total</p>
              <p id='grant-mrp'>₹${total.price}</p>
          </div>`;
    main.innerHTML += div;

    div = `<div class="coupons">
                      Coupons are only applicable on the Blinkit app
                  </div>`;
    main.innerHTML += div;
    div = `
              <div class="bg-final">
              <div class="final-value">
                  <div id='final-price'> ${total.item} items • ₹${total.price}
                      <span class="cross-price">₹${total.old_price}</span>
                  </div>
                  <div class="proceed">
                      Proceed >
                  </div>
              </div>
              </div>
              `;
    main.innerHTML += div;
    update(items, addInStorage, total);
  },
  update(items, addInStorage, total) {
    let item_count = document.getElementById("item-count");
    let cart_details = document.getElementById("item-total-price");
    let old_mrp = document.getElementById("total-old-price");
    let prod_discount = document.getElementById("product-discount");
    let grant_total = document.getElementById("grant-mrp");
    let final_price = document.getElementById("final-price");
    item_count.innerHTML = `${total.item} items`;
    cart_details.innerHTML = `${total.item} items <p>₹${total.price}</p>`;
    old_mrp.innerHTML = ` ₹${total.old_price}`;
    prod_discount.innerHTML = `-₹${total.old_price - total.price}`;
    grant_total.innerHTML = `₹${total.price}`;
    final_price.innerHTML = `${total.item} items • ₹${total.price}`;
    final_price.innerHTML += ` <span class="cross-price">₹${total.old_price}</span>`;
    addInStorage(items);
  },
  btnClick(items, update, add, subtract, addInStorage, total) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].quantity > 0) {
        let minus = document.getElementById(`minus-${items[i].itemId}`);
        let plus = document.getElementById(`plus-${items[i].itemId}`);
        let count = document.getElementById(`count-${items[i].itemId}`);
        let cross = document.getElementById(`cross-${items[i].itemId}`);
        let clear_cart = document.getElementById("clear-cart");

        minus.addEventListener("click", function () {
          if (total.item === 1) {
            location.href = "Homepage.html";
          }
          subtract(i, items, count, total);
          if (items[i].quantity === 0) {
            var div = document.querySelector(`.item-${items[i].itemId}`);
            div.remove();
          }
          update(items, addInStorage, total);
        });
        plus.addEventListener("click", function () {
          add(i, items, count, total);
          update(items, addInStorage, total);
        });
        cross.addEventListener("click", function () {
          while (items[i].quantity > 0) {
            subtract(i, items, count, total);
            update(items, addInStorage, total);
          }
          var div = document.querySelector(`.item-${items[i].itemId}`);
          div.remove();
          if (total.item === 0) {
            location.href = "Homepage.html";
          }
        });
        clear_cart.addEventListener("click", function () {
          for (let i = 0; i < items.length; i++) {
            if (items[i].quantity > 0) {
              while (items[i].quantity > 0) {
                subtract(i, items, count, total);
                update(items, addInStorage, total);
              }
              var div = document.querySelector(`.item-${items[i].itemId}`);
              div.remove();
            }
          }
          location.href="Homepage.html";
        });
      }
    }
  },
  logoClick(addInStorage, items) {
    let logo = document.querySelector(".blinkit-logo");
    logo.addEventListener("click", function () {
      addInStorage(items);
      location.href = "Homepage.html";
    });
  },
};
