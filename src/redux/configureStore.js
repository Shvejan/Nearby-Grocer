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
import BrandProducts from "../components/BrandProducts";
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
      brandProducts: BrandProducts,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
