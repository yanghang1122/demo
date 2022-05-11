<template>
	<div class="pagination">
		<button :disabled="pageNo == 1" @click="$emit('getPageNo',pageNo-1)" :class="{nohover: pageNo == 1}">上一页</button>
		<button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo',1)" :class="{avtive: pageNo == 1}">1</button>
		<button v-if="startNumAndEndNum.start > 2">...</button>
		
		<button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-show="page>=startNumAndEndNum.start" @click="$emit('getPageNo',page)" :class="{avtive: pageNo == page}">{{page}}</button>
		
		
		<button v-if="startNumAndEndNum.end < totalPage-1">...</button>
		
		<button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)" :class="{avtive: pageNo == totalPage}">{{totalPage}}</button>
		<button :disabled="pageNo == totalPage" @click="$emit('getPageNo',pageNo+1)" :class="{nohover: pageNo == totalPage}">下一页</button>
		<button style="margin-left: 20px;">共{{total}}条</button>
	</div>


</template>

<script>
	export default {
		name: "Pagination",
		// pageNo 代表当前第几页
		// pageSize 一页显示几个数据
		// total 总共多少个数据
		// continues 有多少连续的分页器
		props: ["pageNo", "pageSize", "total", "continues"],
		computed: {
			//计算属性 总共多少个数据除一页多少个数据 向上取整 获取总共多少页
			totalPage() {
				return Math.ceil(this.total / this.pageSize)
			},
			startNumAndEndNum() {
				let start = 0;
				let end = 0;
				//如果连续页大于总页数 起始页是1 最后一页是总页数 
				if (this.continues > this.totalPage) {
					start = 1;
					end = totalPage
				} else {
					start = this.pageNo - parseInt(this.continues / 2)
					end = this.pageNo + parseInt(this.continues / 2)
					// 如果连续的分页器 开始的页数小于1
					if(start < 1){
						start = 1;
						end = this.continues
					}
					//如果连续的分页器 结束的页数大于总页数
					if(end > this.totalPage){
						start = this.totalPage - this.continues + 1
						end = this.totalPage
						
					}
				}
				return {start,end}
			}
		},
		data(){
			return{
				disabled:false
			}
		}
	}
</script>

<style scoped>
	.pagination {
		width: 50%;
		margin: 0 auto;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}

	button {
		padding: 10px;
		background-color: gainsboro;
		border-radius: 10px;
		cursor: pointer;
		border: none;
	}
	.nohover{
		cursor: auto;
	}
	.avtive{
		background-color: red;
	}
	[disabled] {
	    color: #c0c4cc;
	    cursor: not-allowed;
	}
</style>
