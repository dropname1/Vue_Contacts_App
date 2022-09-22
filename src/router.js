import { createRouter } from "vue-router"
import { createWebHashHistory } from "vue-router"
import contactApp from '@/components/contactApp.vue'
import menuContact from '@/components/menuContact.vue'
import App from '@/App.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/main", component: App, props: true },
    { path: "/menu", component: menuContact, alias: "/", props: true },
    { path: "/cont", component: contactApp, props: true },
  ],
});