<template>
  <!-- eslint-disable -->
  <div>
    generator 异步，每个异步操作通过回调来实现下一步操作
    <br>
    <br>
    <br>
    <pre>
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
    </pre>
    具体结果查看F12
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
