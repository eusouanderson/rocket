<template>
  <v-app>
    <v-container class="max-w-3xl mt-9 mx-auto">
      <div v-if="!currentRoom">
        <h2 class="text-3xl font-bold mb-6">Salas disponíveis</h2>
        <v-list shaped>
          <v-list-item
            v-for="room in rooms"
            :key="room"
            @click="enterRoom(room)"
            class="cursor-pointer hover:bg-gray-100 rounded transition"
          >
            <v-list-item-content>
              <v-list-item-title class="text-xl font-medium">{{ room }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon color="primary">mdi-chat</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </div>

      <!-- Chat da sala -->
      <div v-else>
        <v-btn color="primary" class="mb-4" @click="leaveRoom" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h2 class="text-2xl font-semibold mb-4">Sala: {{ currentRoom }}</h2>

        <div
          ref="chatBox"
          class="border border-gray-300 rounded p-4 mb-4 h-72 overflow-y-auto bg-white shadow"
        >
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="mb-3 flex"
            :class="msg.isMine ? 'justify-end' : 'justify-start'"
          >
            <div
              class="inline-block px-4 py-2 rounded-lg max-w-3/4"
              :class="msg.isMine ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'"
            >
              {{ msg.text }}
            </div>
          </div>
        </div>

        <v-text-field
          v-model="newMessage"
          label="Digite sua mensagem"
          @keyup.enter="sendMessage"
          clearable
          outlined
          dense
          class="mb-2"
        ></v-text-field>

        <v-btn color="success" @click="sendMessage" :disabled="!newMessage.trim()" block>
          Enviar
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const rooms = ['Geral', 'Tecnologia', 'Jogos', 'Random']
const currentRoom = ref(null)
const messages = ref([])
const newMessage = ref('')

function enterRoom(room) {
  currentRoom.value = room
  // Mensagens simuladas para cada sala
  messages.value = [
    { text: `Bem-vindo à sala ${room}!`, isMine: false },
    { text: 'Esta é uma mensagem simulada.', isMine: false },
  ]
}

function leaveRoom() {
  currentRoom.value = null
  messages.value = []
  newMessage.value = ''
}

async function sendMessage() {
  if (!newMessage.value.trim()) return

  // Adiciona a mensagem como "minha"
  messages.value.push({ text: newMessage.value.trim(), isMine: true })
  newMessage.value = ''

  await nextTick()
  scrollToBottom()
}

const chatBox = ref(null)
function scrollToBottom() {
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight
  }
}
</script>

<style>
[v-cloak]::before {
  content: 'loading...';
  display: block;
  color: gray;
  font-style: italic;
  text-align: center;
  margin-top: 1rem;
}
</style>
