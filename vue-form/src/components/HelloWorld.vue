<template>
  <div class="hello">
    <input type="text" v-model.trim="username" >
    <!-- v-model="username"相当于获取用户输入的文本(input type)并把它赋值给username -->
    <!-- 双向元素绑定：你既可以get username也可以set username -->
    <p>{{username}}</p>
    <button @click="clickGetUsername">{{msg}}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data() {
  return {
    username:"请输入用户名",
    msg:"获取用户名",
  }
 },
 methods: {
  clickGetUsername(){
    this.msg=this.username;
    console.log(this.username);
  }
 },
}
</script>

