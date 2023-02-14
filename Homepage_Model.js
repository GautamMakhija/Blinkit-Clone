export const Model = {
  total: {
    item: 0,
    price: 0,
  },
  items:{},
  checkCart(items) {
    window.localStorage.setItem("items", JSON.stringify(items));
    var item2 = JSON.parse(window.localStorage.getItem("item2"));
    console.log(items);
    if (item2 != undefined) {
      items=item2;
      localStorage.removeItem('item2');
        return items;
    }
    return items;
  },
  checkItems(items, i, total) {
    if (items[i].quantity > 0) {
      total.item += items[i].quantity;
      total.price += items[i].quantity * Number(items[i].currentPrice);
    }
  },
  add(i, items, total) {
    items[i].quantity++;
    total.item++;
    total.price += Number(items[i].currentPrice);
    localStorage.setItem("items", JSON.stringify(items));
  },
  addInStorage(items) {
    localStorage.setItem("items", JSON.stringify(items));
  },
  minus(i, items, total) {
    items[i].quantity--;
    total.item--;
    total.price -= Number(items[i].currentPrice);
    console.log(total);
  },
};

