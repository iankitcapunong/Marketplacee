<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const categoriesOpen = ref(false)

import sayoteImg from '@/assets/images/sayote.jpeg'
import pinyaImg from '@/assets/images/pinya.jpeg'
import sagingImg from '@/assets/images/saging.jpeg'
import chickenImg from '@/assets/images/chicken.jpeg'
import porkchopsImg from '@/assets/images/porkchops.png'
import melonImg from '@/assets/images/melon.jpeg'
import porkbellyImg from '@/assets/images/porkbelly.jpeg'
import dilisImg from '@/assets/images/dilis.jpeg'

const selectedCategory = ref()
const categories = ['Vegetables', 'Fish', 'Meat', 'Fruits']

const selectCategory = (category) => {
  selectedCategory.value = category
}
</script>

<template>
  <v-app>
    <v-app-bar app color="green-lighten-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-text-field
        hide-details
        flat
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        placeholder="Search anything..."
        class="mx-4"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-avatar color="white">
        <span class="text-black font-weight-bold">KD</span>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="scroll-lockbar">
      <v-list>
        <v-list-item to="/Dashboard" class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-group v-model="categoriesOpen">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <v-list-item-title class="font-weight-bold">Categories</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item
            v-for="(category, i) in categories"
            :key="i"
            class="text-black"
            @click="selectCategory(category)"
            :class="{
              'bg-green-lighten-1 text-white': selectedCategory === category,
            }"
          >
            <v-list-item-title>{{ category }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/AccountSettings" class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Account Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="background-color: beige; min-height: 100vh">
        <v-row v-if="!selectedCategory" class="pa-4">
          <v-col cols="12">
            <h1 class="text-h4 font-weight-bold mb-4">MOST BUY IN STORE</h1>

            <v-row>
              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="sayoteImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">SAYOTE</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱10</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="pinyaImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">PINEAPPLE</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱160</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="sagingImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">BANANA (LAKATAN)</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱50</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="chickenImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">Chicken</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱260</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="melonImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">Watermelon</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱50</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="porkchopsImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">Pork Chops</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱200</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="porkbellyImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">Pork Belly</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱300</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="dilisImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">Dilis</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱100</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>
            </v-row>

            <v-row v-if="selectedCategory === 'Vegetables'" class="mt-6">
              <v-col cols="12">
                <h2 class="text-h5 font-weight-bold mb-4">Vegetables</h2>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="pa-4 text-center">
                  <v-img :src="sayoteImg" height="100" contain></v-img>
                  <div class="font-weight-bold mt-2">SAYOTE</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱10</div>
                  <div>Butuan City, PH-13</div>
                </v-card>
              </v-col>

              <!-- Add more vegetable products here if needed -->
            </v-row>

            <v-col v-if="selectedCategory === 'Meat'" cols="12" md="3">
              <v-card class="pa-4 text-center">
                <v-img :src="beefImg" height="100" contain></v-img>
                <div class="font-weight-bold mt-2">BEEF</div>
                <div>Per Kilo</div>
                <div class="text-h6 font-weight-bold">₱350</div>
                <div>Butuan City, PH-13</div>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}

.bg-beige {
  background-color: beige;
}

* {
  font-family: 'Arial';
}
</style>
