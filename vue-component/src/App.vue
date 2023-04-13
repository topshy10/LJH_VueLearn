<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- :title把属性变动态 -->
  <MyComp2 @OnEvent="getDataHandle"/>
  <p>{{msg}}</p>
</template>

<script>
//引入
import MyComponent from './components/MyComponent.vue';
import MyComp from './components/MyComp.vue';
import MyComp2 from './components/MyComp2.vue';

export default {
  name: 'App',
  components: {
    MyComponent,
    MyComp,
    MyComp2
},
  data() {
    return {
      msg:"none",
      title:"标题1",
      names:["asd","asdffff","454y5h"]
    }
  },
  methods: {
    getDataHandle(msg1){
      this.msg=msg1;
      console.log(msg1);
    }
  },
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
