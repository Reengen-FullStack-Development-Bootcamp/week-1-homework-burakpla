<template>
  <div class="cart">
    <div v-if="!cart.length" class="alert alert-primary" role="alert">Your cart is empty!</div>
    <div
      v-if="orderPlaced"
      @click="() => this.orderPlaced=false"
      class="alert alert-success alert-dismissible fade show bg-black"
      role="alert"
    >
       Your order is ready!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in cart" :key="item.id">
        <button
          @click="removeItemFromCart(item.id)"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="media">
          <img width="80px" :src="item.imgUrl" class="mr-3" alt="item.title" />
          <div class="media-body">
            <p class="mt-0">{{ item.title }}</p>
            <button class="qty-button btn btn-sm btn-secondary" @click="reduceQty(item.id)">-</button>
            x {{ item.qty }}
            <button
              class="qty-button btn btn-sm btn-secondary"
              @click="addQty(item.id)"
            >+</button>
          </div>
        </div>
      </li>
    </ul>
    <button
      v-if="cart.length"
      @click="placeOrder"
      class="checkout-button btn btn-lg btn-block btn-success bg-black"
      :disabled="isProcessing"
    >
      <div v-if="isProcessing" class="spinner-border" role="status">
        <span class="sr-only">Paying...</span>
      </div>
      <span v-else>Order ($ {{ totalPrice.toLocaleString() }})</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      isProcessing: false,
      orderPlaced: false
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
    }
  },
  methods: {
    ...mapActions(["removeItemFromCart", "addQty", "reduceQty", "emptyCart"]),
    placeOrder() {
      this.isProcessing = true;
      setTimeout(() => {
        this.isProcessing = false;
        this.orderPlaced = true;
        this.emptyCart();
      }, 2000);
    }
  }
};
</script>

<style scoped>
.media {
  width: 100%;
  text-align: left;
}
.qty-button {
  border-radius: 40%;
  width: 30px;
  color:white;
  background-color: coral;
  
}
.checkout-button {
  margin-top: 50px;
  background-color: coral;
  width: 80%;
  size: 50%;
}
.alert{
  color: white;
  background: coral;
}
</style>