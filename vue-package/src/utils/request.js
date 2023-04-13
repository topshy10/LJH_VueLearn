import axios from "axios"
import querystring from "querystring"

// 参考文档：https://www.kancloud.cn/yunye/axios/234845

const errorHandle = (status,info) => {
    switch(status){
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

//创建属于自己的网络请求对象
const instance = axios.create({
    // 网络请求的公共配置
    timeout:5000//超出5s不响应退出
})

//上面这一块最常见于拦截器interceptors(有2种)

// 1.发送数据之前
instance.interceptors.request.use(
    // 发送成功
    // 使用箭头函数，config是原本function(){}里面的参数
    config =>{
        if(config.methods === "post"){
            config.data = querystring.stringify(config.data)
        }
        // config包含网络请求的所有信息
        return config;
    },
    // 发送失败
    error =>{
        // 返回失败信息
        return Promise.reject(error)
    }
)

// 2.获取数据之前
instance.interceptors.response.use(
    // 获取成功
    response =>{
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
     //获取失败
    error =>{
        // 这个response是错误对象
        const { response } = error;
        // 错误的处理才是我们需要最关注的
        errorHandle(response.status,response.info)
    }
)

//网络请求对象要导出
export default instance;