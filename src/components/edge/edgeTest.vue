<template>
  <div class="edge">
    <h3>next</h3>
    <p>$root</p>
    <p>$parent</p>
    <p>$ref</p>
    <p>provide 和 inject</p>
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
