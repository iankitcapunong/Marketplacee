<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
</script>

<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="pa-4" elevation="2">
            <v-row>
              <!-- Sidebar -->
              <v-col cols="12" md="4" class="border-e pa-4 text-center">
                <v-avatar size="120" class="mx-auto mb-4">
                  <v-img src="/path-to-your-image.png" alt="Profile" />
                </v-avatar>
                <h3 class="font-weight-medium">Kathleen Demain</h3>
                <p class="text-grey">swoo@gmail.com</p>

                <v-list dense nav class="mt-6">
                  <v-list-item class="bg-green text-white rounded mb-2">
                    <v-list-item-title>Account Info</v-list-item-title>
                    <v-icon end>mdi-chevron-right</v-icon>
                  </v-list-item>
                  <v-list-item class="rounded mb-2">
                    <v-list-item-title>My order</v-list-item-title>
                    <v-icon end>mdi-chevron-right</v-icon>
                  </v-list-item>
                  <v-list-item class="rounded mb-2">
                    <v-list-item-title>My address</v-list-item-title>
                    <v-icon end>mdi-chevron-right</v-icon>
                  </v-list-item>
                  <v-list-item class="rounded">
                    <v-list-item-title>Change password</v-list-item-title>
                    <v-icon end>mdi-chevron-right</v-icon>
                  </v-list-item>
                </v-list>
              </v-col>

              <!-- Main Form -->
              <v-col cols="12" md="8" class="pa-4">
                <h2 class="text-h6 font-weight-medium mb-4">Account Info</h2>
                <v-form>
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-text-field label="First Name" v-model="firstName" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field label="Last Name" v-model="lastName" required></v-text-field>
                    </v-col>
                  </v-row>

                  <v-text-field label="Email Address" v-model="email" required></v-text-field>

                  <v-text-field label="Phone Number (Optional)" v-model="phone"></v-text-field>

                  <v-btn color="green" class="mt-4" dark>Save</v-btn>
                </v-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.text-grey {
  color: #6b7280;
}
.border-e {
  border-right: 1px solid #eee;
}
</style>
