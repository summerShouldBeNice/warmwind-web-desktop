/**
 * 路由配置
 */
import { createRouter, createWebHistory } from "vue-router";

// 静态路由
const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/login"),
    meta: { title: "登录" },
  },
  {
    path: "/chat/index",
    component: () => import("@/views/chat/index"),
    meta: { title: "聊天室" },
  },
//   {
//     path: "/:pathMatch(.*)*",
//     component: () => import("@/views/exception/404"),
//   },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
