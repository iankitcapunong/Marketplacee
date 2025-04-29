<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { ref } from 'vue'

const formDataDefault = {
  Name: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const formData = ref({ ...formDataDefault })

const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)

const refVform = ref()

const onSubmit = () => {
  alert('Form submitted: ' + JSON.stringify(formData.value))
}

const onFormSubmit = () => {
  refVform.value?.validate().then(({ valid }) => {
    if (valid) onSubmit()
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
        <v-card class="mx-auto mt-13 card-2" elevation="16" max-width="500">
          <v-card-item class="text-center pt-2">
            <v-card-title class="font-weight-black">Marketplace</v-card-title>
            <v-card-subtitle class="font-weight-light">CREATE ACCOUNT</v-card-subtitle>
          </v-card-item>

          <v-form ref="refVform" @submit.prevent="onFormSubmit">
            <div class="text-subtitle-1 text-medium-emphasis">Name</div>
            <v-text-field
              v-model="formData.Name"
              density="compact"
              variant="outlined"
              :rules="[requiredValidator]"
            />

            <div class="text-subtitle-1 text-medium-emphasis">Email</div>
            <v-text-field
              v-model="formData.email"
              density="compact"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              :rules="[requiredValidator, emailValidator]"
            />

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between text-green"
            >
              Password
            </div>
            <v-text-field
              v-model="formData.password"
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              prepend-inner-icon="mdi-lock-outline"
              :type="isPasswordVisible ? 'text' : 'password'"
              density="compact"
              placeholder="*******"
              variant="outlined"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
              :rules="[requiredValidator, passwordValidator]"
            />

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between text-green"
            >
              Confirm Password
            </div>
            <v-text-field
              v-model="formData.password_confirmation"
              :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off' : 'mdi-eye'"
              prepend-inner-icon="mdi-lock-outline"
              :type="isPasswordConfirmVisible ? 'text' : 'password'"
              density="compact"
              placeholder="*******"
              variant="outlined"
              @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
              :rules="[
                requiredValidator,
                confirmedValidator(formData.password_confirmation, formData.password),
              ]"
            />

            <v-btn class="mt-4" color="green" size="default" variant="tonal" block type="submit">
              Create
            </v-btn>
          </v-form>

          <v-card-text class="text-center text">
            Already user?
            <router-link to="/" class="text-green text-decoration-none">
              Log In <v-icon icon="mdi-chevron-right" />
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
.card-2 {
  border-radius: 25px;
  padding: 25px;
  background-color: gainsboro;
}
.text {
  font-size: small;
}
</style>
