<template>
  <div class="blotter">
    <!-- eslint-disable -->
    <h1>blotter</h1>
    <div class="content">
      1 <br />
      @click.stop 阻止冒泡
      <pre>
      或者
      handleClick(e) {
        e.stopPropagation()
      }
      </pre>

      2 <br />
      作用域插槽(子组件可以方便的将属性上传到父组件中并被父组件监控到) <br />
      <br />
      3 <br />
      vnode3 <br />
      4 <br />
      4.1 计算属性必须依赖于响应式的数据（比如提前在data中注册了的数据） <br />
      4.2 this.$forceUpdate() 强制刷新模板 <br />
      5 <br />
      函数式组件与临时变量与v-slot <br />
      ============================================ <br />
      一 <br />
      v-if与v-for不要同时使用 https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8  <br />
      二 <br />
      为一个对象赋予新的多个属性 Object.assign() https://cn.vuejs.org/v2/guide/list.html <br />
      三 <br />
      条件循环（过滤或者排序的列表）推荐使用计算属性 <br />
      但是多重嵌套的循环中不能使用计算属性 ，这时候我们可以用method方法 https://cn.vuejs.org/v2/guide/list.html <br />
      具体最好详细看filter方法的用法 <br />
      四 <br />
      模板解析相关问题 is属性将特定元素塑造成组件 https://cn.vuejs.org/v2/guide/components.html#%E8%A7%A3%E6%9E%90-DOM-%E6%A8%A1%E6%9D%BF%E6%97%B6%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9 <br />
      虽说好像单文件组件（.vue）和jsx中好像没这个问题就是了 <br />
      6 <br />
      forEach
      7 <br />
       keep-alive    https://cn.vuejs.org/v2/guide/components-dynamic-async.html
    </div>
  </div>
</template>
<script>
/* eslint-disable */
</script>
<style scoped>
.blotter .content {
  text-align: left;
  width: 90%;
  margin: auto;
  font-size: 14px;
}
</style>
