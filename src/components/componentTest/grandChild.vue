<template>
  <!-- eslint-disable -->
  <div>
    <p>以下是孙组件</p>
    <p>这是从最顶层继承下来的属性message:{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["message"],
  // props: ["title", "message"],
  data() {
    return {
      mag: "111"
    };
  },
  created: function() {
    // console.log('this.$attrs: ', this.$attrs)
    this.$emit("mettwo", "孙组件触发了事件");
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
div {
  padding: 20px;
}
</style>
