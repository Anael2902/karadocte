import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vérifiez que ce chemin est correct

const app = createApp(App);

app.use(router);

app.mount('#app');
