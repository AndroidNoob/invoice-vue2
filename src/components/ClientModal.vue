<template>
  <div @click="checkClick" ref="modalWrap" class="modal-wrap flex flex-column">
    <form @submit.prevent="submitForm" class="modal-content">
      <h1 v-if="!editClient">New Client</h1>
      <h1 v-else>Edit Client</h1>
      <Loading v-if="loading" />
      <div class="multiple flex">
        <div class="input flex flex-column">
          <label for="first_name">First Name</label>
          <input type="text" id="first_name" v-model="client.first_name" required />
        </div>
        <div class="input flex flex-column">
          <label for="last_name">Last name</label>
          <input type="text" id="last_name" v-model="client.last_name" required />
        </div>
      </div>
      <div class="input flex flex-column">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="client.address" required />
      </div>
      <div class="multiple flex">
        <div class="input flex flex-column">
          <label for="city">City</label>
          <input type="text" id="city" v-model="client.city" required />
        </div>
        <div class="input flex flex-column">
          <label for="zipcode">Zip Code</label>
          <input type="text" id="zipcode" v-model="client.zipcode" required />
        </div>
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
import axios from "axios";
export default {
  name: "ClientModal",
  mixins: [Modal],
  components: { Loading },
  data() {
    return {
      client: {
        code: null,
        first_name: null,
        last_name: null,
        address: null,
        city: null,
        zipcode: null,
        phone: null
      },
    };
  },
  created() {
    if (this.editClient) this.client = this.currentClient;
  },
  methods: {
    async addClient() {
      this.loading = true;
      // do your business
      await axios.post('clients', this.client).then((response) => {
        this.loading = false;
        this.closeModal();
      }, (error) => {
        this.loading = false;
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
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
    .multiple {
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
