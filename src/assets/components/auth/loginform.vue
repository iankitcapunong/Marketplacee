<script setup>
import { requiredValidator, emailValidator } from '@/utils/validators'
import { ref } from 'vue'
const refVform = ref()

const isPasswordVisible = ref(false)

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
    <router-link to="/Dashboard">
      <v-btn class="mt-4" color="green" size="default" variant="tonal" block @click="onFormSubmit">
        Log In
      </v-btn>
    </router-link>
  </v-form>
</template>
