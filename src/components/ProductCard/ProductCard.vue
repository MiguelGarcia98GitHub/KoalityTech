<script lang="ts" setup>
import { useProductsStore } from "@/stores/useProductsStore";
import { defineComponent } from "@vue/runtime-core";

const productsStore = useProductsStore();
console.log(productsStore);
</script>

<script lang="ts">
export default defineComponent({
  props: {
    imgUrl: String,
    name: String,
    price: Number,
  },
});
</script>

<template>
  <div class="product-card_container">
    <div class="product-img_container">
      <img :src="imgUrl" alt="product" class="product-img" />
    </div>
    <div class="name_container">
      {{ name }}
    </div>
    <div class="price_container">Price: {{ price }} $</div>
    <div class="button-panel_container">
      <button @click="productsStore.addToCart({ imgUrl, name, price })">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card_container {
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 23px 4px rgba(0, 0, 0, 0.75);
  border-radius: 10%;

  .product-img_container {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;

    .product-img {
      width: 100%;
      border-radius: 10%;
      border: 1px solid grey;
    }
  }

  .name_container {
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 800;
  }

  .price_container {
    margin-top: 0.5rem;
    font-weight: 600;
  }
}
</style>
