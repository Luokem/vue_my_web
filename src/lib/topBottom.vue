<template>
	<div :class="{active: Top}">
		<div class="top">
			<a href="javascript: ;" @click="toTop($event)">顶部</a>
		</div>
		<div class="bottom">
			<a href="javascript:;" @click="toBottom($event)">底部</a>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				Top: true,
			}
		},
		methods: {
			toTop() {
				window.scrollTo(0,0)
			},
			toBottom() {
				// var winHeight = window.innerHeight;
				// var bodyHeight = document.body.clientHeight;
				var height = document.body.clientHeight;
    			var wHeight = window.innerHeight;
    			console.log(height, wHeight)
				window.scrollTo(0,height-wHeight)

			}

		}
	}
</script>

<style type="text/css" media="screen" scoped>
	.active {
		display: block;
		position:  fixed;
		bottom:  50px;
		right:  100px;
	}
</style>

