import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    error: null,
    modal: null,
    editClient: null,
    clients: [],
    currentClient: null
  },
  mutations: {
    TOGGLE_MODAL(state) {
      state.modal = !state.modal;
    },
    TOGGLE_EDIT_CLIENT(state) {
      state.editClient = !state.editClient;
    },
    SET_CLIENTS(state, payload) {
      state.clients = payload;
    },
    SET_CURRENT_CLIENT(state, payload) {
      state.currentClient = state.clientData.filter((client) => {
        return client.id === payload;
      })[0];
    }
  },
  actions: {
    async GET_CLIENTS({ commit, state }) {
      state.error = false;
      await axios.get("clients").then(
        (response) => {
          commit("SET_CLIENTS", response.data);
        },
        (error) => {
          state.error = true;
        }
      );
    }
  },
  modules: {}
});
