import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login.vue";
import CreateCar from "@/components/CreateCar.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login",
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/create",
      name: "create",
      component: CreateCar,
    },
  ],
});
