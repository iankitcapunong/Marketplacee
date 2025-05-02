<script setup>
import { ref } from 'vue'

const drawer = ref(false)
import tomatoImg from '@/assets/images/tomato.jpeg'
import raweggsImg from '@/assets/images/raweggs.jpeg'
const signOut = () => {
  console.log('Log In')
}
</script>

<template>
  <v-app>
    <v-app-bar app color="green-lighten-4" variant="" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-text-field
        hide-details
        flat
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        placeholder="Search anything..."
        class="mx-4"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon @click="signOut" color="white">
        <v-icon color="black">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="lock-scrollbar" app>
      <v-list>
        <v-list-item to="/Dashboard" router class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-item to="/Categories" router class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Categories</v-list-item-title>
        </v-list-item>

        <v-list-item to="/AccountSettings" router class="text-decoration-none text-black">
          <v-list-item-title class="font-weight-bold">Account Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="background-color: beige; min-height: 100vh; width: 100%">
        <h4 class="text-h5 font-weight-bold mb-4">TODAY'S PICK</h4>
        <v-row>
          <v-col cols="12 ps-11 pt-10" md="8">
            <v-card class="overflow-hidden" height="250px">
              <v-img :src="tomatoImg" cover height="100%">
                <v-container fill-height class="d-flex align-end pa-4">
                  <div class="white-text">
                    <h3>Fresh Tomato</h3>
                    <div>SALE UP TO <span class="text-green font-weight-bold">50% OFF</span></div>
                    <v-btn class="mt-2" color="white" text>View</v-btn>
                  </div>
                </v-container>
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12 pr-11 pt-10" md="4">
            <v-card class="overflow-hidden" height="250px">
              <v-img :src="raweggsImg" cover height="100%">
                <v-container fill-height class="d-flex align-end pa-4">
                  <div class="white-text">
                    <h3>Chicken Eggs</h3>
                    <div>Fresh from farm</div>
                    <v-btn class="mt-2" color="white" text>View</v-btn>
                  </div>
                </v-container>
              </v-img>
            </v-card>
          </v-col>
        </v-row>

        <h4 class="text-h5 font-weight-bold my-4">POPULAR CATEGORIES</h4>
        <v-row>
          <v-col
            cols="6"
            md="2"
            class="ml-15 pt-4 btn"
            v-for="category in ['Vegetables', 'Fish', 'Meat', 'Fruits']"
            :key="category"
          >
            <v-btn block color="green-lighten-4" class="white--text">
              {{ category }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12 ps-11 pt-10" md="8">
            <v-card class="overflow-hidden" height="250px">
              <v-img :src="tomatoImg" cover height="100%">
                <v-container fill-height class="d-flex align-end pa-4">
                  <div class="white-text">
                    <h3>Fresh Tomato</h3>
                    <div>SALE UP TO <span class="text-green font-weight-bold">50% OFF</span></div>
                    <v-btn class="mt-2" color="white" text>View</v-btn>
                  </div>
                </v-container>
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12 pr-11 pt-10" md="4">
            <v-card class="overflow-hidden" height="250px">
              <v-img :src="raweggsImg" cover height="100%">
                <v-container fill-height class="d-flex align-end pa-4">
                  <div class="white-text">
                    <h3>Chicken Eggs</h3>
                    <div>Fresh from farm</div>
                    <v-btn class="mt-2" color="white" text>View</v-btn>
                  </div>
                </v-container>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-img > .v-container {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}
.white-text {
  color: white;
  padding-top: 110px;
}
h4 {
  padding-left: 25px;
  padding-top: 30px;
}
* {
  font-family: 'Arial';
}
</style>
