<template>
    <div class="flex flex-col min-h-screen bg-gray-100 p-4">
      <header class="bg-green-600 p-4 text-center">
        <h1 class="text-4xl font-bold text-white">Criar Produto</h1>
      </header>
  
      <main class="flex-grow flex items-center justify-center">
        <div class="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg">
  <h2 class="text-3xl font-bold text-center text-gray-800">Novo Produto</h2>
  <form @submit.prevent="createProduct">
    <div class="mb-4">
      <label for="name" class="block text-gray-800">Nome do Produto</label>
      <input type="text" id="name" v-model="product.name" required class="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-800" />
    </div>
    <div class="mb-4">
      <label for="description" class="block text-gray-800">Descrição</label>
      <textarea id="description" v-model="product.description" required class="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-800"></textarea>
    </div>
    <div class="mb-4">
      <label for="price" class="block text-gray-800">Preço</label>
      <input type="number" id="price" v-model="product.price" required class="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-800" />
    </div>
    <div class="mb-4">
      <label for="type" class="block text-gray-800">Tipo</label>
      <select id="type" v-model="product.type" required class="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-800">
        <option value="" disabled selected>Selecione um tipo</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Service">Service</option>
        <option value="Itens">Itens</option>
      </select>
    </div>
    <div class="flex justify-center">
      <button type="submit" class="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition mx-2">
        Criar Produto
      </button>
      <router-link to="/products" class="px-4 py-2 bg-green-700 rounded hover:bg-green-600 transition mx-2">
            Ver Produtos
        </router-link>
    </div>
  </form>
</div>
      </main>
  
      <footer class="bg-gray-800 p-4 text-center">
        <p class="text-sm text-white">&copy; 2023 Fellini RMT. Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreateProductView',
    data() {
      return {
        product: {
          name: '',
          description: '',
          price: null,
          type: '',
        },
      };
    },
    methods: {
      async createProduct() {
        const API_URL = 'http://localhost:3333/api/v1/products/create'; // Ajuste a URL conforme necessário
        try {
          const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Accept': '*/*', // Cabeçalho de aceitação
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adicione o token se necessário
            },
            body: JSON.stringify(this.product), // Corpo da requisição
          });
  
          if (!response.ok) {
            throw new Error('Erro ao criar produto');
          }
  
          const data = await response.json();
          console.log('Produto criado com sucesso:', data);
          this.$router.push('/products'); // Redireciona para a página de produtos após a criação
        } catch (error) {
          console.error(error);
          alert('Erro ao criar produto. Tente novamente.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionais, se necessário */
  </style>