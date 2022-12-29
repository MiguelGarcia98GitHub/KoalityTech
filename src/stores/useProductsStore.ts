import { defineStore } from "pinia";
import { productType } from "../models/product";

export const useProductsStore = defineStore("products", {
  state: () => ({
    cart: [] as productType[],
  }),

  actions: {
    addToCart(item: productType) {
      this.cart.push(item);
    },
  },
});
