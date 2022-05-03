require('./bootstrap');
import { createApp } from 'vue';
import router from './router';
let app = createApp({
    // router
});

window.Vue = require('vue').default;

app.component('main-component', require('./components/MainComponent.vue').default);

app.use(router).mount('#app');
