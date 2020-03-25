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
    ...mapState({
      // стрелочные функции могут сделать код очень кратким
      count: state => state.count,

      // передача строки 'count' аналогична записи `state => state.count`
      countAlias: "count",
    })
  }
};
</script>
