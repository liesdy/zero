<template>
  <div class="home">
    <router-link to="/" v-if="!isIndex">back to index</router-link>
    <div class="view-area">
      <router-view />
    </div>
    <h3>Other tests</h3>
    <el-row>
      <el-col>
        <router-link to="date">date</router-link>&nbsp;
        <router-link to="componentTest">componentTest</router-link>&nbsp;
        <router-link to="slot">slot</router-link>&nbsp;
        <router-link to="edge">edge</router-link>&nbsp;
        <router-link to="next">next</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "examplePart",
  data() {
    return {
      isIndex: false
    };
  },
  // eslint-disable-next-line
  beforeRouteUpdate (to, from, next) {
    if (to.fullPath === "/") {
      this.isIndex = true;
      next();
    } else {
      this.isIndex = false;
      next();
    }
  }
};
</script>
<style scoped lang="scss">
.view-area {
  margin: 20px;
  height: 500px;
  border: 1px dashed #ccc;
  border-radius: 5px;
  padding: 30px;
  text-align: left;
  overflow: auto;
}
</style>
