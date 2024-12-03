<template>
  <div class="flex flex-col min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <header class="bg-green-600 p-4 flex justify-between items-center">
      <img src="@/assets/logo-left.png" alt="Logo Esquerdo" class="h-[100px]" />
      <h1 class="text-4xl font-bold text-center flex-grow">Fellini RMT</h1>
      <button v-if="isLoggedIn" @click="handleLogout" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Logout
      </button>
    </header>
    
    <main class="flex-grow flex items-center justify-center">
      <div class="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center">Bem-vindo ao Fellini RMT!</h2>
        <p class="text-gray-300 text-center">
          Aqui você pode encontrar as melhores moedas e ofertas do mercado. Navegue por nossas categorias e descubra as melhores oportunidades.
        </p>
        <div class="flex justify-center">
          <router-link v-if="!isLoggedIn" to="/register" class="px-4 py-2 bg-green-700 rounded hover:bg-green-600 transition mx-2">
            Cadastre-se
          </router-link>
          <router-link to="/products" class="px-4 py-2 bg-green-700 rounded hover:bg-green-600 transition mx-2">
            Ver Produtos
          </router-link>
          <router-link v-if="!isLoggedIn" to="/login" class="px-4 py-2 bg-green-700 rounded hover:bg-green-600 transition mx-2">
            Login
          </router-link>
          <router-link v-if="isLoggedIn" to="/create" class="px-4 py-2 bg-green-700 rounded hover:bg-green-600 transition mx-2">
            Criar Produto
          </router-link>
        </div>
      </div>
    </main>
    
    <footer class="bg-gray-800 p-4 text-center">
      <p class="text-sm">&copy; 2023 Fellini RMT. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import { logout } from '@/services/AuthService'; // Ajuste o caminho conforme necessário

export default {
  name: 'HomeView',
  data() {
    return {
      isLoggedIn: false, // Estado de autenticação
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${require('@/assets/backgroundPage.png')})`,
      };
    },
  },
  created() {
    // Verifica se o token está presente no localStorage
    this.isLoggedIn = !!localStorage.getItem('token');
  },
  methods: {
    handleLogout() {
      logout(); // Chama a função de logout do authService
      console.log("Logout realizado");
      this.isLoggedIn = false; // Atualiza o estado de autenticação
      this.$router.push('/'); // Redireciona para a página de login
    },
  },
};
</script>

<style>
</style>