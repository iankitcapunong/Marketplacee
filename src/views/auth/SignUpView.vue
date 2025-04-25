<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="4" md="4">
        <v-img class="image">
          <img src="@/assets/images/Logo.png" width="500" alt="Logo" />
        </v-img>
      </v-col>
      <v-col cols="8" md="8">
        <v-card class="mx-auto mt-13 card-2" elevation="16" max-width="500">
          <v-card-item class="text-center pt-2">
            <v-card-title class="font-weight-black">Marketplace</v-card-title>npk
            <v-card-subtitle class="font-weight-light">CREATE ACCOUNT</v-card-subtitle>
          </v-card-item>

          <div class="text-subtitle-1 text-medium-emphasis">Name</div>

          <v-text-field density="compact" variant="outlined"></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis">Email</div>

          <v-text-field density="compact" variant="outlined"></v-text-field>
          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between text-green"
          >
            Password
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="*******"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between text-green"
          >
            Confirm Password
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="*******"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-btn class="mt-4" color="green" size="default" variant="tonal" block> Create </v-btn>

          <v-card-text class="text-center text">
            Already user?
            <router-link to="/" class="text-decoration-none">
              <a
                class="text-green text-decoration-none"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Log In <v-icon icon="mdi-chevron-right"></v-icon> </a
            ></router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.image {
  padding-top: 15%;
  padding-left: 5%;
  overflow: visible;
}
.card-2 {
  border-radius: 25px;
  padding: 25px;
  background-color: gainsboro;
}
.text {
  font-size: small;
}
</style>
