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
  <div>App Component</div>
  <HeaderNav />
  <router-view />
</template>

<style lang="scss">
body {
  background-color: cadetblue;
  font-family: "Roboto", sans-serif;
}

img {
  width: 200px;
}

li {
  list-style: none;
}
</style>
