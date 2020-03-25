<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          v-if="!connecting"
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 v-if="!connecting" class="display-2 font-weight-bold mb-3">
          iQOS Desktop
        </h1>

        <p v-if="!connecting" class="subheading font-weight-regular">
          Hey There! 👋
          <br />
          <br />
          <v-btn @click="start">Start 🔌</v-btn>
        </p>
        <v-col v-else cols="12" md="4">
          <v-skeleton-loader
            v-if="!batteryValue"
            light
            type="list-item-two-line"
          >
            Please hold bluetooth button, or hold power button until iQOS
            restarts. And then pull in (or out) your holder.
          </v-skeleton-loader>

          <v-card light v-else>
            <v-card-title
              >Holder:
              {{
                !batteryValue.holderReady ? "Ready" : batteryValue.holderReady
              }}</v-card-title
            >
            <v-card-text>Case: {{ batteryValue.case }}%</v-card-text>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return { connecting: !!this.batteryValue || false };
  },
  computed: {
    ...mapState(["batteryValue"])
  },
  methods: {
    start() {
      this.$store.commit("start");
      this.connecting = true;
    }
  }
};
</script>
<style></style>
