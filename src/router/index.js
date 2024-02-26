// Composables
import { createRouter, createWebHistory } from 'vue-router';
import BuilderView from '@/components/BuilderView.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: BuilderView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
});

router.beforeEach((to, from, next) => {
  const routers = ['root'];
  if (!routers.includes(to.name)) next({ name: 'root' })
  next()
})

export default router
