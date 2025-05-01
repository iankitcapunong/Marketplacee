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

const selectedCategory = ref(null)
const categories = ['Vegetables', 'Fish', 'Meat', 'Fruits']

const selectCategory = (category) => {
  selectedCategory.value = category
}

const products = {
  all: [
    { name: 'SAYOTE', price: 10, image: sayoteImg, type: 'Vegetables' },
    { name: 'PINEAPPLE', price: 160, image: pinyaImg, type: 'Fruits' },
    { name: 'BANANA (LAKATAN)', price: 50, image: sagingImg, type: 'Fruits' },
    { name: 'Chicken', price: 260, image: chickenImg, type: 'Meat' },
    { name: 'Watermelon', price: 50, image: melonImg, type: 'Fruits' },
    { name: 'Pork Chops', price: 200, image: porkchopsImg, type: 'Meat' },
    { name: 'Pork Belly', price: 300, image: porkbellyImg, type: 'Meat' },
    { name: 'Dilis', price: 100, image: dilisImg, type: 'Fish' },
  ],
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
        <v-row class="pa-4">
          <v-col cols="12">
            <h1 v-if="!selectedCategory" class="text-h4 font-weight-bold mb-4">
              MOST BUY IN STORE
            </h1>
            <h1 v-else class="text-h4 font-weight-bold mb-4">{{ selectedCategory }}</h1>

            <v-row>
              <template v-if="!selectedCategory">
                <v-col v-for="(product, index) in products.all" :key="index" cols="12" md="3">
                  <v-card class="pa-4 text-center">
                    <v-img :src="product.image" height="100" contain></v-img>
                    <div class="font-weight-bold mt-2">{{ product.name }}</div>
                    <div>Per Kilo</div>
                    <div class="text-h6 font-weight-bold">₱{{ product.price }}</div>
                    <div>Butuan City, PH-13</div>
                  </v-card>
                </v-col>
              </template>

              <template v-else>
                <v-col
                  v-for="(product, index) in products.all.filter(
                    (p) => p.type === selectedCategory,
                  )"
                  :key="index"
                  cols="12"
                  md="3"
                >
                  <v-card class="pa-4 text-center">
                    <v-img :src="product.image" height="100" contain></v-img>
                    <div class="font-weight-bold mt-2">{{ product.name }}</div>
                    <div>Per Kilo</div>
                    <div class="text-h6 font-weight-bold">₱{{ product.price }}</div>
                    <div>Butuan City, PH-13</div>
                  </v-card>
                </v-col>
              </template>
            </v-row>
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
