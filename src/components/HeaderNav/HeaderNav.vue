<template>
  <nav>
    <router-link to="/" class="router-link">Shop</router-link>
    <router-link to="/cart" class="router-link">Your Cart</router-link>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: #3a0ca3;
  padding: 1rem;
  border-bottom: 1px solid black;

  .router-link {
    color: white;
    font-size: 2rem;
    font-weight: 800;
    margin-left: 2rem;
    text-decoration: none;
    height: 100%;
  }
}

@media (max-width: 1250px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
