<template>
  <v-app-bar
    :height="scrolled ? 56 : 100"
    elevate-on-scroll
    flat
    color="white"
    class="transition-height"
    app
  >
    <v-container class="bg-amber-300 d-flex align-center px-4" fluid>
      <v-icon size="32" color="black" class="me-3">mdi-rocket-launch</v-icon>
      <v-toolbar-title
        :class="{ 'text-h6': scrolled, 'text-h4': !scrolled }"
        class="font-weight-bold black--text"
      >
        Rocket
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <nav
        class="bg-zinc-900 rounded-2xl text-amber-50 flex gap-6 px-4 py-2 select-none"
        aria-label="Primary Navigation"
      >
        <router-link
          to="/"
          class="hover:text-amber-300 transition-colors duration-300 font-semibold"
          active-class="text-amber-400 underline"
          exact
        >
          Index
        </router-link>

        <router-link
          to="/rooms"
          class="hover:text-amber-300 transition-colors duration-300 font-semibold"
          active-class="text-amber-400 underline"
        >
          Room
        </router-link>
      </nav>
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
