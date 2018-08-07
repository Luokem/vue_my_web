<template>
	<div class="header" >
		<div class="logo">
			<img src='../assets/logo.png' > <b>I Love Study</b>
		</div>
		<div class="userLogin">
			
			<ul class="clearfix">
				
				<li v-for="(item , index) in navTitle" @click="displayNav(item,index)" ><span></span><a   href="javascript:void(0);">{{item.label}}</a>
					<div v-if="item.show&&save(index)">
						<HdNav :navData="navData[item.key]" />
					</div>
				</li>
				<li><Search @onChange="onChange($event)" /></li>
				
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	import HdNav from '../lib/hdNav.vue'
	import Search from '../lib/search.vue'
	import _ from 'lodash'

	export default {
		components: {
			HdNav,Search,
		},
		data() {
			return{
				active: true,
				nowIndex: '',
				navArray: [],
				navTitle: [
					{
						label: '其他',
						key: 'qita',
						 show: false
					},
					
					{
						label: '人工智能',
						key: 'rengongzhineng',
						 show: false
					},
					{
						label: '大数据',
						key: 'dashuju',
						 show: false
					},
					{
						label: '后端',
						key: 'houduan',
						 show: false
					},
					{
						label: '前端',
  					   key: 'qianduan',
  					   show: false
					},
				],
				navData: {
				"qianduan":[
					{
						label:'html',
						url:"/st-html/qianduan/type0"
					},
					{
						label: 'css',
						url: "/st-html/css/type02"
					},
					{
						label: 'js',
						url: '/st-html/js/type03'
					},
					{
						label: '前端框架',
						url: '/st-html/qianduankuangjia/type04'
					},
					{
						label: 'ui框架',
						url: '/st-html/uikuangjia/type05'
					},{
						label: '小总结',
						url:'/st-html/xiaozongjie/type06'
					}
				],
				"houduan":[
					{
						label: 'nodejs',
						url: '/st-node/nodejs/type10'
					},
					{
						label: 'Mongodb',
						url: '/st-node/mongodb/type11'
					}
				],
				"dashuju":[
					{
						label: '大数据',
						url: '/st-dashuju/dashuju/type20'
					}
				],
				"rengongzhineng": [
					{
						label: '人工智能',
						url: '/st-rengongzhineng/type30'
					}
				],
				"qita": [
					{
						label: '其他',
						url: '/st-qita/qita/type40'
					},
					{
						label: '项目总结',
						url: '/st-qita/xiangmu/type41'
					}
				]
			}
			}
			
				
			
		},
		methods: {
			displayNav(param,index) {
				 this.navTitle.map((item) => {
					item.show = false;
				})
				param.show  = true
				// this.active = !this.active
				
				if(this.navArray.indexOf(index)==-1) {
					this.navArray.push(index)
				}
				else {
					this.navArray = _.remove(this.navArray,(id)=>{
						return id !== index
					})
				}
			},
			save(index) {
				return this.navArray.indexOf(index) !== -1
			},
			onChange(param) {
				console.log(param)
			}

		}
	}
</script>

<style type="text/css" media="screen" scoped>
	.header {
		position:  fixed;
		top: 0;
		left: 0;
		width:  100%;
		height:  5em;
		z-index: 99;
		/* line-height: 80px; */
		background-color: rgb(50, 61,70);
		display: flex;
		align-items:  center;
		justify-content: space-between;	
	}
	.logo {
		display: flex;
		align-items: center;
	}
	.logo img{
		height:  4.3em;
		width:  4.3em;
	}
	.userLogin {
		/* position: absolute;
		right:  0; */
		/* float:  right; */
		/* width: 80%; */
	}
	

	ul li {
		float:  right;		
		margin:  0 .8em;
		position: relative;
		padding:  .2em .2em .15em;
	
	}
	 
	 li:hover a{
		color:  red;
		border-bottom:  2px solid green;
	}
	ul li a {
		color:  #fff;
		padding-bottom:  0.1em;
	}

	b {
		font-size:  1.8em;
		color:  #fff;
	}

	.search {
		display: inline-block;
	}

	@media screen and (max-width:750px) {
		.header {
				font-size: 14px !important;
			}	
		ul li:last-child{
			display: none;
		}
		.logo	b {
			width: 3em !important;
		}
	}
	@media screen and (max-width:860px) {
		
		.logo	b {
			width: 3em !important;
		}
	}
	@media screen and (max-width:500px) {
		.header ul{
			font-size:  .9em !important;
		}
		
		.logo	b {
			font-size: 1.3em !important;
		}
		.logo img {
			width:  3.5em;
			height:  3.5em;
		}
	}


	
</style>