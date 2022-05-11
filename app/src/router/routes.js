//引入路由组件  能用@是因为在jsconfig.js里配置了 src/=@
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default [
		{
		    path:"/detail/:skuid",
		    component:Detail,
		    meta:{
		        show:true
		    }
		},
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