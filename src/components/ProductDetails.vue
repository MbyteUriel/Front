<script setup>
import { useCartStore } from "@/stores/cart";
import { reactive, onMounted } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();
const state = reactive({ isInCart: false });

function addToMyCart(prodObj) {
  const prodInCart = cartStore.cart.find(
    (product) => product.id === prodObj.id
  );

  if (!prodInCart) {
    cartStore.addToCart(prodObj);
    state.isInCart = true;
  }
}

function deleteFromCart(prodObj) {
  cartStore.removeFromCart(prodObj);

  state.isInCart = false;
}

function checkCart() {
  const prodInCart = cartStore.cart.find(
    (product) => product.id === props.data.id
  );

  return prodInCart ? true : false;
}

// eslint-disable-next-line no-unused-vars
onMounted(() => {
  state.isInCart = checkCart();
});
</script>

<template>
  <div class="prod-card">
    <div class="img-container">
      <img :src="data.imagen" alt="product-img" />
    </div>
    <div class="details-container">
      <h1 class="prod-title">
        {{ data.descripcion }}
      </h1>
      <div class="prod-cat">
        {{ data.categoria }}
      </div>
      <div class="prod-price">${{ data.precio }}</div>
      <div class="add-btn" v-if="!state.isInCart" @click="addToMyCart(data)">
        Agregar a la orden
      </div>
      <div class="rmv-btn" v-else @click="deleteFromCart(data)">
        Quitar de la orden
      </div>
    </div>
  </div>
</template>

<style scoped>
.prod-card {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding-bottom: 1rem;
  overflow: hidden;
}

.details-container div {
  padding: 0.3rem 1rem;
}

.prod-title {
  font-weight: bold;
  text-align: center;
}

.prod-cat {
  text-align: center;
}

.prod-price {
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
  text-align: center;
}

.add-btn,
.rmv-btn {
  background-color: hsla(160, 100%, 37%, 1);
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.rmv-btn {
  background-color: red !important;
}

@media (max-width: 764px) {
  .img-container {
    background-color: white;
    height: 220px;
    position: relative;
    margin-bottom: 10px;
  }

  img {
    max-width: 200px;
    max-height: 200px;

    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
  }
}

@media (min-width: 764px) {
  .prod-card {
    display: flex;
    padding-bottom: 0;
  }

  .img-container {
    background-color: white;
    height: 500px;
    width: 100%;
    position: relative;
  }

  img {
    max-width: 400px;
    max-width: 100%;
    max-height: 400px;

    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
  }
}
</style>
