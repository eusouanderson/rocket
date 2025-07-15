<template>
  <v-container class="py-10 mt-300">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center text-h4 mb-6">Salas</h1>
      </v-col>

      <v-col
        v-for="room in rooms"
        :key="room.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
      >
        <router-link :to="`/rooms/${room.id}`" class="text-decoration-none">
          <v-card class="pa-4" color="grey-darken-3" variant="flat" rounded="xl" hover>
            <v-card-title class="text-white text-center justify-center">
              {{ room.name }}
            </v-card-title>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
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
