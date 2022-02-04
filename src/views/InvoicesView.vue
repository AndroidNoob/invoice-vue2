<template>
  <div class="clients container">
    <transition name="modal">
      <InvoiceModal v-if="modal" />
    </transition>
    <!-- HEADER -->
    <div class="header flex">
      <div class="flex flex-column left">
        <h1>Invoices</h1>
        <span>There are 4 invoices</span>
      </div>
      <div class="flex right">
        <button @click="newInvoice" class="button flex">
          <div class="flex inner-button">
            <img src="/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </button>
      </div>
    </div>

    <!-- Invoices -->
    <Invoice
      v-for="(invoice, index) in invoiceData"
      :invoice="invoice"
      :key="index"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import InvoiceModal from "@/components/InvoiceModal.vue";
import Invoice from "@/components/Invoice.vue";
export default {
  name: "productsView",
  components: { Invoice, InvoiceModal },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
    newInvoice() {
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
