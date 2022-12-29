<script lang="ts" setup>
import { useProductsStore } from "@/stores/useProductsStore";

const productsStore = useProductsStore();
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: String,
    price: Number,
  },
});
</script>

<template>
  <li>
    <div></div>
    <div class="name">{{ name }}</div>
    <div>- {{ price }} 💵 -</div>
    <div>
      <button
        @click="productsStore.removeFromCart({ name })"
        class="cross-icon-button"
      >
        <img src="@/assets/cross.png" alt="cross icon" class="cross-icon" />
      </button>
    </div>
  </li>
</template>

<style scoped lang="scss">
li {
  background-color: #3f37c9;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

  .name {
    font-weight: 700;
  }

  .cross-icon-button {
    background-color: transparent;
    border: none;

    .cross-icon {
      width: 1.5rem;
      border: 2px solid black;
      border-radius: 100%;
      cursor: pointer;
    }
  }
}
</style>
