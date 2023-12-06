<template>
    <div id="checkout" class="bg-white">
        <Header></Header>
        <div class="mx-auto pr-5 mt-2 flex flex-col-reverse items-center">
            <form @submit="finishPayment($event)" method="post" class="flex flex-col items-center bg-transparent w-3/4 p-4">
                <PersonalInfo></PersonalInfo>
                <Payment></Payment>

                <div class="w-full mt-6 mb-8 bg-transparent">
                    <div class="mb-6 w-full flex justify-end">
                        <span class="text-right border-b-2 border-black text-3xl font-bold">${{ cartTotal }} USD</span>
                    </div>
                    <div class="w-full flex space-x-4 justify-end">
                        <router-link to="/carrito" class=" rounded-md border border-transparent bg-gray-500 py-2 px-4 text-xl font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Volver al carrito
                        </router-link>
                        <button type="submit" class="w-1/4 border border-transparent bg-orange-500 py-2 px-4 text-xl hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md shadow-md text-white font-semibold">
                            Confirmar pago
                        </button>
                    </div>
                </div>
            </form>
            <div class="flex bg-transparent flex-col-reverse w-3/4 p-4">
                <Sumary></Sumary>
            </div>
            <Alert :visible="alert.alertVisible" position="top-right" :color="alert.color" :title="alert.title" :description="alert.description" />
        </div>
    </div>
</template>

<script>
import Payment from "../components/Payment.vue";
import PersonalInfo from "../components/PersonalInfo.vue";
import Sumary from "../components/Sumary.vue";
import Alert from "../components/Alert.vue";
import Header from "../components/Header.vue";
import {mapGetters, mapState, mapActions} from "vuex";
import store from "../store";

export default {
    name: "Checkout",
    components: {
        PersonalInfo,
        Sumary,
        Payment,
        Alert,
        Header
    },
    data() {
        return {
            alert: {
                alertVisible: false,
                color: '',
                title: '',
                description: ''
            }
        };
    },
    methods: {
        ...mapActions({
            removeItemFromCart: 'removeItemFromCart',
            sendOrder: 'sendOrder'
        }),

        finishPayment(e) {
            if (this.cartTotal != 0){
                e.preventDefault();

                var formData = new FormData(e.target);
                formData.append('cartItems', JSON.stringify(this.cartItems));
                var formProps = Object.fromEntries(formData);
                
                store.commit('SET_ORDER', formProps)
                this.sendOrder()

                this.alert.alertVisible = true;
                this.alert.color = 'success';
                this.alert.title = 'Success';
                this.alert.description = 'Your payment has been successfully processed.';

                this.cartItems.forEach((item) => {
                        this.removeItemFromCart(item.id)
                });

                setTimeout(() => {
                    this.alert.alertVisible = false;
                    window.location.replace("http://localhost:5173/");
                }, 3000);

            }else {
                e.preventDefault();

                this.alert.alertVisible = true;
                this.alert.color = 'error';
                this.alert.title = 'Error';
                this.alert.description = 'First add items to your cart.';

                setTimeout(() => {
                    this.alertVisible = false;
                }, 5000);

            }
        },
    },
    computed: {
        ...mapState(['order']),
        ...mapGetters({cartItems: 'getCartItems', cartTotal: 'getCartTotal'})
    }
};
</script>
