import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CreateProductView from '@/views/CreateProductView.vue';
import ShoppingCart from '@/components/ShoppingCart.vue'; // Certifique-se de que o caminho está correto

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
  },
  {
  path: '/create',
  name: 'CreateProductView',
  component: CreateProductView,
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;