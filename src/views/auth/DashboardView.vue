<script setup>
import { ref } from 'vue'

const categories = [
  { name: 'Vegetables' },
  { name: 'Fish' },
  { name: 'Meat' },
  { name: 'Fruits' },
  { name: 'Spices' },
]
</script>

<template>
  <v-container fluid class="pa-0">
    <v-app-bar color="green" dark>
      <v-row class="align-center" no-gutters>
        <v-col cols="12" md="3">
          <v-select
            density="compact"
            variant="outlined"
            :items="['All Categories']"
            v-model="categories[0].name"
            hide-details
          />
        </v-col>

        <v-col cols="12" md="7">
          <v-text-field
            placeholder="Search anything..."
            prepend-inner-icon="mdi-magnify"
            hide-details
            variant="outlined"
            density="compact"
          />
        </v-col>

        <v-col cols="12" md="2" class="d-flex justify-end">
          <v-btn icon>
            <v-avatar color="white">
              <span class="text-black font-weight-bold">KD</span>
            </v-avatar>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-container class="mt-10">
      <!-- Today's Pick -->
      <h2 class="font-weight-bold mb-4">TODAY'S PICK</h2>
      <v-row dense>
        <v-col cols="12" md="8">
          <v-card class="pa-4" height="250px">
            <v-img
              src="https://images.unsplash.com/photo-1576402187878-974f34b96dba?auto=format&fit=crop&w=800&q=60"
              height="100%"
              cover
            >
              <div class="d-flex flex-column justify-end h-100 pa-4 white--text">
                <h3>Fresh Tomato</h3>
                <p>SALE UP TO <span class="text-green font-weight-bold">50% OFF</span></p>
                <v-btn color="white" text class="mt-2">BUY NOW</v-btn>
              </div>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-4" height="250px">
            <v-img
              src="https://images.unsplash.com/photo-1600478892189-0418f1083ed2?auto=format&fit=crop&w=800&q=60"
              height="100%"
              cover
            >
              <div class="d-flex flex-column justify-end h-100 pa-4 white--text">
                <h3>Chicken Eggs</h3>
                <p>Fresh from farm</p>
                <v-btn color="white" text class="mt-2">SHOP NOW</v-btn>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- Popular Categories -->
      <h2 class="font-weight-bold mt-10 mb-4">POPULAR CATEGORIES</h2>
      <v-row justify="center" dense>
        <v-col v-for="(category, index) in categories" :key="index" cols="auto">
          <v-btn color="green" class="text-white">
            {{ category.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.white--text {
  color: white;
}
</style>
