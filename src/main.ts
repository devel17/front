import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'; // Подключение стилей Ant Design
import router from './router';
import keycloakService from '@/plugins/keycloak-service';

const app = createApp(App)

// Инициализация Keycloak
keycloakService.initKeycloak().then(() => {
    app.use(createPinia());
    app.use(Antd);
    app.use(router);
    app.mount('#app');
  });