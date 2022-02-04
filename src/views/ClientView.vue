<template>
  <div class="client-info container">
    <div class="header">
      <h1>Client info</h1>
    </div>
    <div class="details flex">
      <div class="left flex flex-column">
        <Avatar :fullname="currentClient.fullname" size="108" />
        <div class="fullname">
          <h3>{{ currentClient.fullname }}</h3>
        </div>
        <div class="client-details">
          <table>
            <tbody>
              <tr>
                <th>Adress</th>
                <td>{{ currentClient.adress }}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{{ currentClient.city }}</td>
              </tr>
              <tr>
                <th>Zip Code</th>
                <td>{{ currentClient.zipcode }}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{{ currentClient.phone }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="right flex flex-column">
        <h3>Client's invoices</h3>
        <!-- invoice component with v-if -->
        <div class="empty flex flex-column">
          <img src="/assets/illustration-empty.svg" alt="empty" />
          <h3>There is nothing here.</h3>
          <p>Click on the new invoice button to get started.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Avatar from "@/components/Avatar.vue";
export default {
  name: "clientView",
  components: { Avatar },
  created() {
    this.getCurrentClient();
  },
  methods: {
    ...mapMutations(["SET_CURRENT_CLIENT"]),
    getCurrentClient() {
      this.SET_CURRENT_CLIENT(this.$route.params.clientId);
    },
  },
  computed: {
    ...mapState(["currentClient"]),
  },
};
</script>

<style lang="scss" scoped>
.client-info {
  h1,
  h3 {
    color: #fff;
    margin-bottom: 16px;
  }
  .details {
    gap: 24px;
  }
  .left,
  .right {
    flex: 1;
    color: #fff;
    border-radius: 20px;
    padding: 28px 16px;
    background-color: #1e2139;
    align-items: center;
  }
  .right {
    flex-basis: 40%;
  }

  .client-details {
    width: 100%;
    table {
      border: none;
      width: 100%;
    }
    th,
    td {
      text-align: left;
      padding: 8px 0;
    }
    td {
      color: #ddd;
    }
  }

  .empty {
    margin-top: 32px;
    align-items: center;

    img {
      width: 190px;
      height: 180px;
    }
    p {
      color: #ddd;
    }
  }
}
</style>