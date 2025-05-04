<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const categoriesOpen = ref(false)
const selectedCategory = ref(null)
const selectedProduct = ref(null)
const quantity = ref(1)

const selectCategory = (category) => {
  selectedCategory.value = category
}

const viewProduct = (product) => {
  selectedProduct.value = product
  quantity.value = 1
}

const closeProductView = () => {
  selectedProduct.value = null
}

const incrementQty = () => {
  quantity.value++
}

const decrementQty = () => {
  if (quantity.value > 1) quantity.value--
}

// Images
import sayoteImg from '@/assets/images/sayote.jpeg'
import pinyaImg from '@/assets/images/pinya.jpeg'
import sagingImg from '@/assets/images/saging.jpeg'
import chickenImg from '@/assets/images/chicken.jpeg'
import porkchopsImg from '@/assets/images/porkchops.png'
import melonImg from '@/assets/images/melon.jpeg'
import porkbellyImg from '@/assets/images/porkbelly.jpeg'
import dilisImg from '@/assets/images/dilis.jpeg'
import fishImg from '@/assets/images/fish.jpeg'
import tunaImg from '@/assets/images/tuna.jpg'
import tilapiaImg from '@/assets/images/tilapia.jpeg'
import galungongImg from '@/assets/images/galungong.png'
import sapsapImg from '@/assets/images/sapsap.png'
import tambakolImg from '@/assets/images/tambakol.jpeg'
import tambanImg from '@/assets/images/tamban.png'
import cabbageImg from '@/assets/images/cabbage.jpeg'
import carrrotImg from '@/assets/images/carrrot.jpeg'
import patatasImg from '@/assets/images/patatas.jpeg'
import PechayImg from '@/assets/images/Pechay.jpeg'
import luyaImg from '@/assets/images/luya.jpeg'
import kalabasaImg from '@/assets/images/kalabasa.jpeg'
import whiteradishImg from '@/assets/images/whiteradish.jpeg'
import drumstickImg from '@/assets/images/drumstick.jpeg'
import beefImg from '@/assets/images/beef.jpeg'
import chickenwingsImg from '@/assets/images/chickenwings.jpg'
import spareribsImg from '@/assets/images/spareribs.jpg'
import breastImg from '@/assets/images/breast.jpg'
import ManggoImg from '@/assets/images/Manggo.jpeg'
import tomatowhiteImg from '@/assets/images/tomatowhite.jpeg'
import rambutanImg from '@/assets/images/rambutan.png'
import appolImg from '@/assets/images/appol.png'
import mangosteenImg from '@/assets/images/mangosteen.jpeg'

const categories = ['Vegetables', 'Fish', 'Meat', 'Fruits']

