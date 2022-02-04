<template>
  <div class="clients container">
    <transition name="modal">
      <ProductModal v-if="modal" />
    </transition>
    <!-- HEADER -->
    <div class="header flex">
      <div class="flex flex-column left">
        <h1>Products</h1>
        <span>There are 4 products</span>
      </div>
      <div class="flex right">
        <button @click="newProduct" class="button flex">
          <div class="flex inner-button">
            <img src="/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Product</span>
        </button>
      </div>
    </div>

    <!-- Clients -->
    <Product
      v-for="(product, index) in productData"
      :product="product"
      :key="index"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ProductModal from "@/components/ProductModal.vue";
import Product from "@/components/Product.vue";
export default {
  name: "productsView",
  components: { Product, ProductModal },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
    newProduct() {
      this.TOGGLE_MODAL();
    },
  },
  computed: {
    ...mapState(["modal", "productData"]),
  },
};
</script>

<style lang="scss" scoped>
.clients {
  color: #fff;
  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }
    .right {
      justify-content: flex-end;
      align-items: center;

      .button {
        align-items: center;
        span {
          font-size: 12px;
        }
      }
    }
  }

  .button {
    padding: 8px 10px;
    background-color: #7c5dfa;
    border-radius: 40px;
    .inner-button {
      margin-right: 8px;
      border-radius: 50px;
      padding: 8px;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      img {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
