<template>
  <div>
    <h1>Room ID: {{ id }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
