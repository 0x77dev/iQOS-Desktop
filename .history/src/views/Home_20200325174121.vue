<template>
  <div class="home">
    {{ iqos }}
    <v-btn depressed small>Normal</v-btn>
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
