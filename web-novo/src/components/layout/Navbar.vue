<template>
  <v-app-bar
    :height="scrolled ? 56 : 100"
    elevate-on-scroll
    flat
    color="white"
    class="transition-height"
    app
  >
    <v-container class="d-flex align-center px-4" fluid>
      <v-icon size="32" color="black" class="me-3"> mdi-rocket-launch </v-icon>
      <v-toolbar-title
        :class="{ 'text-h6': scrolled, 'text-h4': !scrolled }"
        class="font-weight-bold black--text"
      >
        Rocket
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Aqui você pode adicionar botões, links, menu hambúrguer, etc -->
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.transition-height {
  transition: height 0.3s ease;
}
</style>
