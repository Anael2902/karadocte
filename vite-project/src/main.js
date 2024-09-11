import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vérifiez que ce chemin est correct
// import 'bulma/css/bulma.css';
// main.js ou App.vue
// import '../public/global.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/all.js';




const app = createApp(App);

app.use(router);

app.mount('#app');
