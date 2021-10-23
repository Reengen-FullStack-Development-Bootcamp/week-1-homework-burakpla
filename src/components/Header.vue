<template>
  <header>
    <nav class="navbar navbar-light bg-coral">
      <span class="navbar-brand mb-1 bg-coral  h1">shop.com</span>
      <span class="navbar-brand mb-3 h1">
        Cart <span class="badge badge-primary">{{ totalQty }}</span>
      </span>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
};
</script>

<style scoped>
header {
  margin-bottom: 50px;
  background:blue;
}
.badge{
  background: coral;
}
.navbar{
  background: coral;
}
.navbar.h1{
  color: aliceblue;
}
</style>