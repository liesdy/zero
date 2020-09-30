<template>
  <!-- eslint-disable -->
  <div>
    thunkify 核心源码
    <br>
    <br>
    <br>
    <pre>
      function thunkify(fn) {
        return function() {
          var args = new Array(arguments.length);
          var ctx = this;

          for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
          }

          return function (done) {
            var called;

            args.push(function () {
              if (called) return;
              called = true;
              done.apply(null, arguments);
            });

            try {
              fn.apply(ctx, args);
            } catch (err) {
              done(err);
            }
          }
        }
      };
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
  methods: {},
  mounted() {
    function thunkify(fn) {
      return function() {
        var args = new Array(arguments.length);
        var ctx = this;

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }
        console.log("args0: ", args);
        return function(done) {
          var called;

          args.push(function() {
            if (called) return;
            called = true;
            done.apply(null, arguments);
          });
          console.log("args1: ", args);
          try {
            fn.apply(ctx, args);
          } catch (err) {
            done(err);
          }
        };
      };
    }
    function f(a, b, callback) {
      var sum = a + b;
      callback(sum);
      callback(sum);
    }
    var ft = thunkify(f); // 第一步，先传入fn，thunkify将fn转换为一个接受参数的方法ft
    var print = console.log.bind(console);
    ft(1, 2)(print); // 结果为 3     因为thunkify内部的called变量控制了其只允许回调函数执行一次
    // 为方便黎姐，上面这一步可以拆分为
    // 第二步，ft方法传入参数1和2。得到一个ft2
    // var ft2 = ft(1, 2)
    // 第三步将回调函数print传入ft2并执行
    // ft2(print) 得到结果3
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
</style>
