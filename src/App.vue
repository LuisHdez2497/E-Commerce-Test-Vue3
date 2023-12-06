<template>
  <div id="app">
      <Notification/>
      <router-view></router-view>
  </div>
</template>

<script>
import Notification from './components/Notification.vue';
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
      Notification,
  },
  methods: {
      ...mapActions(['reloadCart'])
  },
  created() {
      this.reloadCart()
  },
  updated() {
      this.reloadCart()
  }

}
</script>
