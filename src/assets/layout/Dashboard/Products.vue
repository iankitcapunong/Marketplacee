<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Supabase Config
const supabaseUrl = 'https://jnqsnahipnolhgkedpjw.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucXNuYWhpcG5vbGhna2VkcGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4OTczMzAsImV4cCI6MjA1ODQ3MzMzMH0.BEo-R_j5GY0l3754DvctK_c83ugRzpu7yV_sNB3skdg'
const supabase = createClient(supabaseUrl, supabaseKey)

// Categories
const categories = ['Fish', 'Fruits', 'Meat', 'Vegetables']
const products = ref([])

const fetchImages = async () => {
  for (const category of categories) {
    const { data, error } = await supabase.storage
      .from('marketplace')
      .list(category, { limit: 100 })

    if (error) {
      console.error(`Error loading ${category}:`, error)
      continue
    }

    const items = data.map((file) => {
      return {
        name: file.name,
        url: `${supabaseUrl}/storage/v1/object/public/marketplace/${category}/${file.name}`,
        category,
      }
    })

    products.value.push(...items)
  }
}

onMounted(fetchImages)
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in products" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-img :src="item.url" height="200px" cover></v-img>
          <v-card-title class="text-wrap">{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.category }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
