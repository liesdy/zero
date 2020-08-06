<template>
  <div class="next">
    <h3>next</h3>
    <child></child>
  </div>
</template>

<script>
/* eslint-disable */
import child from "./child.vue";
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // }
  data() {
    return {
    }
  },
  computed: {
  },
  components: {
    child
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
