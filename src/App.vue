<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloI18n/>
    <!-- <demo></demo> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloI18n from "./components/HelloI18n.vue";
// import demo from "./views/upload/upload.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    HelloI18n
    // demo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 90%;
  height: 80%;
}
</style>
