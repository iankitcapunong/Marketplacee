<script setup>
import { ref, watch, onMounted } from 'vue'

// Profile Info
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

// Save Account Info
function saveProfile() {
  const profile = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
  }
  localStorage.setItem('profile', JSON.stringify(profile))
  alert('Account info saved!')
}

// Sidebar Navigation
const activeItem = ref('Account info')
const items = ['Account info', 'My order', 'My address', 'Log out']
function selectItem(item) {
  if (item === 'Log out') {
    logout()
  } else {
    activeItem.value = item
  }
}
function logout() {
  localStorage.clear()
  alert('You have been logged out.')
  // Optional: Redirect to login or homepage
  // window.location.href = '/login'
}

// Orders
const purchases = ref([])

// Addresses
const addresses = ref([])
const showAddDialog = ref(false)
const showEditDialog = ref(false)
const tempName = ref('')
const tempPhone = ref('')
const tempDetails = ref('')
const editingIndex = ref(null)

// Load on mount
onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('profile') || '{}')
  firstName.value = stored.firstName || ''
  lastName.value = stored.lastName || ''
  email.value = stored.email || ''
  phone.value = stored.phone || ''

  const storedAddresses = localStorage.getItem('addresses')
  if (storedAddresses) {
    addresses.value = JSON.parse(storedAddresses)
  }

  const storedPurchases = localStorage.getItem('purchases')
  if (storedPurchases) {
    purchases.value = JSON.parse(storedPurchases)
  }
})

watch(
  addresses,
  (val) => {
    localStorage.setItem('addresses', JSON.stringify(val))
  },
  { deep: true },
)

watch(
  purchases,
  (val) => {
    localStorage.setItem('purchases', JSON.stringify(val))
  },
  { deep: true },
)

function openAddDialog() {
  tempName.value = ''
  tempPhone.value = ''
  tempDetails.value = ''
  showAddDialog.value = true
}

function saveNewAddress() {
  addresses.value.push({
    name: tempName.value,
    phone: tempPhone.value,
    details: tempDetails.value,
    isDefault: addresses.value.length === 0,
  })
  showAddDialog.value = false
}

function openEditDialog(index) {
  const addr = addresses.value[index]
  tempName.value = addr.name
  tempPhone.value = addr.phone
  tempDetails.value = addr.details
  editingIndex.value = index
  showEditDialog.value = true
}

function updateAddress() {
  if (editingIndex.value !== null) {
    const addr = addresses.value[editingIndex.value]
    addr.name = tempName.value
    addr.phone = tempPhone.value
    addr.details = tempDetails.value
  }
  showEditDialog.value = false
}

function setAsDefault(index) {
  addresses.value.forEach((addr, i) => {
    addr.isDefault = i === index
  })
}

function removeAddress(index) {
  if (!addresses.value[index].isDefault) {
    addresses.value.splice(index, 1)
  }
}

function removePurchase(index) {
  purchases.value.splice(index, 1)
}
</script>

<template>
  <v-app>
    <v-container fluid style="background-color: beige; min-height: 100vh">
      <v-app-bar app color="green-lighten-4" dark>
        <!-- Back to Dashboard Icon Button -->
        <v-btn icon @click="$router.push('/dashboard')" class="mb-4 pt-5">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-app-bar>
      <v-row class="pa-6 pt-15 mt-10">
        <!-- Sidebar -->
        <v-col cols="12" md="4">
          <v-card class="pa-4" elevation="2">
            <v-avatar size="100" class="mx-auto mb-4">
              <v-img src="" alt="Profile photo" />
            </v-avatar>
            <div class="text-center font-weight-bold text-h6">Kathleen Demain</div>
            <v-divider class="my-4" />
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

        <!-- Main Content -->
        <v-col cols="12" md="8">
          <!-- Account Info -->
          <v-card v-if="activeItem === 'Account info'" class="pa-6" elevation="2">
            <h2 class="mb-6">Account Info</h2>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="firstName" label="First Name" required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="lastName" label="Last Name" required />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="email" label="Email Address" type="email" required />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="phone" label="Phone Number (Optional)" />
              </v-col>
            </v-row>
            <v-btn color="green" class="mt-4" @click="saveProfile">Save</v-btn>
          </v-card>

          <!-- My Orders -->
          <v-card v-if="activeItem === 'My order'" class="pa-6" elevation="2">
            <h2 class="mb-4">My Orders</h2>
            <v-row>
              <v-col v-for="(purchase, index) in purchases" :key="index" cols="12" sm="6" md="4">
                <v-card>
                  <v-img :src="purchase.image" height="200px" class="rounded-t" cover />
                  <v-card-title>{{ purchase.name }}</v-card-title>
                  <v-card-subtitle class="text-grey">{{ purchase.date }}</v-card-subtitle>
                  <v-card-text>
                    <div>Price: ₱{{ purchase.price }}</div>
                    <div>Quantity: {{ purchase.quantity }}</div>
                    <div>Total: ₱{{ purchase.price * purchase.quantity }}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="red" text @click="removePurchase(index)">Delete</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>

          <!-- My Addresses -->
          <v-card v-if="activeItem === 'My address'" class="pa-6" elevation="2">
            <v-row justify="space-between" align="center" class="mb-4">
              <v-col cols="12" md="auto">
                <h2>My Addresses</h2>
              </v-col>
              <v-col cols="12" md="auto">
                <v-btn color="green" prepend-icon="mdi-plus" @click="openAddDialog">
                  Add New Address
                </v-btn>
              </v-col>
            </v-row>

            <v-card v-for="(addr, index) in addresses" :key="index" class="pa-4 mb-4">
              <v-row justify="space-between">
                <v-col cols="12" md="8">
                  <strong>{{ addr.name }}</strong> ({{ addr.phone }})<br />
                  <span class="text-grey">{{ addr.details }}</span>
                  <div class="mt-2">
                    <v-chip color="green" text-color="white" v-if="addr.isDefault">Default</v-chip>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="text-md-right">
                  <v-btn variant="text" color="primary" @click="openEditDialog(index)">Edit</v-btn
                  ><br />
                  <v-btn
                    variant="text"
                    color="green"
                    @click="setAsDefault(index)"
                    :disabled="addr.isDefault"
                  >
                    Set as Default </v-btn
                  ><br />
                  <v-btn
                    variant="text"
                    color="error"
                    @click="removeAddress(index)"
                    :disabled="addr.isDefault"
                  >
                    Remove
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>

            <!-- Add Dialog -->
            <v-dialog v-model="showAddDialog" max-width="500">
              <v-card>
                <v-card-title>Add New Address</v-card-title>
                <v-card-text>
                  <v-text-field v-model="tempName" label="Name" required />
                  <v-text-field v-model="tempPhone" label="Phone" required />
                  <v-textarea v-model="tempDetails" label="Address Details" required />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn text @click="showAddDialog = false">Cancel</v-btn>
                  <v-btn color="green" @click="saveNewAddress">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- Edit Dialog -->
            <v-dialog v-model="showEditDialog" max-width="500">
              <v-card>
                <v-card-title>Edit Address</v-card-title>
                <v-card-text>
                  <v-text-field v-model="tempName" label="Name" required />
                  <v-text-field v-model="tempPhone" label="Phone" required />
                  <v-textarea v-model="tempDetails" label="Address Details" required />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn text @click="showEditDialog = false">Cancel</v-btn>
                  <v-btn color="green" @click="updateAddress">Update</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
.text-grey {
  color: #757575;
}
* {
  font-family: 'Arial';
}
</style>
