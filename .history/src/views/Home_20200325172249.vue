<template>
  <div class="home">
    {{ searchingForDevice }}
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Home",
  computed: {
    searchingForDevice() {
      return store.sta
    }
  }
};
</script>
