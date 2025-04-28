<script setup>
const categories = ['Vegetables', 'Fish', 'Meat', 'Fruits', 'Spices']
</script>

<template>
  <v-app>
    <!-- Top Green Bar -->
    <v-app-bar color="green" density="comfortable">
      <v-container class="d-flex align-center">
        <v-text-field
          class="ml-4"
          placeholder="Search anything..."
          variant="solo-filled"
          density="comfortable"
          hide-details
          append-inner-icon="mdi-magnify"
        />
        <v-spacer />
        <v-avatar color="white" size="40">
          <span class="text-black font-weight-bold">KD</span>
        </v-avatar>
      </v-container>
    </v-app-bar>

    <!-- Today's Pick Section -->
    <v-container class="mt-10">
      <h2 class="text-h5 font-weight-bold mb-4">TODAY'S PICK</h2>
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="overflow-hidden" height="250px">
            <v-img src="/images/farmer.jpeg" cover height="100%">
              <v-container fill-height fluid class="d-flex align-end pa-4">
                <div class="text-white">
                  <h3>Fresh Tomato</h3>
                  <div>SALE UP TO <span class="text-green font-weight-bold">50% OFF</span></div>
                  <v-btn class="mt-2" color="white" variant="text">BUY NOW</v-btn>
                </div>
              </v-container>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="overflow-hidden" height="250px">
            <v-img
              src="https://images.unsplash.com/photo-1600478892189-0418f1083ed2?auto=format&fit=crop&w=800&q=60"
              cover
              height="100%"
            >
              <v-container fill-height fluid class="d-flex align-end pa-4">
                <div class="white--text">
                  <h3>Chicken Eggs</h3>
                  <div>Fresh from farm</div>
                  <v-btn class="mt-2" color="white" text>SHOP NOW</v-btn>
                </div>
              </v-container>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- Popular Categories -->
      <h2 class="text-h5 font-weight-bold mt-10 mb-4">POPULAR CATEGORIES</h2>
      <v-row justify="center" dense>
        <v-col v-for="(category, index) in categories" :key="index" cols="auto">
          <v-btn color="green" class="text-white">
            {{ category }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.white--text {
  color: white;
}
</style>
