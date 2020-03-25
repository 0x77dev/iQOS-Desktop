<template>
  <v-container class="home">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
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
                !batteryValue.holderReady ? "Ready ✅" : "Not Ready ❌"
              }}</v-card-title
            >
            <v-card-text
              >Case: {{ batteryValue.case }}%
              <v-progress-linear
                color="black"
                :value="batteryValue.case"
              ></v-progress-linear
            ></v-card-text>
          </v-card>
          <br />
          <v-card>
            <v-card-title
              >Tip 💡: You can minimize this window, you will receive
              notification.</v-card-title
            >
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
  },
  watch: {
    batteryValue(batteryValue) {
      if (batteryValue !== null) this.connecting = true;
    }
  }
};
</script>
<style></style>
