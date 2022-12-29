<script setup lang="ts">
import { useProductsStore } from "@/stores/useProductsStore";
const productsStore = useProductsStore();
</script>

<script lang="ts">
import CartItem from "@/components/CartItem/CartItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    CartItem,
  },
});
</script>

<template>
  <ul>
    <CartItem
      class="product-card_component"
      v-for="product in productsStore.cart"
      :key="product.name"
      :imgUrl="product.imgUrl"
      :name="product.name"
      :price="product.price"
    />
  </ul>
  <div class="price">Total Price: {{ productsStore.totalAmountOfMoney }}</div>
</template>

<style lang="scss" scoped>
.price {
  background-color: #4361ee;
  padding: 1rem;
  color: aliceblue;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
