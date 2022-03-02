import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/movies",
    name: "movies",
    component: () => import("./components/MovieList")
  },
  {
    path: "/movies/:id",
    name: "Movie-details",
    component: () => import("./components/Movie")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddMovie")
  },
  {
    path: "/remove",
    name: "remove",
    component: () => import("./components/RemoveMovie")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;