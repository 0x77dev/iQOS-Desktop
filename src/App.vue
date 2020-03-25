<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
<style>
.theme--dark,
.v-application,
.theme--dark.v-application,
.v-application--wrap,
.v-content,
.v-content__wrap,
#app {
  background: #12121259;
}
</style>
