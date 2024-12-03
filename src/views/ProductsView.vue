<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-green-600 p-4 flex justify-between items-center">
      <img src="@/assets/logo-right.png" alt="Logo Esquerdo" class="h-[100px]" />
      <h1 class="text-4xl font-bold text-center flex-grow">Fellini RMT - Produtos</h1>
      <img src="@/assets/logo-left.png" alt="Logo Direito" class="h-[100px]" />
    </header>

    <main class="flex-grow p-4 flex">
      <div class="flex-grow">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-4 fon-albion">Nossos Produtos</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-lg p-4">
            <h3 class="text-xl font-semibold mt-2">{{ product.name }}</h3>
            <p class="text-gray-900 font-bold font-albion">{{ product.description }}</p>
            <p class="text-lg font-bold mt-2 text-red-600">R$ {{ product.price.toFixed(2) }}</p>
            <p class="text-md text-gray-900 font-bold font-albion">{{ product.type }}</p>
            <button @click="addToCart(product)" class="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>

      <div class="w-1/3 p-4">
        <ShoppingCart :cartItems="cartItems" @remove-from-cart="removeFromCart" @clear-cart="clearCart" />
      </div>
    </main>

    <footer class="bg-gray-800 p-4 text-center">
      <p class="text-sm">&copy; 2023 Fellini RMT. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue'; // Atualize o caminho conforme necessário

export default {
  name: 'ProductsView',
  components: {
    ShoppingCart,
  },
  data() {
    return {
      products: [], // Lista de produtos
      cartItems: [], // Itens do carrinho
    };
  },
  created() {
    this.fetchProducts(); // Chama a função para buscar produtos ao criar o componente
  },
  methods: {
    async fetchProducts() {
      const API_URL = 'http://localhost:3333/api/v1/products';
      try {
        const response = await fetch(API_URL); // Chama a API para buscar produtos
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        this.products = data; // Armazena os produtos no estado
      } catch (error) {
        console.error(error);
      }
    },
    addToCart(product) {
      this.cartItems.push(product); // Adiciona o produto ao carrinho
    },
    removeFromCart(product) {
      this.cartItems = this.cartItems.filter(item => item.id !== product.id); // Remove o produto do carrinho
    },
    clearCart() {
      this.cartItems = []; // Limpa o carrinho
    },
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui */
</style>