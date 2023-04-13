<template>
    <h3>组件生命周期</h3>
    <button @click="message='进入了'">{{message}}</button>
    <p>{{message}}</p>
</template>

<script>
export default {
    data() {
        return {
            message:"点击",
        }
    },
    // 生命周期函数跟data同级
    beforeCreate(){
        console.log("beforeCreate:组件创建之前");
        //alert("beforeCreate:组件创建之前");
    },
    created() {
        console.log("created:组件创建完成");
    },
    beforeMount() {
        console.log("beforeMount:组件渲染之前");
    },
    mounted() {
        //这个阶段做的事：
        //网络请求
        console.log("mounted:组件渲染完成");
    },
    beforeUpdate() {
        console.log("beforeUpdate:组件更新之前");
    },
    updated() {
        console.log("updated:组件更新完成");
    },
    beforeUnmount(){
        //这个阶段做的事：
        //卸载之前，把消耗性能的东西处理掉
        //比如说定时器
        console.log("beforeUnmount:组件卸载之前");
    },
    unmounted() {
        console.log("unmounted:组件卸载完成");
    },

}

</script>