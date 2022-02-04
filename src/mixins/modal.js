import { mapState, mapMutations } from "vuex";
export const Modal = {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "TOGGLE_EDIT_CLIENT"]),
    checkClick(e) {
      if (e.target === this.$refs.modalWrap) {
        if (this.editClient) this.TOGGLE_EDIT_CLIENT();
        this.TOGGLE_MODAL();
      }
    },
    closeModal() {
      if (this.editClient) this.TOGGLE_EDIT_CLIENT();
      this.TOGGLE_MODAL();
    },
    openModal() {
      this.TOGGLE_MODAL();
    }
  },
  computed: {
    ...mapState(["editClient"])
  }
};
