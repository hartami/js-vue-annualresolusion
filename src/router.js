import Vue from "vue";
import Router from "vue-router";
import Goals from "./components/Goals.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "goals",
      component: Goals
    },
    {
      path: "/about/:name",
      name: "about",
      component: About
    }
  ]
});
