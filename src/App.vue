<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-900 text-white" :style="backgroundStyle">
    <main class="flex-grow flex items-center justify-center">
      <router-view></router-view> <!-- Aqui os componentes de rota serão renderizados -->
    </main>
    <footer class="bg-gray-800 p-4 text-center">
      <p class="text-sm">&copy; 2023 Fellini RMT. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${require('@/assets/background.png')})`,
        backgroundSize: 'cover', // Faz a imagem cobrir todo o contêiner
        backgroundPosition: 'center', // Centraliza a imagem
        minHeight: '100vh', // Garante que o contêiner tenha pelo menos a altura da tela
      };
    },
  },
};
</script>

<style>

</style>