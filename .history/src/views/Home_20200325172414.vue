<template>
  <div class="home">
    {{ searchingForDevice }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState([
    ])
  }
};
</script>
