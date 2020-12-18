<template>
    <v-container class="container mt-0 mt-md-5">
      <v-row>
        <v-col>
          <v-btn
            color="grey"
            @click="$router.push('/')"
          >Back to Home</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h1>Disclaimer for Benjamin Macher</h1>

          <p>
            If you require any more information or have any questions about my site's
            disclaimer, please feel free to contact me at
            <a href="https://twitter.com/MacherBenjamin">Twitter</a>.
            My Disclaimer was generated with the help of the
            <a href="https://www.disclaimergenerator.net/">Disclaimer Generator</a>.
          </p>

          <h2>Disclaimers for Benjamin Macher</h2>

          <p>
            All the information on this website - https://macher.dev - is published in
            good faith and for general information purpose only. Benjamin Macher does
            not make any warranties about the completeness, reliability and accuracy of
            this information. Any action you take upon the information you find on this
            website (Benjamin Macher), is strictly at your own risk. Benjamin Macher will
            not be liable for any losses and/or damages in connection with the use of our
            website.
          </p>

          <p>
            From my website, you can visit other websites by following hyperlinks to such
            external sites. While I strive to provide only quality links to useful and ethical
            websites, I have no control over the content and nature of these sites. These
            links to other websites do not imply a recommendation for all the content found
            on these sites. Site owners and content may change without notice and may occur
            before I have the opportunity to remove a link which may have gone 'bad'.
          </p>

          <p>
            Please be also aware that when you leave our website, other sites may have different
            privacy policies and terms which are beyond my control. Please be sure to check
            the Privacy Policies of these sites as well as their "Terms of Service" before
            engaging in any business or uploading any information. My Privacy Policy was created
            by <a href="https://www.generateprivacypolicy.com/">the Privacy Policy Generator</a>.
          </p>

          <h2>Consent</h2>

          <p>By using my website, you hereby consent to our disclaimer and agree to its terms.</p>

          <h2>Update</h2>

          <p>
            Should I update, amend or make any changes to this document, those changes will be
            prominently posted here.
          </p>
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Disclaimer extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: rgba(0,0,0,.5);

  a {
    color: #2bbc8a;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
