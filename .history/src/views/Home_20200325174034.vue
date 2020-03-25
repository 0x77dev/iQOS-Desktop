<template>
  <div class="home">
    {{ iqos }}
    <v-button @click="$store.commit('start')">Start</v-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["iqos"])
  }
};
</script>
