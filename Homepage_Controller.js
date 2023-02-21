import { Model } from "./Homepage_Model.js";
import { View } from "./Homepage_View.js";
const Controller = {
  init() {
    fetch("items.json").then((data)=>data.json())
    .then((data)=>{
      Model.items=data.items;
      console.log("Model items is")
      console.log(Model.items);
      Model.items=Model.checkCart(Model.items);
      View.initialize(Model.checkItems, Model.items, View.update, Model.addInStorage, Model.total);
      View.addBtnClick(
        Model.add,
        View.subtract,
        Model.minus,
        View.update,
        Model.items,
        Model.addInStorage,
        Model.total
      );
      View.cartBtnClick(Model.total);
      View.searchResult();
      View.filterResult(Model.items);
      View.windowLoad();
  }).catch((err)=>{
    console.log("Cannot fetch the data. "+ err);
  })
  },
};

Controller.init();
