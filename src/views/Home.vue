<template>
    <div id="home">
        <Header />
        <div class="header h-24 flex justify-center items-start">
            <h1 class="text-5xl sm:text-7xl font-bold">PRODUCTOS</h1>
        </div>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
                    <router-link v-for="produc in products" :id="produc.id" v-bind:to="'vista-previa/'+produc.id+'/'+produc.slug" class="group p-1 mb-24">
                        <div class="h-full w-full overflow-hidden flex items-center justify-center rounded-lg bg-white shadow-2xl border-t-8 border-orange-400">
                            <img :src="BASE_URL+'/storage/'+produc.media[0].model_id+'/'+produc.media[0].file_name" :alt="produc.media[0].name" class="h-3/4 w-3/4 object-contain group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-3xl text-gray-700">{{ produc.name }}</h3>
                        <p class="mt-1 text-2xl font-medium text-gray-900">${{ produc.price }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import {mapState, mapActions} from 'vuex';

export default {
    name: "Home",
    components: {
        Header
    },
    methods: {
        ...mapActions(['getProducts']),
    },
    computed: {
        ...mapState(['products', 'product', 'BASE_URL'])
    },
    mounted() {
        this.getProducts();
    }
};
</script>
