<template>
  <div class="next">
    <h3>next</h3>
    <!-- <child></child> -->
    <child2></child2>
  </div>
</template>

<script>
/* eslint-disable */
import child from "./child.vue";
import child2 from "./child2.vue";
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
    child,
    child2
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
