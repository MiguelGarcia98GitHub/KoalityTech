<script lang="ts" setup>
import { loadStripe } from "@stripe/stripe-js";
import { useProductsStore } from "../../stores/useProductsStore";
import { productType, productStripeType } from "../../models/product";
const stripePromise = loadStripe(
  "pk_test_51L5b0YBf6cohUQT1rioLRfDpScbjT5kxHgDPUy9dPdYMWOkn1LOidezOoTTBDa8SRkQshSzH0e5GAP3rSE3Rpndh00QeICAaZH"
);

const productsStore = useProductsStore();

function calculateCartData() {
  const cartData = productsStore.getCartData();
  const cartStripeData = [] as productStripeType[];
  cartData.forEach((item: productType) => {
    cartStripeData.push({ price: item.priceStripeID, quantity: 1 });
  });
  return cartStripeData;
}

async function handleClick() {
  try {
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({
      lineItems: [...calculateCartData()],
      mode: "payment",
      successUrl: "http://localhost:8080/#/",
      cancelUrl: "http://localhost:8080/#/",
    });
  } catch (error) {
    productsStore.changeErrorStateTemporarily("IntegrationError");
  }
}
</script>

<template>
  <button @click="handleClick()">Pay</button>
  <div v-if="productsStore.errorState === 'IntegrationError'">
    You must add some products to the cart first!
  </div>
</template>

<style lang="scss" scoped>
button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: #80ed99;
  border-radius: 0.5rem;
  cursor: pointer;
}

div {
  background-color: #ff0054;
}
</style>
