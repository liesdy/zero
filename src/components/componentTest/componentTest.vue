<template>
  <!-- eslint-disable -->
  <div class="home">
    <child :title="title" :message="message" @metone='metone' @mettwo='mettwo'></child>
    以下是$listener的测试 <br />
    NoOne: {{ NoOne }} <br />
    NoTwo: {{ NoTwo }} <br />
    以下是关于.sync的内容 <br />
    .sync实际上是一个包括了update:myPropName在内的缩写 <br />
    .sync修饰的绑定中只能是一个变量名，而不能是表达式或者是一个字面量对象
  </div>
</template>

<script>
import child from "./child.vue";
export default {
  data() {
    return {
      title: "title1111",
      message: "message111",
      NoOne: 1,
      NoTwo: 2
    };
  },
  components: {
    child
  },
  methods: {
    metone(val) {
      this.NoOne = val;
    },
    mettwo(val) {
      this.NoTwo = val;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
</style>
