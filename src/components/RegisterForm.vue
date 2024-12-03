<template>
  <div class="flex items-center justify-center min-h-screen bg-transparent">
    <div class="w-full max-w-md p-8 space-y-6 bg-transparent rounded-lg shadow-md">
      <img class="mx-auto h-[300px] w-auto" src="@/assets/logo-right.png" alt="Your Company">
      <h1 class="text-4xl font-bold font-albion text-center text-white" >Registrar</h1>
      <form @submit.prevent="register" class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Nome"
          required
          class="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="username"
          type="text"
          placeholder="Nome de Usuário"
          required
          class="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Senha"
          required
          class="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirme a Senha"
          required
          class="w-full p-3 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          class="w-full p-3 font-albion text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Registrar
        </button>
      </form>
      <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { register } from '../services/AuthService'; // Importa a função de registro do authService

export default {
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    };
  },
  methods: {
    async register() {
      // Verifica se as senhas coincidem
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'As senhas não coincidem.';
        return;
      }

      try {
        await register(this.name, this.username, this.email, this.password); // Chama a função de registro
        this.errorMessage = 'Registro bem-sucedido! Você pode fazer login agora.'; // Mensagem de sucesso
        // Aqui você pode redirecionar ou limpar o formulário, se desejar
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.message; // Exibe a mensagem de erro
      }
    },
  },
};
</script>

<style scoped>
/* Você pode remover o estilo scoped, pois estamos usando Tailwind CSS */
</style>