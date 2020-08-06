<template>
  <!-- eslint-disable -->
  <div class="home">
    <h1>v-slot可以缩写为# ！！！！</h1>
    新版的插槽是在子组件中用slot标签，slot标签中的内容作为备用选项当没有内容传入插入时作为默认内容显示出来 <br />
    父组件用template标签 其中加入 v-slot:目标插槽名称 这条属性。这条属性只能用在template中 <br />
    任何没有用v-slot：具名 属性的内容其效果相当于写在了 v-slot:default 属性的 template中，会进入子组件里没有name或name为default的slot标签的插槽中 <br />
    <br />
    关于作用域插槽的作用理解 <br />
    一般情况下子组件有插槽，自定义内容则在父组件中传递进去，但当自定义内容中需要用到子组件中的数据时，父组件中写的自定义内容是访问不到子组件的数据的。这个时候，我们可以通过作用于插槽这个概念，将子组件的数据上传到父组件中，使写在父组件中的自定义内容能够正常访问到这个数据，并且插入子组件的插槽里。<br>
    父组件中的内容：<div v-text='exampleFather'></div>
    子组件中的内容：<div v-text='exampleChild'></div>
    <br />
    <br />
    <p>下面的例子，如果父作用域没拿到数据，会报错，或者显示子组件中默认的LASTNAME。如果成功则显示FIRSTNAME</p>
    <child>
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </child>
    当组件只有一个默认插槽的时候，可以放弃其中的template标签，直接把v-slot:default='slotProps'写在组件标签上。如 <br />
    <p v-text='abbreviation'></p>
    甚至
    <p v-text='abbreviation2'></p>
    不过这种写法不能和具名插槽混用，不然会爆炸。有多个插槽就老老实实用template。
    <p>PS: 想了解更多现实生活中的作用域插槽的用法，他们推荐浏览诸如 Vue Virtual Scroller、Vue Promised 和 Portal Vue 等库。</p>
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
      NoTwo: 2,
      exampleFather: `<child>
        <template v-slot:default="slotProps">
          {{ slotProps.user.firstName }}
        </template>
      </child>`,
      exampleChild: `<span>
        <slot v-bind:user="user">
          {{ user.lastName }}
        </slot>
      </span>`,
      abbreviation: `<child v-slot:default="slotProps">`,
      abbreviation2: `<child v-slot="slotProps">`
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
