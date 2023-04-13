import { createStore } from "vuex"

// Vuex的核心作用就是帮我们管理组件之间的状态的
export default createStore({
    // 所有的状态都放在这里(数据)
    state:{
        counter:0
    }
})