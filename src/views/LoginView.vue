<template>
  <div class="flex items-center justify-center max-h-screen bg-transparent">
  <div>
    <LoginForm/>
  </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'LoginView',
  components:{
    LoginForm,
  },
};
</script>

<style>
/* Estilos adicionais, se necessário */
</style>