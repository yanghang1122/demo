<template>
  <div>
    <TypeNav> </TypeNav>
    <ListContainer></ListContainer>
    <Recomment></Recomment>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
	
import ListContainer from "@/pages/Home/ListContainer/index.vue";
import Recomment from "@/pages/Home/Recomment/index.vue";
import Rank from "@/pages/Home/Rank/index.vue";
import Like from "@/pages/Home/Like/index.vue";
import Floor from "@/pages/Home/Floor/index.vue";
import Brand from "@/pages/Home/Brand/index.vue";
import {mapState} from "vuex"


export default {
  name: "Home",
  components: {
    ListContainer: ListContainer,
    Recomment: Recomment,
    Rank: Rank,
    Like: Like,
    Floor: Floor,
    Brand: Brand,
  },
  mounted(){
	  this.$store.dispatch("getFloorList")
	 
  },
 computed:{
	 ...mapState({
		floorList:(state)=>{
			return state.home.floorList
		}
	 })
 }
  
  
};
</script>

<style scoped>
</style>
