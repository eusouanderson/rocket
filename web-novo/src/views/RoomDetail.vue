<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center">
    <v-card class="pa-4" color="grey-darken-3" variant="flat" max-width="500">
      <v-card-title class="text-h5 text-white"> Room ID: {{ id }} </v-card-title>

      <v-card-subtitle v-if="roomQuestions.length" class="text-white">
        Perguntas: {{ roomQuestions.length }}
      </v-card-subtitle>

      <v-card-actions>
        <router-link to="/">
          <v-btn color="amber" variant="elevated">Voltar para Início</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/lib/api'

const route = useRoute()
const id = route.params.id

const roomQuestions = ref([])

onMounted(async () => {
  try {
    const data = await api.get(`rooms/${id}/questions`).json()
    roomQuestions.value = data
  } catch (err) {
    console.error('Erro ao buscar perguntas:', err)
  }
})
</script>
