<script setup>
import { ref, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

const activeItem = ref('Account info')
const items = ['Account info', 'My order', 'My address', 'Change password']

function selectItem(item) {
  activeItem.value = item
}

import ManggoImg from '@/assets/images/Manggo.jpeg'
</script>

<template>
  <v-app>
    <v-app-bar app color="green-lighten-4" dark></v-app-bar>

    <v-container fluid style="background-color: beige; min-height: 100vh">
      <v-row class="pa-6 pt-15 mt-10">
        <v-col cols="12" md="4">
          <v-card class="pa-4" elevation="2">
            <v-avatar size="100" class="mx-auto mb-4">
              <v-img src="" alt="Profile photo" />
            </v-avatar>
            <div class="text-center font-weight-bold text-h6">Kathleen Demain</div>
            <div class="text-center grey--text mb-4"></div>

            <v-divider class="mb-2"></v-divider>

            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item"
                @click="selectItem(item)"
                :class="{ 'bg-green text-white': activeItem === item }"
                class="rounded"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12 pt-2" md="8">
          <!-- Account Info -->
          <v-card v-if="activeItem === 'Account info'" class="pa-6" elevation="2">
            <h2 class="mb-6">Account Info</h2>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="firstName" label="First Name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  label="Email Address"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="phone" label="Phone Number (Optional)"></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="green" class="mt-4" large>Save</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.bg-green {
  background-color: #4caf50 !important;
}
.text-white {
  color: white !important;
}
* {
  font-family: 'Arial';
}
</style>
