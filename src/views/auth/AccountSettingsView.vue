<script setup>
import { ref, watch, onMounted } from 'vue'

// Profile Info
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

const activeItem = ref('Account info')
const items = ['Account info', 'My order', 'My address']

function selectItem(item) {
  activeItem.value = item
}

// Address Management
const addresses = ref([])

onMounted(() => {
  const stored = localStorage.getItem('addresses')
  if (stored) {
    addresses.value = JSON.parse(stored)
  } else {
    addresses.value = [
      {
        name: 'Kathleen Demain',
        phone: '+1 0231 4554 452',
        details: 'Unit 5, Purok 7, Brgy. Ambago, Butuan City, Agusan del Norte, 8600 Philippines',
        isDefault: true,
      },
    ]
  }
})

watch(
  addresses,
  (newVal) => {
    localStorage.setItem('addresses', JSON.stringify(newVal))
  },
  { deep: true },
)

const showAddDialog = ref(false)
const showEditDialog = ref(false)

const tempName = ref('')
const tempPhone = ref('')
const tempDetails = ref('')
const editingIndex = ref(null)

function openAddDialog() {
  tempName.value = ''
  tempPhone.value = ''
  tempDetails.value = ''
  showAddDialog.value = true
}

function openEditDialog(index) {
  const addr = addresses.value[index]
  tempName.value = addr.name
  tempPhone.value = addr.phone
  tempDetails.value = addr.details
  editingIndex.value = index
  showEditDialog.value = true
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

function updateAddress() {
  const index = editingIndex.value
  if (index !== null) {
    addresses.value[index].name = tempName.value
    addresses.value[index].phone = tempPhone.value
    addresses.value[index].details = tempDetails.value
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
            <v-divider class="my-4"></v-divider>

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

        <v-col cols="12 pt-2" md="8">
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

          <!-- My Address -->
          <v-card v-if="activeItem === 'My address'" class="pa-6" elevation="2">
            <v-row justify="space-between" align="center" class="mb-4">
              <v-col cols="12" md="auto">
                <h2 class="mb-0">My Addresses</h2>
              </v-col>
              <v-col cols="12" md="auto">
                <v-btn color="green" prepend-icon="mdi-plus" @click="openAddDialog">
                  Add New Address
                </v-btn>
              </v-col>
            </v-row>

            <v-card v-for="(addr, index) in addresses" :key="index" class="pa-4 mb-4">
              <v-row justify="space-between" align="start">
                <v-col cols="12" md="8">
                  <div>
                    <strong>{{ addr.name }}</strong>
                    <span> ({{ addr.phone }})</span><br />
                    <span class="text-grey">{{ addr.details }}</span>
                    <div class="mt-2">
                      <v-chip color="green" text-color="white" v-if="addr.isDefault"
                        >Default</v-chip
                      >
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="text-md-right">
                  <v-btn variant="text" color="primary" class="mb-2" @click="openEditDialog(index)">
                    Edit </v-btn
                  ><br />
                  <v-btn
                    variant="text"
                    color="green"
                    class="mb-2"
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
                  <v-text-field v-model="tempName" label="Name" required></v-text-field>
                  <v-text-field v-model="tempPhone" label="Phone" required></v-text-field>
                  <v-textarea v-model="tempDetails" label="Address Details" required></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
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
                  <v-text-field v-model="tempName" label="Name" required></v-text-field>
                  <v-text-field v-model="tempPhone" label="Phone" required></v-text-field>
                  <v-textarea v-model="tempDetails" label="Address Details" required></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
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
