<template>
  <div class="hello">
    <h1>列表渲染</h1>
    <ul>
      <!-- key="item.id" -->
      <li v-for="item in newList" key="item.id">
        {{ item }}
      </li>
    </ul>
    <ol>
      <li v-for="i in newList">
        {{ "title:"+i.title }}
      </li>
    </ol>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data(){
    return{
      newList:[
        {
          id:1001,
          title:"zhangjike"
        },
        {
          id:1002,
          title:"xiuer"
        },
        {
          id:1004,
          title:"sadasd"
        },
        {
          id:1231,
          title:"fdgfdg"
        }
      ]
    }
  }
}
</script>


