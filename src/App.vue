<script setup lang="ts">
import { useProductsStore } from "./stores/useProductsStore";
import ProductCard from "@/components/ProductCard/ProductCard.vue";
const productsStore = useProductsStore();
console.log(productsStore);
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    ProductCard,
  },
});
</script>

<template>
  <div>App Component</div>
  <ProductCard
    imgUrl="https://img.pccomponentes.com/articles/1048/10489999/1121-lg-gram-17z90q-gaa78b-intel-core-i7-1260p-16gb-1tb-ssd-17.jpg"
    name="Laptop LG Gram 17Z90Q"
    :price="1400"
  />
</template>

<style lang="scss">
body {
  background-color: cadetblue;
  font-family: "Roboto", sans-serif;
}

img {
  width: 200px;
}
</style>
