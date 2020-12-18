<template>
  <div class="container">
    <v-container>
      <v-row>
        <v-col cols="5"></v-col>

        <v-col cols="3">
          <v-card
            dark
            class="my-12"
            max-width="500"
            color="rgb(0, 0, 0, 0.4)"
          >
            <v-card-title class="text-h2 font-weight-bold">Hi</v-card-title>

            <v-card-text class="pb-0">
              <p class="mb-5 text-h4">I'm Benjamin, </p>

              <p class="text-h6">
                a technophile currently living in the wonderful city
                <a target="_blank" href="https://www.dresden.de/en/tourism/tourism.php">Dresden</a>
                (Germany). I work as a Cloud Developer for Volkswagen, mostly working with AWS.
                Huge ♥ for TypeScript, Node.js, VS Code and especially Vue.js.
              </p>

              <p class="mb-0 text-h6">
                You can message me at
                <a href="https://twitter.com/MacherBenjamin">@MacherBenjamin</a>.
              </p>
            </v-card-text>

            <v-card-actions>
              <v-container>
                <v-row justify="center">
                  <v-col class="d-flex pb-0">
                    <v-btn
                      icon
                      x-large
                      class="ma-auto"
                      href="https://github.com/bmacher/"
                    >
                      <v-icon x-large>mdi-github</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex pb-0">
                    <v-btn
                      icon
                      x-large
                      class="ma-auto"
                      href="https://www.linkedin.com/in/benjamin-macher-09a339119/"
                    >
                      <v-icon x-large>mdi-linkedin</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex pb-0">
                    <v-btn
                      icon
                      x-large
                      class="ma-auto"
                      href="https://medium.com/@bmacher"
                    >
                      <v-icon x-large>mdi-blogger</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  a {
    color: #2bbc8a;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
