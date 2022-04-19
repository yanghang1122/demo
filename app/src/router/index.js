
//引入vue和vuerouter
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用vuerouter
Vue.use(VueRouter)

//引入路由组件  能用@是因为在jsconfig.js里配置了 src/=@
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//配置路由
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{
                show:true
            }
        },
        {
            //传递参数先占位
            path:"/search/:keyword?",
            component:Search,
            meta:{
                show:true
            },
            name:"search"

        },
        {
            path:"/login",
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                show:false
            }
        },
        
        {
            //配置默认跳转到首页
            path:"/",
            redirect:'/home'
        }
    ]
})