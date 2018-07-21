<template>
	<div class="qianduan" :class="{showMord: !read}">
		<ul>
			<li class="clearfix" v-for="(item , index) in datas" @click="goto(index)">
				<div class="clearfix">
					<img :src="item.path||imgurl" alt="">
				 <h3 :class="{active: nowIndex == index&&active}" @mouseover="mouseover(index)" @mouseout="mouseout(index)"><span>标题:</span>{{item.title}}</h3>

				</div>	 
			   <div class="code" >
				  	<pre class="clearfix">
				  	   <code v-text="item.textarea">
				  	   	
				  	   </code>
				  	  
				   </pre>
				    <div class="numShow">
				  	   	<i v-for="(it , i) in rows(item.textarea)">
				  	   		{{i+1}}
				  	   	</i>
				  	 </div>
			    </div>
			<div class="textTime">
				<span>{{Dates(item.date)}}</span>
				<span>第{{index + 1}}篇</span>
			</div>
			
		
				
			</li>
		</ul>

		<div class="readMore" v-if="read">
			<a href="javascript:;" @click="readMore">阅读更多</a>
		</div>
		<TopBottom />
	</div>
</template>

<script type="text/javascript">
		import TopBottom from '../lib/topBottom.vue'
		export default {
			components: {
				TopBottom
			},
			data() {
				return{
					datas: [
						
					],
					imgurl: require('../assets/logo.png'),
					nowIndex: '',
					active: false,
					read: true,
				}
			},
			methods: {
				goto(index) {
					console.log(index)
				},
				Dates(t) {
					var y = new Date(t).getFullYear()
					var m = new Date(t).getMonth()+1
					var d = new Date(t).getDate()
					var h = new Date(t).getHours()
					var mi = new Date(t).getMinutes()

					return y + '-' + m  + '-' + d + '   ' +  h+':' + mi
				},
				mouseover(index) {
					this.nowIndex = index;
					this.active = true;
				},
				mouseout() {
					this.nowIndex = '';
					this.active = false;
				},
				rows(datas) {
					
					
					 var re = datas.match(/(\n|\t)/g)
					 if(re==null ||re.length ==1) {
					 	re = []
					 	re.push(1)
					 	return re;
					 }
					 else{
					 	re.push(1)
					 	return re
					 }
					
				},
				readMore() {
					this.read = false;
				}

			},
			created() {
				console.log(11,this.$route.params)
				var n = Number(this.$route.params.type)
				this.$http.post('/qianduan',{classify: n})
				.then((res) => {
					console.log(res)
					this.datas = res.data.data
					// this.datas.length= 3;	
				})
				.catch((error) => {
					console.log(error)
				})

			}
		}

</script>

<style type="text/css" media="screen" scoped>
   .qianduan {
   	 height:  90em;
   	 overflow: hidden;
   	 position:  relative;
   	 margin-bottom:  32em;
   }
	li {
		padding:  0.6em;
		margin: 3.3em 0.6em;
		border:  1px solid gray;
		display: block;
		border-radius:  0.6em;
		
		/* overflow: scroll; */
	}
	h3 {

		font-weight:  bold;
		padding:  0.6em 1.6em;
		margin:  0.6em ;
		border-bottom:  1px solid black;
		/* width:  100%; */
		font-size:  1.2em;
		float:  left;

	}
	@media screen and (max-width: 640px) {
		h3 {
			font-size:  1.0em;
		}
	}
	pre {
		margin:  0 !important;
	}
	h3 span {
		font-weight: normal;
		margin-right:  1.3em;
		font-size:  .7em;

	}
	.code {
        width:  calc(100% - 30px - 20px);
        overflow: scroll;
		white-space: nowrap;
		/* padding: 5px 10px ; */
		background:  rgba(200,200,200,.8);
		margin:  .6em 0 .6em 1.9em;
		border-radius: .6em;
		min-height: 3.1em;
		position: relative;
	}

	img {
		width:  5.6em;
		height:  5.6em;
		border-radius: 0.6em;
		float:  left;
		box-shadow: 1px 1px 3px gray;
	}
	@media screen and (max-width: 640px) {
		img {
			width:  4.6em;
			height:  4.6em;
		}
	}
	/* pre{
		
	} */
	code {
		overflow: scroll;
		float:  left;
		/* padding:  0px 10px 20px; */
		line-height:  1.9em;
		margin-left:  4.5em;
	}

	@media screen and (max-width:850px) {
		li {
			margin:  1.5em .5em;
		}
		.code{
			margin-left:  0;
			margin-right:  0;
			margin-bottom:  0!important;
			width:  100%;
		}
		pre {
			width:  100%;
		}
		.numShow {
			padding-right:  0!important;
		}
		code {
			font-size:  .9em;
			line-height: 1em;
			width:  100%;
			margin-left:  2.2em;
			margin-bottom:  1em;
			margin-top:  -1.3em;

		}
		.numShow i {
			font-size:  .9em;
			line-height: 1.1em !important;
		}

	}

	.textTime {
		font-size:  .8em;
		color:  gray;

	}

	.textTime span:last-child {
		float:  right;
	}
	.active {
		color:  rgb(255,173,23);
	}

	.code::-webkit-scrollbar {
	width: 0px;
	height: 0px;
	}
	
   code::-webkit-scrollbar {
	width: 0px;
	height: 0px;
	}

	.numShow{
	position: absolute;
	top:  0px;
	left:  0;
	padding-right:  1.3em;
	background-color: #eef0f4;
   }

	.numShow i {
		display: block;
		padding: 0px .5em;
   		 margin: 0;
   		 width: 1.2em;
   		 /* height:  20px; */
   		 line-height:  1.8em;
   		 /* padding-top:  2px; */
	}

	.showMord {
		height:  auto;
		overflow: visible;
	}

	.readMore {
		position: absolute;
	    bottom: 0;
	    width: 100%;
	    padding-top: 10em;
	    background-image: linear-gradient(-180deg,rgba(255,255,255,0) 0%,#fff 70%);
		display: flex;
		justify-content: center;
	}
	.readMore a {
		
		padding:  .6em 2.1em;
		color:   #ca0c16;
		font-size: 1.3em;
		border:  1px solid red;
		text-align:  center;
		border-radius:  0.6em;
	}
	.readMore a:hover {
		background-color: #fde3e4 !important;
        border-color: #ca0c16 !important
	}

</style>

