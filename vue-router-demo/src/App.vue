<template>
  <!-- 路由的显示入口 -->
  <!-- 链接 -->
  <router-link to="/">首页</router-link> | 
  <router-link to="/about">关于</router-link> |
  <router-link to="/my">我的</router-link>
  <!-- 这两个页面这显示 -->
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
