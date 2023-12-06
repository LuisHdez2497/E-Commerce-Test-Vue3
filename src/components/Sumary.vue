<template>
    <div class="order-first bg-white border-t-8 border-orange-400 lg:order-last shadow-2xl rounded-lg p-5 w-full">
        <h4 class="text-3xl text-gray-700 mb-5">Resumen del Pedido</h4>
        <div class="rounded-md bg-white">
            <ItemCart />
        </div>
    </div>
</template>

<script>
import ItemCart from "../components/ItemCart.vue";

export default {
    name: "Summary",
    components: {
        ItemCart
    }
};
</script>
