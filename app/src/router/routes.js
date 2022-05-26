//引入路由组件  能用@是因为在jsconfig.js里配置了 src/=@
// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'


export default [
	{
	    path:"/center",
		name:"Center",
	    component:Center,
	    meta:{
	        show:true
	    },
		children:[
			{
				path:"/center/myorder",
				name:"myOrder",
				component:myOrder,
			},
			{
				path:"/center/grouporder",
				name:"groupOrder",
				component:groupOrder,
			},
			{
			    //配置默认跳转到我的订单
			    path:"/",
			    redirect:'/center/myorder'
			}
		]
	},
	{
	    path:"/paySuccess",
		name:"PaySuccess",
	    component:PaySuccess,
	    meta:{
	        show:true
	    }
	},
	{
	    path:"/pay",
		name:"Pay",
	    component:Pay,
	    meta:{
	        show:true
	    },
		beforeEnter:(to,from,next)=>{
			if(from.path == '/trade'){
				next()
			}else{
				next(false)
			}
		}
	},
	{
	    path:"/trade",
		name:"Trade",
	    component:Trade,
	    meta:{
	        show:true
	    },
		//去交易页必须从购物车来 从其他页来 哪来回哪去 next(false) 就是回到来的页面
		beforeEnter:(to,from,next)=>{
			if(from.path == '/shopcart'){
				next()
			}else{
				next(false)
			}
		}
	},
	{
	    path:"/shopcart",
		name:"ShopCart",
	    component:ShopCart,
	    meta:{
	        show:true
	    }
	},
	{
	    path:"/addcartsuccess",
		name:"AddCartSuccess",
	    component:AddCartSuccess,
	    meta:{
	        show:true
	    }
	},
		{
		    path:"/detail/:skuid",
		    component:Detail,
		    meta:{
		        show:true
		    }
		},
        {
            path:"/home",
			//路由懒加载
            component:()=>import("@/pages/Home"),
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