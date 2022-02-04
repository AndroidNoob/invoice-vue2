<template>
  <router-link
    class="client flex"
    :to="{ name: 'Client', params: { clientId: client.id } }"
  >
    <div class="left flex">
      <span class="client-code">#{{ client.code }}</span>
      <Avatar :fullname="client.fullname" />
      <span class="person">{{ client.name }} {{ client.surname }}</span>
    </div>
    <div class="right flex">
      <span class="invoices">0 invoices</span>
      <button @click.prevent="toggleEditClient(client.id)" class="purple">
        Edit
      </button>
      <div class="icon">
        <img src="/assets/icon-arrow-right.svg" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Avatar from "./Avatar.vue";
import { Modal } from "@/mixins/modal.js";
export default {
  name: "client",
  props: ["client"],
  mixins: [Modal],
  components: { Avatar },
  methods: {
    ...mapMutations(["TOGGLE_EDIT_CLIENT", "SET_CURRENT_CLIENT"]),
    toggleEditClient(id) {
      this.SET_CURRENT_CLIENT(id);
      this.TOGGLE_EDIT_CLIENT();
      this.openModal();
    },
  },
  computed: {
    ...mapState(["currentClient"]),
  },
};
</script>

<style lang="scss" scoped>
.client {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 16px 32px;
  background-color: #1e2139;
  align-items: center;
  span {
    font-size: 13px;
  }
  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;
    span {
      flex: 1;
    }
    .tracking-number {
      text-transform: uppercase;
    }
  }
  .right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;
    .invoices {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>