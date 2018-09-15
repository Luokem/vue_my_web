<template>
	<div class="search">
		<div class="box" >
			<div >
				<label v-show="labelShow">搜索</label>
				<input type="text" name="" v-model="value" @click="clickInput" :class="{inputStyle: active&&selectAtive}">
			</div>
			
			<a  href="javascript:void(null);" @click="search">
				<i class="iconfont" :class="{going: active}">&#xe61d;</i>
			</a>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				labelShow: true,
				value: '',
				active: false,
			}
		},
		methods: {
			enter(){
				this.labelShow = false;
			},
			clickInput() {
				this.active = true
				this.$store.dispatch('changeActive',1)
			},
			search() {
				this.$emit('onChange',this.value)
			}
		},
		computed: {
			selectAtive() {
				return this.$store.getters.select
			}
		},
		watch: {
			value(){
				this.labelShow = false;

				if(this.value == '') {
					this.labelShow = true;
				}
			}
		}
	}
</script>

<style type="text/css" media="screen" scoped>
	.search{
		display: inline-block;
		vertical-align: middle;
	}
	.box {
		position: relative;
	}
	label {
		color:  #d5d5d5;
		font-size: 1em;
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		left:  10px;
	}


	 input {
	  display: inline-block;
	  width: 170px;
	  height: 38px;
	  border: 1px solid #e3e3e3;
	  outline: none;
	  text-indent: 10px;
	  border-radius: 19px;
	  transition: all .5s ease-in;
	} 
	a {
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		right:  5px;
		z-index: 10;
		display: inline-block;
	}
	a i {
		transition: all .5s ease-out;
	}

	.going{
	background:  #969696;
	border-radius: 50%;
	}
	.search .inputStyle {
	width:  220px;
	}


	/* ---字体库-- */
	@font-face {
	font-family: 'iconfont';  /* project id 442155 */
	src: url('//at.alicdn.com/t/font_442155_136tjeq74uj.eot');
	src: url('//at.alicdn.com/t/font_442155_136tjeq74uj.eot?#iefix') format('embedded-opentype'),
	url('//at.alicdn.com/t/font_442155_136tjeq74uj.woff') format('woff'),
	url('//at.alicdn.com/t/font_442155_136tjeq74uj.ttf') format('truetype'),
	url('//at.alicdn.com/t/font_442155_136tjeq74uj.svg#iconfont') format('svg');
	}
	
	.iconfont{
	font-family:"iconfont" !important;
	font-size:1.8em;font-style:normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.3px;
	-moz-osx-font-smoothing: grayscale;
	text-align:  left;
	color: black;
	}

	@media screen and(max-width: 800px) {
		.search input {
			width:  80px !important;
		}	
		.search .inputStyle {
			width:  150px !important;
		}
	}


</style>