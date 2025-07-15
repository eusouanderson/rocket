<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script setup>
import Navbar from './components/layout/NavbarComponent.vue'
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
