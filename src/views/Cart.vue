<template>
    <div id="cart" class="min-h-screen">
        <Header></Header>
        <div class="h-full">
            <div class="header h-24 flex justify-center w-full bg-orange-100 items-start">
                <h1 class="text-5xl sm:text-7xl font-bold">Carrito</h1>
            </div>
            <div class="flex flex-col w-full p-6 space-y-4 sm:p-10 bg-white text-black">
                <div class="text-3xl pt-3 text-center font-semibold" v-if="!cartItems.length">"Primero añade algunos productos"</div>
                <ItemCart v-if="cartItems.length" class="shadow-2xl bg-white border-t-8 border-orange-400 rounded-lg p-5 m-5"/>

                <div class="space-y-1 flex justify-end text-2xl text-right pt-3">
                    <p class="border-b-2 border-black">Total: <span class="text-3xl font-bold">$ {{ cartTotal }}</span></p>
                </div>
                <div class="flex justify-end space-x-4 text-xl pt-3">
                    <router-link to="/" class="rounded-md border border-transparent bg-gray-500 py-2 px-4 text-xl font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="sr-only sm:not-sr-only">Volver al inicio</span>
                    </router-link>
                    <router-link to="/checkout" class="rounded-md border border-transparent bg-orange-500 py-2 px-4 text-xl font-semibold text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="sr-only sm:not-sr-only">Procerder al pago</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from "../components/Header.vue";
import ItemCart from "../components/ItemCart.vue";

export default {
    name: "Cart",
    components: {
        ItemCart,
        Header
    },
    computed: {
        ...mapGetters({cartItems: 'getCartItems', cartTotal: 'getCartTotal'})
    }
};
</script>
