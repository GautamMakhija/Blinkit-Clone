import { Model } from "./Checkout_Model.js";
import { View } from "./Checkout_View.js";

const Controller={
    init(){
    View.initialize(
      View.main,
      Model.items,
      Model.checkItems,
      View.update,
      Model.addInStorage,
      Model.total
    );
    View.btnClick(
      Model.items,
      View.update,
      Model.add,
      Model.subtract,
      Model.addInStorage,
      Model.total
    );
    View.logoClick(Model.addInStorage, Model.items);
  }
}
Controller.init();