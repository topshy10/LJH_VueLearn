<template>
  <div class="hello">
    <h1>跨域解决方案</h1>
    
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'HelloWorld',
  mounted() {
    axios.get("/api/FingerUnion/list.php")
    .then(res =>{
      console.log(res.data);
    })
  },
}
</script>

