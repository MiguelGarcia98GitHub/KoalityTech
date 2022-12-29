<script setup lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "./stores/useProductsStore";
import ProductCard from "@/components/ProductCard/ProductCard.vue";
const productsStore = useProductsStore();
console.log(productsStore);

const product1 = {
  name: "KoalityPhone",
  price: 200,
};

defineComponent({
  name: "HomeView",
  components: {
    ProductCard,
  },
});
</script>

<template>
  <div>App Component</div>
  <button @click="productsStore.addToCart(product1)">ADD PRODUCT 1</button>
  <ProductCard />
</template>

<style lang="scss">
body {
  background-color: cadetblue;
}
</style>
