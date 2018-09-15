<template>
	<div  class="load">
		<transition name="load">
			<div v-if="isShow">正在加载...</div>
		</transition>
	</div>
</template>

<script>
	export default {
		props: {
			distence: {
				type: Number,
				default: 200,
			},
		},
		data() {
			return {
				isShow: false,
				active: true,
				oldHeight: 0,
			}
		},
		methods: {
			Show() {
				let _this = this
				var loadDom = document.getElementsByClassName('load')[0];
				var htmlDom = document.documentElement;
				var wheight = parseInt(window.innerHeight)

				let timeId =setTimeout(function() {
					window.onscroll = function() {
			        var height = parseInt(htmlDom.scrollTop);
			        var elHeight = parseInt(loadDom.offsetTop)
			        var d = elHeight-height-wheight
			        
			        if(d < _this.distence) {
			        	_this.isShow = true
			        	if(_this.active) {
			        		_this.$emit("hotLoad")
			        		clearTimeout(timeId)
			        		_this.active = false
			        		_this.oldHeight = elHeight
			        	}
			        	
			        	
			        }
			        else {
			        	_this.isShow = false
			        }

			        if(_this.oldHeight<=elHeight) {
			        	_this.isShow = false
			        	_this.active = true
			        }
			        
			        
			   	  }
				},100)
				
			}
		},
		mounted() {
			this.Show()
		}

	}
</script>

<style>
	.load >div {
		text-align:  center;
		font-size: 1em;
		color:  black;
	}
	.load-enter,.load-leave-active {
		color:  rgba(255,255,255);
	}
	.load-enter,.load-leave-active {
		transform:  scale(0.2, 0.2);
	}
	.load-enter-active {
		color:  black;
		transform: scale(1.2,1.2);
		margin-bottom:  1em;
		transition:  all .5s ease .2s;
	}

	.load-leave-active {
		transition:  all .5s ease .2s;
	}

</style>