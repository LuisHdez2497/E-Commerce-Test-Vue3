import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import ProductDescription from '../views/ProductPreview.vue';
import Checkout from '../views/Checkout.vue';
import Cart from '../views/Cart.vue';

const routes = [
    {path: '/', name: "Inicio", component: Home},
    {path: '/vista-previa/:id/:slug', name: "Descripcion del Producto", component: ProductDescription, props: true},
    {path: '/checkout', name: "Verificar", component: Checkout, props: true},
    {path: '/carrito', name: "Carrito", component: Cart, props: true},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
