<template>
  <!-- eslint-disable -->
  <div>
    generator 同步程序执行流程，有点类似于compose，先生成迭代器，然后通过递归的方式去执行迭代器
    <br>
    <br>
    <br>
    <pre>
      // 主流程
      function* longRunningTask(value1) {
        try {
          var value2 = yield step1(value1);
          var value3 = yield step2(value2);
          var value4 = yield step3(value3);
          var value5 = yield step4(value4);
          // Do something with value4
        } catch (e) {
          // Handle any error from step1 through step4
        }
      }

      // 用执行器执行迭代器
      scheduler(longRunningTask(initialValue));

      // 迭代器的执行器
      function scheduler(task) {
        // 从传入的主流程中获取迭代器
        var taskObj = task.next(task.value);
        // 如果Generator函数未结束，就继续调用
        if (!taskObj.done) {
          task.value = taskObj.value
          scheduler(task);
        }
      }
    </pre>
  </div>
</template>

<script>
// import grandChild from "./grandChild.vue";
export default {
  props: ["title"],
  // props: ["title", "message"],
  data() {
    return {
      //
    };
  },
  // components: {
  //   grandChild
  // },
  // created() {},
  mounted() {
    function* main() {
      var result0 = yield request(2);
      console.log("result: ", result0);
      var result1 = yield request(result0);
      console.log("result: ", result1);
      var result2 = yield request(result1);
      console.log("result: ", result2);
    }

    function request(num) {
      setTimeout(() => {
        it.next(num + 2);
      }, 2000);
    }

    var it = main();
    it.next();
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
</style>
