import { createStore, combineReducers, applyMiddleware } from "redux";
import { Stores } from "./stores";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { MainCat } from "./mainCat";
import { Pincode } from "./pincode";
import { SubCat } from "./subCat";
import { Products } from "./products";
import { Brands } from "./brands";
import { Banners } from "./banners";
import { Search } from "./search";
import { BrandWiseProducts } from "./brandWiseProducts";
import { Catmix } from "./catmix";
import { PrivateStore } from "./privateStore";
import { Cart } from "./cart";
import { Address } from "./Address";
import { Shipcharges } from "./shipcharges";
import { Orders } from "./orders";
import { Orderdetails } from "./orderdetails";
import { Timeslots } from "./timeslots";
import { Catmix1 } from "./catmix1";
import { Catmix2 } from "./catmix2";
import { Catmix3 } from "./catmix3";
import { Catmix4 } from "./catmix4";
import { User } from "./user";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      stores: Stores,
      mainCat: MainCat,
      pincode: Pincode,
      subCat: SubCat,
      products: Products,
      brands: Brands,
      banners: Banners,
      search: Search,
      brandWiseProducts: BrandWiseProducts,
      catmix: Catmix,
      catmix1: Catmix1,
      catmix2: Catmix2,
      catmix3: Catmix3,
      catmix4: Catmix4,
      privateStore: PrivateStore,
      cart: Cart,
      address: Address,
      shipcharges: Shipcharges,
      orders: Orders,
      orderdetails: Orderdetails,
      timeslots: Timeslots,
      user: User,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
