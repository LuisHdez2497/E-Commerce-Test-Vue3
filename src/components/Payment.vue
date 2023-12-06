<template>
    <div class="shadow-2xl bg-white border-t-8 border-orange-400 rounded-lg p-5 m-5 w-full">
        <h4 class="text-3xl text-gray-700 mb-5">Informacion de pago</h4>
        <div class="p-10 rounded-md bg-white">
            <div class="mb-6">
                <label class="block mb-3 text-gray-600" for="">Nombre en la tarjeta</label>
                <input type="text" name="payment-name" required
                       class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
                       />
            </div>
            <div class="mb-6">
                <label class="block mb-3 text-gray-600" for="">Numero de tarjeta</label>
                <input
                    type="tel" name="payment-card" required
                    class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                    />
            </div>
            <div class="mb-6 flex flex-wrap -mx-3w-full">
                <div class="w-2/3 px-3">
                    <label class="block mb-3 text-gray-600" for="">Fecha de Expiracion</label>
                    <div class="flex">
                        <select name="payment-month" required
                            class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6"
                            >
                            <option selected disabled>Mes</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select name="payment-year" required
                            class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                            >
                            <option selected disabled>Año</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
                <div class="w-1/3 px-3">
                    <label class="block mb-3 text-gray-600" for="">CVC</label>
                    <input type="tel" name="payment-cvc" required
                           class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                           />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Payment"
};
</script>
