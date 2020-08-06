<template>
  <!-- eslint-disable -->
  <div>
    child
  </div>
</template>

<script>
// import grandChild from "./grandChild.vue";
export default {
  props: ["title"],
  // props: ["title", "message"],
  data() {
    return {
      user: {
        firstName: "FIRSTNAME",
        lastName: "LASTNAME"
      }
    };
  }
  // components: {
  //   grandChild
  // },
  // created: function() {
  //   this.$emit("metone", "子组件触发了事件");
  // }
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
</style>
