<template>
	<div class="pagination">
		<button>上一页</button>
		<button>1</button>
		<button>2</button>
		<button>3</button>
		<button>4</button>
		<button>5</button>
		<button>6</button>
		<button>7</button>
		<button>8</button>
		<button>9</button>
		<button>共 60 条啊啊啊啊啊111aaaaaa</button>
		
	</div>
	
	
</template>

<script>
	export default{
		name:"Pagination"
	}
</script>

<style scoped>
	.pagination{
		width: 50%;
		margin: 0 auto;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}
	button{
		padding: 10px;
		background-color: gainsboro;
		border-radius: 10px;
		cursor: pointer;
		border: none;
	}
</style>
