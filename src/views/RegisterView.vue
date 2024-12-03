<template>
  <div class="flex items-center justify-center min-h-screen bg-transparent">
    <div>
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'; // Importa o componente de registro

export default {
  name: 'RegisterView',
  components: {
    RegisterForm, // Registra o componente
  },
};
</script>

<style scoped>
/* Você pode remover o estilo scoped, pois estamos usando Tailwind CSS */
</style>