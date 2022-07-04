<script setup>

import ProductCard from "@/components/ProductCard.vue";

</script>

<template>

  <div class="content">
    <div class="product-list-container">
      <ProductCard v-for="prod in prodList" :key="prod.id" :prod="prod" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catList: [],
      prodList: [],
      loadingProd: false,
      loadingCat: false,
    };
  },
  methods: {
    async getCategories() {
      await fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((list) => (this.catList = list));

      this.loadingCat = false;
    },
    async getAllProds() {
      await fetch("http://localhost:8084/rest/getProducts/?categoria=MONITORES")
        .then((res) => res.json())
        .then((list) => (this.prodList = list));

      this.loadingProd = false;
    },
  },
  async mounted() {
    this.loadingProd = true;
    this.loadingCat = true;
    await this.getCategories();
    await this.getAllProds();
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}

.product-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
}
</style>
