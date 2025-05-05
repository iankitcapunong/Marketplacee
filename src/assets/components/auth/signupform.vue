<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { ref } from 'vue'
import { supabase, formActionDefault } from '@/utils/supabase'

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
  <v-alert
    v-if="formAction.formSuccessMessage"
    :text="formAction.formSuccessMessage"
    title="Success!"
    type="success"
    variant="tonal"
    density="compact"
    borders="start"
    closable
  ></v-alert>
  <v-alert
    v-if="formAction.formErrorMessage"
    :text="formAction.formErrorMessage"
    title="Ooops!"
    type="error"
    variant="tonal"
    density="compact"
    borders="start"
    closable
  ></v-alert>
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

    <v-btn
      class="mt-4"
      color="green"
      size="default"
      variant="tonal"
      block
      type="submit"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
    >
      Create
    </v-btn>
  </v-form>
</template>
