<template>
  <div class="clients container">
    <transition name="modal">
      <ClientModal v-if="modal" />
    </transition>
    <!-- HEADER -->
    <div class="header flex">
      <div class="flex flex-column left">
        <h1>Clients</h1>
        <span>There are {{ clients.length }} clients</span>
      </div>
      <div class="flex right">
        <button @click="newClient" class="button flex">
          <div class="flex inner-button">
            <img src="/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Client</span>
        </button>
      </div>
    </div>

    <!-- Clients -->
    <Client
      v-if="clients.length"
      v-for="(client, index) in clients"
      :client="client"
      :key="index"
    />
    <div v-else class="empty flex flex-column">
      <img src="/assets/illustration-empty.svg" alt="empty" />
      <h3>There is nothing here.</h3>
      <p>Click on the new invoice button to get started.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ClientModal from "@/components/ClientModal.vue";
import Client from "@/components//Client.vue";
export default {
  name: "clientsView",
  components: { Client, ClientModal },
  created() {
    this.GET_CLIENTS();
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
    ...mapActions(["GET_CLIENTS"]),
    newClient() {
      this.TOGGLE_MODAL();
    },
  },
  computed: {
    ...mapState(["error", "modal", "clients"]),
  },
  watch: {
    error() {
      if (this.error)
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
    },
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
