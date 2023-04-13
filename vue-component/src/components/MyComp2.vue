
<template>
    <h3>自定义事件组件交互</h3>
    <button @click="sendClickHandle">点击传递数据</button>
</template>

<script>
//导出对象
export default {
name:"MyComponent",
data() {
    return {
        msg:"来自MyComp的数据",
    }
},
methods: {
    sendClickHandle(){
        //参数1：字符串(理论上随便写，只要有意义)，参数2：传递的数据
        this.$emit("OnEvent",this.msg);
    }
},
}

</script>

<!-- scoped:该属性表示该样式只在该组件生效 -->
<style scoped>


</style>