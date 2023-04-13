import axios from "../utils/request"
import path from "./path"

const api = {
    // 诚品详情地址
    getChengpin(){
        return axios.get(path.baseUrl + path.chengpin)
    }
    //日后所有的网络请求都封装在这里面

}

export default api