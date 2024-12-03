<template>
    <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-black">Checkout</h2>
      
      <form @submit.prevent="submitOrder">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
          <input type="text" id="name" v-model="customer.name" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black" />
        </div>
  
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
          <input type="email" id="email" v-model="customer.email" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black" />
        </div>
  
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700">Endereço</label>
          <input type="text" id="address" v-model="customer.address" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black" />
        </div>
  
        <h3 class="text-xl font-bold text-gray-700 mt-6 mb-4">Resumo do Pedido</h3>
        <ul>
          <li v-for="item in cartItems" :key="item.id" class="flex justify-between mb-2 text-gray-700 font-bold">
            <span>{{ item.name }}</span>
            <span>R$ {{ item.price.toFixed(2) }}</span>
          </li>
        </ul>
        <div class="flex justify-between font-bold text-red-700">
          <span>Total:</span>
          <span>R$ {{ total.toFixed(2) }}</span>
        </div>
  
        <h3 class="text-lg font-bold mt-6 mb-2 text-green-600 ">Método de Pagamento</h3>
        <div class="mb-4">
          <button type="button" @click="payWithPix" class="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-yellow-400 transition ">
            Pagar no Pix
          </button>
          <button type="button" @click="payWithCard" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition m-4">
            Pagar com Cartão
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckoutComponent',
    props: {
      cartItems: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        customer: {
          name: '',
          email: '',
          address: '',
        },
      };
    },
    computed: {
      total() {
        return this.cartItems.reduce((sum, item) => sum + item.price, 0); // Calcula o total dos itens
      },
    },
    methods: {
      payWithPix() {
        // Aqui você pode implementar a lógica para pagamento via Pix
        alert(`Pagamento via Pix realizado com sucesso!\nTotal: R$ ${this.total.toFixed(2)}`);
        this.finalizeOrder();
      },
      payWithCard() {
        // Aqui você pode implementar a lógica para pagamento com cartão
        alert(`Pagamento com cartão realizado com sucesso!\nTotal: R$ ${this.total.toFixed(2)}`);
        this.finalizeOrder();
      },
      finalizeOrder() {

        
        // Redirecionar para o WhatsApp
        const message = `Olá, gostaria de confirmar meu pedido de R$ ${this.total.toFixed(2)}. Meu nome é ${this.customer.name} e meu endereço é ${this.customer.address}.`;
        const phoneNumber = '5511983069259'; // Substitua pelo número de telefone desejado (incluindo o código do país e DDD)
        const whatsappUrl = ` https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank'); // Abre o WhatsApp em uma nova aba
        // Limpar o carrinho ou redirecionar o usuário após a compra
        this.$emit('clear-cart'); // Emite o evento para limpar o carrinho
        this.customer = { name: '', email: '', address: '' }; // Limpa os campos do formulário
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos personalizados aqui */
  </style> ```vue
  <style scoped>
  /* Adicione estilos personalizados aqui */
  </style>