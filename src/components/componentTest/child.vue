<template>
  <!-- eslint-disable -->
  <div>
    <p>这是个h1标题{{ title }}</p>
    <!-- <p>这是个message{{ message }}</p> -->
    <p>这是个$attrs{{ $attrs }}</p>
    <p>综上，$attrs是在父作用域中绑定在组件上但没有被子组件在props中接收的属性（以键值对的方式保存在一个对象里）</p>
    <grandChild v-bind='$attrs' v-on="$listeners"></grandChild>
  </div>
</template>

<script>
import grandChild from "./grandChild.vue";
export default {
  props: ["title"],
  // props: ["title", "message"],
  data() {
    return {
      mag: "111"
    };
  },
  components: {
    grandChild
  },
  created: function() {
    // console.log('this.$attrs: ', this.$attrs)
    this.$emit("metone", "子组件触发了事件");
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
</style>
