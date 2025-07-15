<template>
  <v-container class="py-12 min-h-screen max-w-7xl mx-auto">
    <v-row justify="center">
      <v-col cols="12" class="mb-10">
        <h1
          class="text-center text-5xl font-extrabold bg-[#0f111a] text-transparent bg-clip-text select-none"
        >
          Salas
        </h1>
      </v-col>

      <v-col
        v-for="room in rooms"
        :key="room.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="flex justify-center"
      >
        <router-link
          :to="`/rooms/${room.id}`"
          class="w-full no-underline transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
        >
          <v-card
            class="bg-[#121822] border border-blue-600/30 shadow-md p-6 min-h-[140px] flex flex-col justify-center rounded-lg cursor-pointer"
            variant="flat"
            rounded="lg"
            elevation="4"
            hover
          >
            <v-card-title
              class="bg-[#0f111a] text-white text-center truncate font-semibold text-xl mb-1"
            >
              {{ room.name }}
            </v-card-title>
            <v-card-subtitle
              class="text-amber-300 bg-[#0f111a] text-center flex items-center justify-center gap-1 text-sm font-medium select-none"
            >
              <v-icon size="18" color="#00e0ff">mdi-calendar-clock</v-icon>
              Criado em {{ formatDate(room.createAt) }}
            </v-card-subtitle>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import api from '@/lib/api'
import { DateFormatter } from '@/utils/DateFormatter'
import { onMounted, ref } from 'vue'

const df = new DateFormatter()
const formatDate = (isoDate) => df.format(isoDate)

const rooms = ref([])

onMounted(async () => {
  const data = await api.get('rooms').json()
  rooms.value = data
})
</script>
