<template>
  <div @click="checkClick" ref="modalWrap" class="modal-wrap flex flex-column">
    <form @submit.prevent="submitForm" class="modal-content">
      <h1 v-if="!editClient">New Client</h1>
      <h1 v-else>Edit Client</h1>
      <Loading v-if="loading" />
      <div class="client-name flex">
        <div class="input flex flex-column">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="client.name" required />
        </div>
        <div class="input flex flex-column">
          <label for="surname">Surname</label>
          <input type="text" id="surname" v-model="client.surname" required />
        </div>
      </div>
      <div class="input flex flex-column">
        <label for="adress">Adress</label>
        <input type="text" id="adress" v-model="client.adress" required />
      </div>
      <div class="input flex flex-column">
        <label for="phone">Telephone</label>
        <input type="text" id="phone" v-model="client.phone" required />
      </div>
      <!-- SAVE & EXIT -->
      <div class="save flex">
        <div class="left">
          <button @click="closeModal" class="red">Cancel</button>
        </div>
        <div class="right">
          <button
            v-if="!editClient"
            @click="addClient"
            class="green"
            type="submit"
          >
            Add Client
          </button>
          <button v-else @click="updateClient" class="green" type="submit">
            Update Client
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "./Loading.vue";
import { Modal } from "@/mixins/modal.js";
export default {
  name: "ClientModal",
  mixins: [Modal],
  components: { Loading },
  data() {
    return {
      client: {
        id: null,
        code: null,
        name: null,
        surname: null,
        adress: null,
        city: null,
        zipcode: null,
      },
    };
  },
  created() {
    if (this.editClient) this.client = this.currentClient;
  },
  methods: {
    addClient() {
      this.loading = true;
      // do your business
    },
    updateClient() {
      this.loading = true;
      // do your business
    },
  },
  computed: {
    ...mapState(["editClient", "currentClient"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.modal-wrap {
  .modal-content {
    .client-name {
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
