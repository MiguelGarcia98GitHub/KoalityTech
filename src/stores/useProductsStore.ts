import { defineStore } from "pinia";
import { productType } from "../models/product";

export const useProductsStore = defineStore("products", {
  state: () => ({
    cart: [] as productType[],
  }),

  getters: {
    totalAmountOfMoney() {
      let totalAmount = 0;
      this.cart.forEach(
        (item) => (totalAmount = totalAmount + (item.price as number))
      );
      return totalAmount;
    },
  },

  actions: {
    addToCart(item: productType) {
      if (this.cart.some((e) => e.name == item.name)) return;
      this.cart.push(item);
    },
    removeFromCart(item: productType) {
      this.cart = this.cart.filter((cartItem) => cartItem.name !== item.name);
    },
  },
});
