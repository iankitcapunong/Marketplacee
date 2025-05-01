<script setup>
import { ref } from 'vue'

const drawer = ref(true) // Default open so it pushes content
const categoriesOpen = ref(false)

const categories = ['Vegetables', 'Fish', 'Meat', 'Fruits']

const bestSellers = [
  { name: 'SAYOTE', price: 'P10', location: 'Butuan City, PH-13' },
  { name: 'PINEAPPLE', price: 'P160', location: 'Butuan City, PH-13' },
  { name: 'BANANA (LAKATAN)', price: 'P50', location: 'Butuan City, PH-13' },
]
</script>

<template>
  <v-app>
    <!-- App Bar -->
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

    <!-- Navigation Drawer -->
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

          <v-list-item v-for="(category, i) in categories" :key="i" class="text-black">
            <v-list-item-title>{{ category }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/AccountSettings" class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Account Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid style="background-color: beige; min-height: 100vh">
        <v-row class="pa-4">
          <v-col cols="12">
            <h1 class="text-h4 font-weight-bold mb-4">BEST SELLER IN THIS CATEGORY</h1>
            <v-row>
              <v-col cols="12" md="4" v-for="(item, index) in bestSellers" :key="index">
                <v-card class="pa-4" elevation="2">
                  <h3 class="text-h6 font-weight-bold">{{ item.name }}</h3>
                  <p class="text-caption">Per Kilo</p>
                  <p class="text-h5 font-weight-bold mt-2">{{ item.price }}</p>
                  <p class="text-caption mt-2">{{ item.location }}</p>
                </v-card>
              </v-col>
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
