<template>
    <ul class="flex flex-col mt-0 xl:pt-0 pt-0 p-10 xl:p-10 divide-y divide-gray-700">
        <li v-for="product in cartItems" :id="'item_card_'+product.id" :key="product.id" class="flex flex-col py-5 sm:flex-row sm:justify-between">
            <div class="flex w-full space-x-2 sm:space-x-4">
                <img
                    class="flex-shrink-0 object-cover w-20 h-20 p-5 shadow-xl rounded outline-none md:w-56 md:h-56 bg-gray-200"
                    :src="product.media"
                    alt="Product Image">
                <div class="flex flex-col justify-center w-full">
                    <div class="flex justify-between w-full pb-2 space-x-2">
                        <div class="space-y-1 w-10/12">
                            <h3 class="text-xl font-semibold leading-snug sm:pr-8">{{ product.name }}</h3>
                            <p class="text-sm text-black">{{ product.description }}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl font-semibold">${{ product.price*product.quantity }}</p>
                        </div>
                    </div>
                    <div class="flex text-sm divide-x">
                        <div class="custom-number-input flex justify-between items-end text-center h-20 w-3/4 lg:w-4/12">
                            <div class="flex flex-col w-32">
                                <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Cantidad</label>
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button @click="decrementQuantityByCartItem({itemId: product.id})" data-action="decrement"
                                            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-32 rounded-l cursor-pointer outline-none">
                                        <span class="m-auto text-2xl font-bold">−</span>
                                    </button>
                                    <input type="number"
                                           class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold border-2 border-gray-400 text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                           name="custom-input-number" :value="product.quantity" readonly>

                                    <button @click="incrementQuantityByCartItem({itemId: product.id})" data-action="increment"
                                            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-32 rounded-r cursor-pointer">
                                        <span class="m-auto text-2xl font-bold">+</span>
                                    </button>
                                </div>
                            </div>
                            <button @click="removeItemFromCart(product.id)" type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     class="w-6 h-6 fill-current">
                                    <path
                                        d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path
                                        d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Eliminar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "ItemCart",
    computed: {
        ...mapGetters({cartItems: 'getCartItems'})
    },
    methods: {
        ...mapActions({
            removeItemFromCart: 'removeItemFromCart',
            incrementQuantityByCartItem: 'incrementQuantityByCartItem',
            decrementQuantityByCartItem: 'decrementQuantityByCartItem',
        }),

        fadeOutItem(elementId){
            var fadeTarget = document.getElementById(elementId)

            var fadeEffect = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity -= 0.3;
                } else {
                    clearInterval(fadeEffect);
                }
            }, 200);
        }
    },
};
</script>
