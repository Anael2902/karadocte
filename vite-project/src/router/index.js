import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Assurez-vous que le chemin est correct
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import AccountView from '../views/AccountView.vue';
import ThemeView from '../views/ThemeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
 
  {
    path: '/register',
    name:'Register',
    component: RegisterView,
  },

  {
    path: '/login',
    name:'Login',
    component: LoginView,
  },

  {
    path: '/account',
    name:'Account',
    component: AccountView,
  },

  {
    path: '/home',
    name:'accueil',
    component: ThemeView,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;