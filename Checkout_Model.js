export const Model = {
  total: {
    item: 0,
    price: 0,
    old_price: 0,
  },
  items: JSON.parse(localStorage.getItem("items")),
  checkItems(item, total) {
    total.item += item.quantity;
    total.price += Number(item.currentPrice) * item.quantity;
    total.old_price += Number(item.oldPrice) * item.quantity;
  },
  addInStorage(items) {
    localStorage.setItem("item2", JSON.stringify(items));
  },
  add(i, items, count, total) {
    items[i].quantity++;
    count.textContent++;
    total.item++;
    total.price += Number(items[i].currentPrice);
    total.old_price += Number(items[i].oldPrice);
  },
  subtract(i, items, count, total) {
    items[i].quantity--;
    count.textContent--;
    total.item--;
    total.price -= Number(items[i].currentPrice);
    total.old_price -= Number(items[i].oldPrice);
  },
};
