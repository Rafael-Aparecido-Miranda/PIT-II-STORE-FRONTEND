<!-- src/views/ShoppingCart.vue -->
<template>
  <div class="bg-gray-600 rounded-lg shadow-lg p-4">
    <h2 class="text-xl font-bold mb-4">Carrinho</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id" class="flex justify-between items-center mb-2">
        <span>{{ item.name }}</span>
        <button @click="removeFromCart(item)" class="text-red-600">Remover</button>
      </li>
    </ul>
    
    <div class="mt-4">
      <span class="font-bold text-lg">Total: R$ {{ total.toFixed(2) }}</span>
    </div>

    <button @click="clearCart" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition mx-4">
      Limpar Carrinho
    </button>
    
    <button @click="showCheckout = true" class="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition">
      Pagar
    </button>

    <!-- Componente Checkout -->
    <Checkout v-if="showCheckout" :cartItems="cartItems" @clear-cart="clearCart" @close="showCheckout = false" />
  </div>
</template>

<script>
import Checkout from './CheckoutComponent.vue'; // Certifique-se de importar o componente Checkout

export default {
  name: 'ShoppingCart',
  components: {
    Checkout,
  },
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showCheckout: false, // Controle para exibir o componente de checkout
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0); // Calcula o total dos itens
    },
  },
  methods: {
    removeFromCart(item) {
      this.$emit('remove-from-cart', item); // Emite o evento para remover o item do carrinho
    },
    clearCart() {
      this.$emit('clear-cart'); // Emite o evento para limpar o carrinho
    },
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui */
</style>