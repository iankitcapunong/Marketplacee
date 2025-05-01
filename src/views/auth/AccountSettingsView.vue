<script setup>
import { ref, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

const activeItem = ref('Account info')
const items = ['Account info', 'My order', 'My address', 'Change password']

function selectItem(item) {
  activeItem.value = item
}

// My Order logic
const quantity = ref(1)
const unitPrice = 120
const total = computed(() => quantity.value * unitPrice)

function increaseQty() {
  quantity.value++
}
function decreaseQty() {
  if (quantity.value > 1) quantity.value--
}

//Image import
import ManggoImg from '@/assets/images/Manggo.jpeg'
</script>

<template>
  <v-app>
    <v-app-bar app color="green-lighten-4" dark></v-app-bar>

    <v-container fluid style="background-color: beige; min-height: 100vh">
      <v-row class="pa-6 pt-15 mt-10">
        <v-col cols="12" md="4">
          <v-card class="pa-4" elevation="2">
            <v-avatar size="100" class="mx-auto mb-4">
              <v-img src="" alt="Profile photo" />
            </v-avatar>
            <div class="text-center font-weight-bold text-h6">Kathleen Demain</div>
            <div class="text-center grey--text mb-4"></div>

            <v-divider class="mb-2"></v-divider>

            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item"
                @click="selectItem(item)"
                :class="{ 'bg-green text-white': activeItem === item }"
                class="rounded"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12 pt-4" md="8">
          <!-- Account Info -->
          <v-card v-if="activeItem === 'Account info'" class="pa-6" elevation="2">
            <h2 class="mb-6">Account Info</h2>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="firstName" label="First Name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  label="Email Address"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="phone" label="Phone Number (Optional)"></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="green" class="mt-4" large>Save</v-btn>
          </v-card>

          <!-- My Order -->
          <v-card v-if="activeItem === 'My order'" class="pa-6" elevation="2">
            <h2 class="mb-6">My Order</h2>
            <v-card class="pa-4 mb-6">
              <v-row>
                <v-col cols="12" md="4">
                  <v-img :src="ManggoImg" height="100" contain />
                </v-col>
                <v-col cols="12" md="8">
                  <div class="text-subtitle-1 font-weight-bold">Mango (Per kilo)</div>
                  <div class="text-subtitle-2">₱{{ unitPrice }}</div>
                  <v-btn icon @click="decreaseQty"><v-icon>mdi-minus</v-icon></v-btn>
                  <span class="mx-2">{{ quantity }}</span>
                  <v-btn icon @click="increaseQty"><v-icon>mdi-plus</v-icon></v-btn>
                </v-col>
              </v-row>
            </v-card>

            <v-card class="pa-4 mb-4">
              <h3 class="mb-4">Order Summary</h3>
              <v-simple-table>
                <thead>
                  <tr>
                    <th class="pr-2">Item</th>
                    <th class="pl-2">Quantity</th>
                    <th class="pl-3">Unit Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mango</td>
                    <td class="pl-8">{{ quantity }}</td>
                    <td class="pl-4">₱{{ unitPrice.toFixed(2) }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
              <div class="mt-4 font-weight-bold">ORDER TOTAL: ₱{{ total.toFixed(2) }}</div>
              <v-btn color="green" class="mt-2">Checkout</v-btn>
            </v-card>

            <v-card class="pa-4">
              <h3 class="mb-2">Payment Method</h3>
              <div class="d-flex justify-space-between align-center">
                <span>Cash On Delivery</span>
                <a href="#">Change</a>
              </div>
              <div class="mt-4">
                Total Payment: <strong>₱{{ total.toFixed(2) }}</strong>
              </div>
              <v-btn color="green" class="mt-4">Place Order</v-btn>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.bg-green {
  background-color: #4caf50 !important;
}
.text-white {
  color: white !important;
}
* {
  font-family: 'Arial';
}
</style>
