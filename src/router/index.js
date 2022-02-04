import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClientView from "../views/ClientView.vue";
import ClientsView from "../views/ClientsView.vue";
import ProductsView from "../views/ProductsView.vue";
import InvoicesView from "../views/InvoicesView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/clients",
    name: "Clients",
    component: ClientsView
  },
  {
    path: "/client/:clientId",
    name: "Client",
    component: ClientView
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsView
  },
  {
    path: "/invoices",
    name: "Invoices",
    component: InvoicesView
  }
  /*{
    path: "/client/:clientId",
    name: "Client",
    component: ClientView
  }*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
