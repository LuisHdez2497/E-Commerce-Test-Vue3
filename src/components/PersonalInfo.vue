<template>
    <div class="shadow-2xl border-t-8 border-orange-400 bg-white rounded-lg p-5 m-5 lg:m-0 w-full">
        <h4 class="text-3xl text-gray-700 mb-5">Información Personal</h4>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="overflow-hidden sm:rounded-md">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" name="first-name" required id="first-name" autocomplete="given-name"
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Apellido</label>
                            <input type="text" name="last-name" required id="last-name" autocomplete="family-name"
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                            <label for="email-address" class="block text-sm font-medium text-gray-700">Correo Electronico</label>
                            <input type="text" name="email-address" required id="email-address" autocomplete="email"
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="country" class="block text-sm font-medium text-gray-700">Pais</label>
                            <select id="country" name="country" required autocomplete="country-name"
                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                <option value="Estados Unidos">Estados Unidos</option>
                                <option value="Canada">Canada</option>
                                <option value="Mexico">Mexico</option>
                            </select>
                        </div>

                        <div class="col-span-6">
                            <label for="street-address" class="block text-sm font-medium text-gray-700">Direccion(Calle, Numero, Colonia)</label>
                            <input type="text" name="street-address" required id="street-address" autocomplete="street-address"
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   />
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>
                            <input type="text" name="city" required id="city" autocomplete="address-level2"
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="region" class="block text-sm font-medium text-gray-700">Estado</label>
                            <input type="text" name="region" required id="region" autocomplete="address-level1"
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="postal-code" class="block text-sm font-medium text-gray-700">Codigo Postal</label>
                            <input type="text" name="postal-code" required id="postal-code" autocomplete="postal-code"
                                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PersonalInfo",
};
</script>
