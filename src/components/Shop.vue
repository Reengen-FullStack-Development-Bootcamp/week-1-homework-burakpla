<template>
  <div class="row">
    <div
      class="card"
      style="width: 15rem;"
      v-for="item in products"
      :key="item.id"
    >
      <img :src="item.imgUrl" class="card-img-top" :alt="item.title" />

      <div class="card-body">
        <p class="card-title">{{ item.title }}</p>
                <p class="card-info">{{ item.info }}</p>
                                <p class="card-size">{{ item.size }}</p>


        <p class="card-text">$ {{ item.price.toLocaleString() }}</p>
        <button class="btn btn-secondary bg-gray" @click="selectSize(size)">
          {{size="37"}}
        </button>
        <button class="btn btn-secondary" @click="selectSize(size)">
          {{size="38"}}
        </button>
        <button class="btn btn-secondary" @click="selectSize(size)">
          {{size="39"}}
        </button>
        <button class="btn btn-secondary" @click="selectSize(size)">
          {{size="40"}}
        </button>
         <button class="btn btn-secondary" @click="selectSize(size)">
          {{size="41"}}
        </button>
         <button class="btn btn-secondary" @click="selectSize(size)">
          {{size="42"}}
        </button>
         
        <hr>
        <button class="btn btn-secondary bg-black" @click="addItemToCart(item)">
          Add To Cart
        </button>
        
        
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Shop",
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
    ...mapActions(["selectSize"])
  },
};
</script>
<style scoped>
.card {
  padding: 20px
  ;
  border: 100px;
  background-color: rgb(252, 250, 250);

}
.btn{
  background-color:coral;
}
</style>