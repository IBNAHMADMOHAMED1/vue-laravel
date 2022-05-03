import { Vue } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
Vue.use(createRouter);

const routes = [
    {
        path: '/my-new-route',
        name: 'my-new-route',
        component: require('./components/pages/my-new-route.vue').default

    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router