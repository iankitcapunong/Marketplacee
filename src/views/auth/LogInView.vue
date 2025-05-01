<script setup>
import { requiredValidator, emailValidator } from '@/utils/validators'
import { ref } from 'vue'

const isPasswordVisible = ref(false)
const refVform = ref()

const formDataDefault = {
  email: '',
  password: '',
}
const formData = ref({ ...formDataDefault })

const onLogin = () => {
  alert(formData.Value)
}

const onFormSubmit = () => {
  refVform.value?.validate().then(({ valid }) => {
    if (valid) onLogin()
  })
}
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
        <v-card class="mx-auto mt-16 card" elevation="16" max-width="500">
          <v-card-item class="text-center pt-6">
            <v-card-title class="font-weight-black">Marketplace</v-card-title>
            <v-card-subtitle class="font-weight-light">LOG IN TO CONTINUE</v-card-subtitle>
          </v-card-item>

          <v-form ref="refVform" @submit.prevent="onFormSubmit">
            <div class="text-subtitle-1 text-medium-emphasis pt-5">Email</div>

            <v-text-field
              v-model="formData.email"
              density="compact"
              placeholder="Email address"
              prepend-inner-icon="mdi-email-outline"
              :rules="[requiredValidator, emailValidator]"
              variant="outlined"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between text-green"
            >
              Password
            </div>

            <v-text-field
              v-model="formData.password"
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="isPasswordVisible ? 'text' : 'password'"
              density="compact"
              placeholder="Enter your password"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
              :rules="[requiredValidator]"
            ></v-text-field>
            <router-link to="/Dashboard" class="text-decoration-none">
              <v-btn
                class="mt-4"
                color="green"
                size="default"
                variant="tonal"
                block
                @click="onFormSubmit"
              >
                Log In
              </v-btn>
            </router-link>
          </v-form>

          <v-card-text class="text-center text">
            New User?
            <router-link to="/SignUp" class="text-decoration-none">
              <a
                class="text-green text-decoration-none"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
              </a>
            </router-link>
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
.card {
  border-radius: 25px;
  padding: 25px;
  margin-top: 10% !important;
  background-color: gainsboro;
}

body {
  background-color: beige;
}
.text {
  font-size: small;
}
* {
  font-family: 'Arial';
}
</style>
