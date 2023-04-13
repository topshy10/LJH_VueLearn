<template>
  <div class="hello">
    <p v-if=flag>演示条件渲染</p>
    <p v-else>不严肃</p>
    <p v-show="flag1">1or2?</p>
  </div>
  <div v-if="flag1">
    1
    2
    3
  </div>
  <div v-else>
    <p>4</p>
    <p>5</p>
    <p>6</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      flag:false
    }
  },
  data() {
    return {
      flag1:true
    }
  },
 
}
</script>


