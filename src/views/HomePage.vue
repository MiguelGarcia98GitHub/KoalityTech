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
  <div class="home-page_layout">
    <div></div>
    <div></div>
    <ul class="product-list_container">
      <ProductCard
        class="product-card_component"
        v-for="product in $data"
        :key="product.name"
        :imgUrl="product.imgUrl"
        :name="product.name"
        :price="product.price"
        :priceStripeID="product.priceStripeID"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-page_layout {
  background-color: #480ca8;

  .product-list_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .product-card_component {
    margin: 4rem 1rem;
  }
}

@media (max-width: 1250px) {
  .home-page_layout {
    background-color: #480ca8;

    .product-list_container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 750px) {
  .home-page_layout {
    background-color: #480ca8;

    .product-list_container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}
</style>
