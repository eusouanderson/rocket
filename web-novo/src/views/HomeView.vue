<template>
  <h1 class="text-center">Salas</h1>
  <div class="text-amber-50 text-center">
    <ul class="flex gap-6">
      <li v-for="room in rooms" :key="room.id">
        <router-link
          :to="`/rooms/${room.id}`"
          class="block bg-zinc-800 m-3 p-4 rounded-3xl hover:bg-amber-50 hover:text-black transition-colors duration-300"
        >
          {{ room.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/lib/api'

const rooms = ref([])
onMounted(async () => {
  const data = await api.get('rooms').json()
  rooms.value = data
})
</script>
