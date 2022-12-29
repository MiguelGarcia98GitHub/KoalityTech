<script lang="ts">
import ProductCard from "@/components/ProductCard/ProductCard.vue";
import { defineComponent } from "@vue/runtime-core";
import { productsListData } from "../data/productsListData";
export default defineComponent({
  name: "HomePage",
  data() {
    return productsListData;
  },
  components: {
    ProductCard,
  },
});
</script>

<template>
  <ul>
    <ProductCard
      v-for="product in $data"
      :key="product.name"
      :imgUrl="product.imgUrl"
      :name="product.name"
      :price="product.price"
    />
  </ul>
</template>
