<template>
  <!-- eslint-disable -->
  <div>
    1111
    result: {{ result }}
  </div>
</template>

<script>
// import grandChild from "./grandChild.vue";
export default {
  props: ["title"],
  // props: ["title", "message"],
  data() {
    let vm = this;
    return {
      a1: {
        b1: "1",
        b2: "1",
        b3: {
          c1: "1",
          c2: "1"
        },
        b4: {
          c1: "1",
          c2: "1"
        }
      },
      a2: {
        b1: "1",
        b2: "1",
        b3: {
          c1: "1",
          c2: "2"
        },
        b4: {
          c1: "1",
          c2: "2"
        }
      },
      result: null,
      compareObj: {
        // 比较两个对象是否相等
        compare: function(oldData, newData) {
          // 类型为基本类型时,如果相同,则返回true
          if (oldData === newData) return true;
          if (
            vm.compareObj.isObject(oldData) &&
            vm.compareObj.isObject(newData) &&
            Object.keys(oldData).length === Object.keys(newData).length
          ) {
            // 类型为对象并且元素个数相同
            // 遍历所有对象中所有属性,判断元素是否相同
            for (const key in oldData) {
              if (oldData.hasOwnProperty(key)) {
                if (!vm.compareObj.compare(oldData[key], newData[key])) {
                  // 对象中具有不相同属性 返回false
                  return false;
                }
              }
            }
          } else if (
            vm.compareObj.isArray(oldData) &&
            vm.compareObj.isArray(oldData) &&
            oldData.length === newData.length
          ) {
            // 类型为数组并且数组长度相同
            for (let i = 0, length = oldData.length; i < length; i++) {
              if (!this.compareObj.compare(oldData[i], newData[i])) {
                // 如果数组元素中具有不相同元素,返回false
                return false;
              }
            }
          } else {
            // 其它类型,均返回false
            return false;
          }
          // 走到这里,说明数组或者对象中所有元素都相同,返回true
          return true;
        },
        // 判断此类型是否是Array类型
        isObject: function(obj) {
          return Object.prototype.toString.call(obj) === "[object Object]";
        },
        // 判断此对象是否是Object类型
        isArray: function(arr) {
          return Object.prototype.toString.call(arr) === "[object Array]";
        }
      }
    };
  },
  // components: {
  //   grandChild
  // },
  // created() {},
  mounted() {
    this.result = this.compareObj.compare(this.a1, this.a2);
    console.log("this.result: ", this.result);
  }
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
</style>
