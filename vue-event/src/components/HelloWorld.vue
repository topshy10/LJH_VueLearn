<template>
  <div class="hello">
    <button v-on:click="counter++">点击:{{counter}}</button>
    <br>
    <!-- <button @:click="counter--">减小:{{counter}}</button> -->
    <!-- 点击按钮后调用原生事件改变文本值 -->
    <button @:click="clickHandle">按钮</button>
    <p>{{message}}</p>
    <br>
    <button @click="print('qwert')">print:{{msg1}}</button>
    <br>
    <ul>
      <li @:click="clickItemHandle(item)" v-for="(item,index) in SQlist" :key="index" >原item:{{item}},现item:{{msg1}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      //可以return多个值，用，分隔
      counter:0,
      count:0,
      message:"xinwen1",
      msg1:"none",
      SQlist:["sad","dasd","21312"],
  
    }
  },
 
  //methods:方法体集合
  methods: {
    clickHandle(event){
      //用this.属性
      this.count+=10;
      this.message="xinwen2";
      console.log("fengzhuang");
      //event是原生DOM事件
      console.log(event);
      event.target.innerHTML="点击"
      // event.target.innerHTML="点击之后";
    },
    print(msg1){
      this.msg1=msg1;
      console.log(msg1);
    },
    //事件与列表结合
    clickItemHandle(item){
      this.msg1=item;
      console.log(item);
    }
  },
}
</script>

