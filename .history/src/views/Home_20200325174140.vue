<template>
  <div class="home">
    {{ iqos }}
    <v-btn @click="" depressed small>Start</v-btn>
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
