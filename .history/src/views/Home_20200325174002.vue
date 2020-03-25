<template>
  <div class="home">
    {{ iqos }}
    <v-btn @click="this.$store"></v-btn>
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
