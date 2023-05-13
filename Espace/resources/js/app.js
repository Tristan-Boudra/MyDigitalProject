import './bootstrap';
import { createApp } from 'vue';
import App from './components/app.vue';
import Login from './components/login.vue';
import Register from './components/register.vue';

createApp(App).mount('#app');
createApp(Login).mount('#login');
createApp(Register).mount('#register');