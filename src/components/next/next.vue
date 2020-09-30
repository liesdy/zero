<template>
  <div class="next">
    <h3>next</h3>
    <router-link to="/next/next1">next1</router-link>
    &nbsp;
    <router-link to="/next/compareTest">compareTest</router-link>
    &nbsp;
    <router-link to="/next/generatorTest1">generatorTest1常规</router-link>
    &nbsp;
    <router-link to="/next/generatorTest2">generatorTest2同步流程</router-link>
    &nbsp;
    <router-link to="/next/thunkify">thunkify测试</router-link>
    <br />
    <br />
    <router-view />
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
