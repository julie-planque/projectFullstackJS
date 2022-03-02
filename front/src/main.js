import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue3-date-time-picker/dist/main.css';
import router from './router';
createApp(App).use(router).mount('#app');