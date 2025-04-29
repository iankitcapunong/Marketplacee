<script setup>
import { ref } from 'vue'
const drawer = ref(false)
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

    <v-navigation-drawer v-model="drawer" class="lock-scrollbar" app>
      <v-list>
        <router-link to="/Dashboard" router class="text-decoration-none text-black">
          <v-list-item>
            <v-list-item-title class="font-weight-bold">Dashboard</v-list-item-title>
          </v-list-item></router-link
        >

        <v-list-item to="/Categories" router class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Categories</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title class="font-weight-bold">Account Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style scoped></style>
