export const View = {
  initialize(checkItems, items, update, addInStorage, total) {
    for (let i = 0; i < items.length; i++) {
      checkItems(items, i, total);

      var main = document.getElementsByClassName("main2");
      var main2 = main[0];
      console.log(items[i].offer);
      let divItem = `
                      <div id=${items[i].itemId} class="item-property">
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
                              <p class="item-name"> ${items[i].name}</p>
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
      update(i, items, addInStorage, total);
    }
  },
  update(i, items, addInStorage, total) {
    if (items[i].quantity > 0) {
      let add_btn_div = document.getElementsByClassName("adding-btn-div");
      let cartLogo = document.querySelector(".cart-logo");
      let add_cart = document.getElementById("cart_count_item");
      let cart=document.getElementsByClassName('.cart');
      var minus = document.querySelector(`.minus-${items[i].itemId}`);
      var count = document.querySelector(`.count-${items[i].itemId}`);
      var plus = document.querySelector(`.plus-${items[i].itemId}`);
      var add = document.querySelector(`.adding-btn-${items[i].itemId}`);
      minus.style.display = "inline";
      plus.style.display = "inline";
      count.style.display = "inline";
      add.style.display = "none";
      count.textContent = items[i].quantity;
      add_btn_div[i].style.backgroundColor = "rgba(0, 128, 0,0.9)";
      add_cart.innerHTML = `${total.item} items
                    <p>₹${total.price}</p>`;
      // cartLogo.style.height = "50%";
      //6 3 
      cartLogo.style.fontSize = "large";
      // cartLogo.style.paddingTop = "5%";
      addInStorage(items);
    }
  },
  subtract(i, items, total) {
    let add_cart = document.getElementById("cart_count_item");
    add_cart.innerHTML=`${total.item} items  <p>₹${total.price}</p>`;
    if (items[i].quantity === 0) {
      let btns = document.getElementsByClassName("adding-btn");
      let add_btn_div = document.getElementsByClassName("adding-btn-div");
      let cartLogo = document.querySelector(".cart-logo");
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
    console.log(total);
    if (total.item === 0) {
      add_cart.innerHTML = "My Cart";
    }
  },
  addBtnClick(add, subtract, min, update, items, addInStorage, total) {
    let btns = document.getElementsByClassName("adding-btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        add(i, items, total);
        update(i, items, addInStorage, total);
      });
      var minus = document.getElementsByClassName("minus");
      minus[i].addEventListener("click", function () {
        min(i, items, total);
        console.log(total.item);
        subtract(i, items, total);
        update(i, items, addInStorage, total);
      });
      var plus = document.getElementsByClassName("plus");
      plus[i].addEventListener("click", function () {
        add(i, items, total);
        update(i, items, addInStorage, total);
      });
    }
  },
  cartBtnClick(total) {
    let cart=document.querySelector('.cart');
    cart.addEventListener("click", function () {
      if (total.item > 0) location.href = "Checkout.html";
      else
        alert(
          "You haven't added anthing in cart, please add atleast one item in the cart"
        );
    });
  },
  windowLoad(){
    window.onload=()=>{
        localStorage.removeItem('item2');
    }
  },

  searchResult(){
    let search=document.getElementById('searchbar');
    search.addEventListener('input',()=>{
      let input=search.value.toLowerCase();
      let products=document.getElementsByClassName('item-property');
      let name=document.getElementsByClassName('item-name');
      for(let i=0;i<name.length;i++){
        if (!name[i].innerHTML.toLowerCase().includes(input)) {
          products[i].style.display="none";
      }
      else {
          products[i].style.display="block";                 
      }
      }
    })
  },
  filterResult(items){
    let filter=document.getElementById('main1-relevance');
    filter.addEventListener('change',()=>{
      let value=filter.value.toLowerCase();
      let products=document.getElementsByClassName('item-property');
      if(value.includes("non-veg")){
        for(let i=0;i<items.length;i++){
          if(items[i].type==='non-veg'){
            products[i].style.display='block';
          }
          else{
            products[i].style.display='none';

          }
        }
      }
      else if(value.includes("veg")){
        for(let i=0;i<items.length;i++){
          if(items[i].type==='veg'){
            products[i].style.display='block';
          }
          else{
            products[i].style.display='none';
          }
        }
      }
      else{
        for(let product of products){
          product.style.display='block';
        }
      }
    })

  }



};
