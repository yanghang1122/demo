<template>
  
  <div id="app">
    <Header></Header>
	<!-- 路由出口 当前路由是谁这个就是谁 在router/router.js里配置 -->
    <router-view></router-view>
      <!-- 在路由里配置的meat信息来控制footer组建的显示隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default {
	
	
	
	
  name: 'App',
  components: {
    Header,
    Footer
  },
  //1. dom一挂载就是调用action里面的categoryList函数   13700000000  111111
  mounted(){
	  this.$store.dispatch("categoryList")
	   
  }
 
}
</script>

<style>


</style>
