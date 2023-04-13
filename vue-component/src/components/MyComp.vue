<template>
    <h3>prop传递数据</h3>
    <p>{{title}}</p>
    <ul>
        <li v-for="(item,index) in names" :key="index">{{item}}</li>
    </ul>
</template>

<script>
//导出对象
export default {
name:"MyComp",
props :{
    title:{
        type:String,
        default:"sada"//默认值
    },
    names:{
        type:Array,
        //数组和对象必须使用函数返回
        default:function(){
            return [];
        }
    }
}
}

</script>

<!-- scoped:该属性表示该样式只在该组件生效 -->
<style scoped>


</style>