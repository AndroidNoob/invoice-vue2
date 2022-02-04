<template>
  <div @click="checkClick" ref="modalWrap" class="modal-wrap flex flex-column">
    <form @submit.prevent="submitForm" class="modal-content">
      <h1>New Product</h1>
      <Loading v-if="loading" />
      <div class="input flex flex-column">
        <label for="designation">Designation</label>
        <input type="text" id="designation" v-model="designation" required />
      </div>
      <div class="input flex flex-column">
        <label for="desc">Description</label>
        <input type="text" id="desc" v-model="desc" />
      </div>
      <div class="price-code flex">
        <div class="input flex flex-column">
          <label for="price">Unit Price</label>
          <input type="text" id="price" v-model="price" required />
        </div>
        <div class="input flex flex-column">
          <label for="code">Code</label>
          <input type="text" id="code" v-model="code" />
        </div>
      </div>
      <!-- SAVE & EXIT -->
      <div class="save flex">
        <div class="left">
          <button @click="closeModal" class="red">Cancel</button>
        </div>
        <div class="right">
          <button @click="addProduct" class="green">Add Product</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import { Modal } from "@/mixins/modal.js";
export default {
  name: "ProductModal",
  mixins: [Modal],
  components: { Loading },
  data() {
    return {
      designation: null,
      desc: null,
      price: null,
      code: null,
    };
  },
  methods: {
    addProduct() {
      this.loading = true;
      // do your business
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.modal-wrap {
  .modal-content {
    .price-code {
      gap: 16px;
      div {
        flex: 1;
      }
    }

    .save {
      margin-top: 32px;
      div {
        flex: 1;
      }
      .right {
        justify-content: flex-end;
      }
    }
  }
}
</style>
