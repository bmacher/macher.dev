<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
}

.v-main {
  background-image: url(./assets/me.png);
  background-size: cover;
  background-position: 0 0;
}
</style>
