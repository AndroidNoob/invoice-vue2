import { createApp } from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import axios from "axios";
import VueSweetAlert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL = "https://iiwdj.ciroue.com/api/";
createApp(App).use(store).use(router).use(VueSweetAlert2).mount("#app");
