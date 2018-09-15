<template>
	<div class="active" v-if="Top">
		<div  >
			<div class="top">
			<a href="javascript: ;" @click="toTop($event)">顶部</a>
			</div>
			<div class="bottom">
				<a href="javascript:;" @click="toBottom($event)">底部</a>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				Top: false,
				height: 0,
			}
		},
		methods: {
			toTop() {
				window.scrollTo(0,0)
			},
			toBottom() {
				var height = document.body.clientHeight;
				window.scrollTo(0,height)

			},
			scrollHeight() {
				
				let _this = this;
				var dom = document.documentElement;
			
				 window.addEventListener('scroll',scroll(_this),false) 


				  function scroll(_this) {
				 	// clearTimeout(timeId)
				 	console.log(111,this)

					var scrollHeight = dom.scrollTop;
					
					if(scrollHeight >300) {
						_this.Top = true
						console.log("topbottom",_this.Top)
					} else {
						_this.Top = false
					}
					// _this.height = scrollHeight;
				  }
				
					
				
			},

		},
		mounted() {
			this.scrollHeight()
		},
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

