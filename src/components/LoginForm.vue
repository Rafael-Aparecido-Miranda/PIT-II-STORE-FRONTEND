<template>
    <div class="flex items-center justify-center min-h-screen bg-transparent">
      <div class="w-full max-w-md p-8 space-y-6 bg-white text-white rounded-lg shadow-md" :style="backgroundStyle">
        <img class="mx-auto h-[300px] w-auto" src="@/assets/logo-right.png" alt="Your Company">
        <h1 class="text-4xl font-bold font-albion text-center text-gray-800">Fellini RMT</h1>
        <form @submit.prevent="login" class="space-y-4 ">
          <div class="form-group">
            <label for="email" class="block text-2xl font-medium  text-gray-100">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="form-group">
            <label for="password" class="block text-2xl font-medium text-gray-100">Senha:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class=" w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            class="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>
          <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>
        </form>
        <p class="text-center font-bold text-3xl font-albion">
          Não tem uma conta? <router-link to="/register" class="text-green-600 hover:underline">Registre-se</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { login } from '../services/AuthService'; // Importa a função de login
  
  export default {
    name: 'LoginForm',
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${require('@/assets/backgroundPage.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      };
    },
  },
    methods: {
      async login() {
        try {
          const token = await login(this.email, this.password);
          localStorage.setItem('token', token); // Armazena o token no localStorage
          this.$router.push('/'); // Redireciona para a página inicial após o login
        } catch (error) {
          this.errorMessage = 'Email ou senha incorretos.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Você pode remover o estilo scoped, pois estamos usando Tailwind CSS */
  </style>