const products = {
  all: [
    { name: 'Sayote', price: 10, image: sayoteImg, type: 'Vegetables' },
    { name: 'Pineapple', price: 160, image: pinyaImg, type: 'Fruits' },
    { name: 'Banana (LAKATAN)', price: 50, image: sagingImg, type: 'Fruits' },
    { name: 'Chicken', price: 260, image: chickenImg, type: 'Meat' },
    { name: 'Watermelon', price: 50, image: melonImg, type: 'Fruits' },
    { name: 'Pork Chops', price: 200, image: porkchopsImg, type: 'Meat' },
    { name: 'Pork Belly', price: 300, image: porkbellyImg, type: 'Meat' },
    { name: 'Dilis', price: 100, image: dilisImg, type: 'Fish' },
    { name: 'Milk Fish', price: 120, image: fishImg, type: 'Fish' },
    { name: 'Tuna', price: 170, image: tunaImg, type: 'Fish' },
    { name: 'Tilapia', price: 150, image: tilapiaImg, type: 'Fish' },
    { name: 'Galungong', price: 100, image: galungongImg, type: 'Fish' },
    { name: 'Sapsap', price: 250, image: sapsapImg, type: 'Fish' },
    { name: 'Tambakol', price: 200, image: tambakolImg, type: 'Fish' },
    { name: 'Tamban', price: 200, image: tambanImg, type: 'Fish' },
    { name: 'Cabbage', price: 26, image: cabbageImg, type: 'Vegetables' },
    { name: 'Carrots', price: 75, image: carrrotImg, type: 'Vegetables' },
    { name: 'Potato', price: 150, image: patatasImg, type: 'Vegetables' },
    { name: 'Pechay', price: 50, image: PechayImg, type: 'Vegetables' },
    { name: 'Ginger', price: 70, image: luyaImg, type: 'Vegetables' },
    { name: 'Kalabasa', price: 50, image: kalabasaImg, type: 'Vegetables' },
    { name: 'White Radish', price: 50, image: whiteradishImg, type: 'Vegetables' },
    { name: 'Chicken Drumstick', price: 150, image: drumstickImg, type: 'Meat' },
    { name: 'Beef', price: 370, image: beefImg, type: 'Meat' },
    { name: 'Chicken Wings', price: 150, image: chickenwingsImg, type: 'Meat' },
    { name: 'Pork Spare Ribs', price: 320, image: spareribsImg, type: 'Meat' },
    { name: 'Chicken Breast', price: 120, image: breastImg, type: 'Meat' },
    { name: 'Manggo', price: 120, image: ManggoImg, type: 'Fruits' },
    { name: 'Tomato', price: 70, image: tomatowhiteImg, type: 'Fruits' },
    { name: 'Rambutan', price: 80, image: rambutanImg, type: 'Fruits' },
    { name: 'Apple', price: 160, image: appolImg, type: 'Fruits' },
    { name: 'Mangosteen', price: 120, image: mangosteenImg, type: 'Fruits' },
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
      />
      <v-spacer />
      <v-avatar color="white">
        <span class="text-black font-weight-bold">KD</span>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
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

    <v-main>
      <v-container fluid style="background-color: beige; min-height: 100vh">
        <v-row class="pa-4 rounded-shaped">
          <v-col cols="12">
            <h1 v-if="!selectedCategory" class="text-h4 font-weight-bold mb-4">
              MOST BUY IN STORE
            </h1>
            <h1 v-else class="text-h4 font-weight-bold mb-4">{{ selectedCategory }}</h1>

            <v-row>
              <template v-if="!selectedCategory">
                <v-col
                  v-for="(product, index) in products.all.slice(0, 8)"
                  :key="index"
                  cols="12"
                  md="3"
                >
                  <v-card
                    class="pa-4 text-center rounded-shaped"
                    @click="viewProduct(product)"
                    style="cursor: pointer"
                  >
                    <v-img :src="product.image" height="100" contain />
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
                  <v-card
                    class="pa-4 text-center rounded-shaped"
                    @click="viewProduct(product)"
                    style="cursor: pointer"
                  >
                    <v-img :src="product.image" height="100" contain />
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

        <v-dialog v-model="selectedProduct" fullscreen transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar flat>
              <v-btn icon @click="closeProductView"><v-icon>mdi-close</v-icon></v-btn>
              <v-toolbar-title>{{ selectedProduct?.name }}</v-toolbar-title>
            </v-toolbar>

            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-img :src="selectedProduct?.image" height="300" contain />
                </v-col>
                <v-col cols="12" md="6">
                  <h2 class="text-h4 font-weight-bold mb-2">₱{{ selectedProduct?.price }}</h2>
                  <p>Fresh and locally sourced product.</p>
                  <v-icon color="green" class="mr-1">mdi-check-circle</v-icon> In stock

                  <v-divider class="my-4" />

                  <div class="mb-2 font-weight-bold">Qty</div>
                  <v-btn icon @click="decrementQty"><v-icon>mdi-minus</v-icon></v-btn>
                  <span class="mx-2 text-h6">{{ quantity }}</span>
                  <v-btn icon @click="incrementQty"><v-icon>mdi-plus</v-icon></v-btn>

                  <v-btn color="green" class="mt-4 ml-7 mb-4" large>Buy</v-btn>

                  <p class="mt-4 text-caption">Guaranteed Safe Checkout</p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
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
