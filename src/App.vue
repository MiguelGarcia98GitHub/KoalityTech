<script setup lang="ts">
import { useProductsStore } from "./stores/useProductsStore";

const productsStore = useProductsStore();
console.log(productsStore);
</script>

<script lang="ts">
import HeaderNav from "./components/HeaderNav/HeaderNav.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HeaderNav,
  },
});
</script>

<template>
  <HeaderNav />
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #480ca8;
  font-family: "Roboto", sans-serif;
}

img {
  width: 200px;
}

li {
  list-style: none;
}
</style>
