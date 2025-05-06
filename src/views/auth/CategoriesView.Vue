<script setup>
import { ref, computed, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  'https://jnqsnahipnolhgkedpjw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucXNuYWhpcG5vbGhna2VkcGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4OTczMzAsImV4cCI6MjA1ODQ3MzMzMH0.BEo-R_j5GY0l3754DvctK_c83ugRzpu7yV_sNB3skdg',
)

// State variables
const selectedCategory = ref(null)
const categories = ['Vegetables', 'Fish', 'Meat', 'Fruits']
const products = ref([])
const cart = ref([])

// Modal and quantity
const showModal = ref(false)
const selectedProduct = ref(null)
const quantity = ref(1)

// Fetch products from Supabase
const fetchProducts = async () => {
  const { data, error } = await supabase.from('products').select('id, name, price, image_url, type')
  if (error) {
    console.error('Error fetching products:', error)
  } else {
    products.value = data
  }
}

onMounted(() => {
  fetchProducts()
})

// Computed: filtered products
const filteredProducts = computed(() => {
  return selectedCategory.value
    ? products.value.filter((product) => product.type === selectedCategory.value)
    : products.value
})

// Handlers
const selectCategory = (category) => {
  selectedCategory.value = category
}

const openProductModal = (product) => {
  selectedProduct.value = product
  quantity.value = 1
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const increaseQty = () => {
  quantity.value++
}

const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--
}

const confirmPurchases = () => {
  cart.value.push({ ...selectedProduct.value, quantity: quantity.value })
  alert(`${quantity.value} x ${selectedProduct.value.name} Purchases Complete!`)
  closeModal()
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
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/system/dashboard" class="text-decoration-none text-black">
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

        <v-list-item to="/AccountSettings" class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Account Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid style="background-color: beige; min-height: 100vh">
        <v-row class="pa-4 rounded-shaped">
          <v-col cols="12">
            <h1 class="text-h4 font-weight-bold mb-4">
              {{ selectedCategory ? selectedCategory : 'MOST BUY IN STORE' }}
            </h1>

            <v-row>
              <v-col v-for="(product, index) in filteredProducts" :key="index" cols="12" md="3">
                <v-card class="pa-4 text-center rounded-shaped" style="cursor: pointer">
                  <v-img :src="product.image_url" height="100" contain />
                  <div class="font-weight-bold mt-2">{{ product.name }}</div>
                  <div>Per Kilo</div>
                  <div class="text-h6 font-weight-bold">₱{{ product.price }}</div>
                  <div>Butuan City, PH-13</div>
                  <v-btn @click="openProductModal(product)" color="green" class="mt-2">Buy</v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Product Modal -->
    <v-dialog v-model="showModal" max-width="600px">
      <v-card style="position: relative">
        <!-- Top-left close button -->
        <v-btn icon @click="closeModal" style="position: absolute; top: 8px; left: 8px; z-index: 1">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-card-text class="text-center pt-10">
          <v-img :src="selectedProduct?.image_url" height="200" contain />
          <div class="text-h6 mt-4">{{ selectedProduct?.name }}</div>
          <div class="text-h5 font-weight-bold">₱{{ selectedProduct?.price }}</div>
          <div>Affordable and Fresh</div>
          <v-chip color="green" class="mt-2">In stock</v-chip>

          <div class="mt-4">
            <div class="text-subtitle-1 mb-2">qty</div>
            <v-btn icon @click="decreaseQty"><v-icon>mdi-minus</v-icon></v-btn>
            <span class="mx-2">{{ quantity }}</span>
            <v-btn icon @click="increaseQty"><v-icon>mdi-plus</v-icon></v-btn>
          </div>

          <v-btn color="green" class="mt-4" @click="confirmPurchases">BUY</v-btn>
          <div class="mt-2 text-caption">Guaranteed Safe Checkout</div>
        </v-card-text>
      </v-card>
    </v-dialog>
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
