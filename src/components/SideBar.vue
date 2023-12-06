<template>
    <div class="sidebar">
        <aside class="w-64 min-h-full flex" aria-label="Sidebar">
            <div class="overflow-y-auto w-full min-h-full py-4 px-3 bg-gray-800">
                <ul>
                    <li class="border-b-2 border-white">
                        <div class="flex text-center p-2 text-base font-normal rounded-lg text-white">
                            <h2 class="w-full text-2xl">E-commerce</h2>
                        </div>
                    </li>
                    <li class="mt-6">
                        <router-link to="/admin/productos" class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span class="flex-1 ml-3 text-2xl whitespace-nowrap">Productos</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/usuarios" class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span class="flex-1 ml-3 text-2xl whitespace-nowrap">Usuarios</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: "SideBar"
};
</script>
