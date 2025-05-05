<script setup>
import { ref, computed, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client (use your actual URL and public API key)
const supabase = createClient(
  'https://jnqsnahipnolhgkedpjw.supabase.co', // Replace with your actual Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucXNuYWhpcG5vbGhna2VkcGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4OTczMzAsImV4cCI6MjA1ODQ3MzMzMH0.BEo-R_j5GY0l3754DvctK_c83ugRzpu7yV_sNB3skdg', // Replace with your actual Supabase anonymous API key
)

// State variables
const selectedCategory = ref(null)
const categories = ['Vegetables', 'Fish', 'Meat', 'Fruits']
const products = ref([])
const cart = ref([]) // Cart to hold selected products

// Fetch products from Supabase
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from('products') // Assuming 'products' is your table name
    .select('id, name, price, image_url, type') // Ensure these columns exist in your table

  if (error) {
    console.error('Error fetching products:', error)
  } else {
    products.value = data
  }
}

// Fetch products on component mount
onMounted(() => {
  fetchProducts()
})

// Filter products based on the selected category
const filteredProducts = computed(() => {
  return selectedCategory.value
    ? products.value.filter((product) => product.type === selectedCategory.value)
    : products.value
})

// Handle category selection
const selectCategory = (category) => {
  selectedCategory.value = category
}

// Add product to cart
const addToCart = (product) => {
  cart.value.push(product)
  alert(`${product.name} added to your cart!`)
}
</script>

<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="green-lighten-4" dark>
      <v-app-bar-nav-icon />
      <v-text-field
        hide-details
        flat
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        placeholder="Search anything..."
        class="mx-4"
      />
      <v-spacer />
      <v-avatar color="white">
        <span class="text-black font-weight-bold">KD</span>
      </v-avatar>
    </v-app-bar>

    <!-- Sidebar Navigation -->
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/Dashboard" class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-group>
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
            :class="{ 'bg-green-lighten-1 text-white': selectedCategory === category }"
          >
            <v-list-item-title>{{ category }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid style="background-color: beige; min-height: 100vh">
        <v-row class="pa-4 rounded-shaped">
          <v-col cols="12">
            <h1 v-if="!selectedCategory" class="text-h4 font-weight-bold mb-4">
              MOST BUY IN STORE
            </h1>
            <h1 v-else class="text-h4 font-weight-bold mb-4">{{ selectedCategory }}</h1>

            <v-row>
              <!-- Display Products -->
              <v-col v-for="(product, index) in filteredProducts" :key="index" cols="12" md="3">
                <v-card class="pa-4 text-center rounded-shaped" style="cursor: pointer">
                  <v-img :src="product.image_url" height="100" contain />
                  <div class="font-weight-bold mt-2">{{ product.name }}</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱{{ product.price }}</div>
                  <div>Butuan City, PH-13</div>

                  <!-- Buy Button -->
                  <v-btn @click="addToCart(product)" color="green" class="mt-2">Buy</v-btn>
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
