<template>
  <div class="home">
    {{ iqos }}
    <v-butn @click="$store.commit('start')">Start</v-butn>
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
