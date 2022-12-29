<script lang="ts" setup>
import { useProductsStore } from "@/stores/useProductsStore";

const productsStore = useProductsStore();
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    imgUrl: String,
    name: String,
    price: Number,
  },
});
</script>

<template>
  <li>
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
  </li>
</template>

<style scoped lang="scss">
li {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

button {
  background-color: #272727;
  padding: 0.5rem;
  margin-top: 1rem;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #272727;
    transition: 0.5s;
    transform: translateY(-3px);
  }
}

.product-card_container {
  width: 18rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 23px 4px rgba(0, 0, 0, 0.75);
  border-radius: 10%;
  background-color: #3f37c9;
  .product-img_container {
    width: 230px;
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
