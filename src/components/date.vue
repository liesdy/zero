<template>
  <div class="date">
    <h3>date</h3>
    <el-date-picker v-model="time2" type="datetime" laceholder="选择日期时间">
    </el-date-picker>
    <br />
    <br />
    <!-- let timeStr = {{ timeStr }} <br /> -->
    <!-- let timeStr = {{ time2 }} <br /> -->
    <!-- time = new Date(timeStr.replace(/-/g,"/"));<br /> -->
    <br />
    <br />
    <!-- timeStr: {{ timeStr }}<br /> -->
    time: {{ time }} <br />
    时间戳: {{ time.getTime() }} <br />
    year: {{ time.getFullYear() }} <br />
    month: {{ time.getMonth() + 1 }} 美化版: {{ prettierMonth }} <br />
    注意：月份是获取的0-11,所以通过getMonth获得月份之后要+1才是正常的月份<br />
    当前月中的第几天: {{ time.getDate() }} 美化版: {{ prettierDate }} <br />
    hour: {{ time.getHours() }} <br />
    minite: {{ time.getMinutes() }} 美化版: {{ prettierMinutes }} <br />
    seconds: {{ time.getSeconds() }} 美化版: {{ prettierSeconds }} <br />
    重新整合成字符串：{{ newDateStr }}
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      // timeStr: '2014-03-04 10:05:04'
      // timeStr: '2019-03-13 10:05:04'
      timeStr: null,
      time2: new Date()
    }
  },
  computed: {
    time: {
      get: function () {
        if (this.timeStr) {
          return new Date(this.timeStr.replace(/-/g,"/"));
        } else {
          return this.time2
        }
      }
    },
    prettierMonth () {
      if (this.time) {
        let month = this.time.getMonth() + 1
        return month < 10 ? ('0' + month) : month
      }
    },
    prettierDate () {
      if (this.time) {
        let date = this.time.getDate()
        return date < 10 ? ('0' + date) : date
      }
    },
    prettierMinutes () {
      if (this.time) {
        let Minutes = this.time.getMinutes()
        return Minutes < 10 ? ('0' + Minutes) : Minutes
      }
    },
    prettierSeconds () {
      if (this.time) {
        let Seconds = this.time.getSeconds()
        return Seconds < 10 ? ('0' + Seconds) : Seconds
      }
    },
    newDateStr () {
      if (this.time) {
        let time = this.time
        return time.getFullYear() + '-' + this.prettierMonth + '-' + this.prettierDate + ' ' + time.getHours() + ':' + this.prettierMinutes + ':' + this.prettierSeconds
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.date {
  text-align: left;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
