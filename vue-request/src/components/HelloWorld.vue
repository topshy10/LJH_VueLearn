<template>
  <div class="hello">
    <p>{{ chengpin.title }}</p>
  </div>
</template>

<script>
// import axios from "axios";
import querystring from "querystring";
export default {
  name: 'HelloWorld',
  data() {
    return {
      chengpin: {}
    }
  },
  mounted() {
    //get请求方式：
    //   axios({
    //     method:"get",
    //     url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
    //   }).then(res =>{
    //     console.log(res.data);
    //     this.chengpin=res.data.chengpinDetails[0];
    //   })
    //   //post请求方式：
    //   axios({
    //     method:"post",
    //     url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
    //     这里需要将data转换为字符串类型
    //     需要先安装：cnpm install --save querystring   ->转换格式
    //     // querystring.stringify({})  -> 转换参数格式
    //     data:querystring.stringify({
    //       user_id:"iwen@qq.com",
    //       password:"iwen123",
    //       verification_code:"crfvw",
    //     })
    //   }).then(res =>{
    //     console.log(res.data);
    //     this.chengpin=res.data.chengpinDetails[0];
    //   })
    // },

    this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res => {
      console.log(res.data);
    })

    this.$axios.post("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php", querystring.stringify({
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw",
    })).then(res => {
      console.log(res.data);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
