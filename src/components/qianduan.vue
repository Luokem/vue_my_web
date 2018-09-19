<template>
	<div class="qianduan" :class="{showMord: !read}" v-cloak>
		<ul v-cloak>
			<li class="clearfix" v-for="(item , index) in datas" @click="goto(index)" >
				<div class="clearfix">
					<div class="imgBox">
						<img :src="'http://180.76.110.55:8089/'+item.path||imgurl" alt="">
					</div>
					
				 <h3 :class="{active: nowIndex == index}" @mouseover="mouseover(index)" @mouseout="mouseout(index)" ><span>标题:</span><span></span>{{item.title}}</h3>

				</div>	 
			   <div class="code" >
				  	<pre class="clearfix" >
				  	   <code >
				  	   	{{item.textarea}}
				  	   </code>
				  	  
				   </pre>
				    <div class="numShow" >
				  	   	<i v-for="(it , i) in rows(item.textarea)" >
				  	   		{{i+1}}
				  	   	</i>
				  	</div>
			    </div>
			<div class="textTime" >
				<span >{{Dates(item.date)}}</span>
				<span >第{{index + 1}}篇</span>
			</div>
			
		
				
			</li>
		</ul>
		<!-- 
			改为细分按需加载
		 -->
		<!-- <div class="readMore" v-if="read">
			<a href="javascript:;" @click="readMore">阅读更多</a>
		</div> -->
		<!-- <div class="loadMore" v-if="load" v-cloak>
			<a href="javascript:;" @click="loadMore">加载更多</a>
		</div> -->
		<HotLoad :dataShowed="dataShowed" :distance="100" @hotLoad="hotLoad('dataShowed')" />
		<TopBottom  />
	</div>
</template>

<script type="text/javascript">
		import TopBottom from '../lib/topBottom.vue'
		import Router from 'vue-router'
		import HotLoad from '../lib/hotLoad.vue'
		export default {
			components: {
				TopBottom,HotLoad
			},
			data() {
				return{
					datas: [
						
					],
					storageData: [],
					storageIndex: 0,
					startNumber: 5,
					eachSize: 4,
					imgurl: require('../assets/logo.png'),
					nowIndex: '',
					active: false,
					read: true,
					load: false,
					dataShowed: false,
					timeId: '',
					imgIp: 'http://180.76.110.55:8089'
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


					// var nowDate = (new Date()-new Date(t))/1000/60/60;
					// var delYear = parseInt(nowDate/24/360)
					// var delMounte = parseInt(nowDate/24/30)
					// var delWeek = parseInt(nowDate/24/7);
					// var delDate = parseInt(nowDate/24);
					// var delHour = parseInt(nowDate)
					// var delMinute = parseInt((new Date()-t)/1000/60)
					// return delYear?(delYear + "年前"):delMounte?(delMounte + "月前"):delWeek?(delWeek + "周前"):delDate? (delDate + "天前"):delHour?(delHour +"时前"):delMinute?(delMinute + "分钟前"): "刚刚"
					return y + '-' + m  + '-' + d + '   ' +  h+':' + mi
				},
				month(m) {
					var single = [1,3,5,7,8,10,12]
					var double = [4,6,9,11]
					if(single.indexOf(m) !==-1) {
						return 31
					}else if(double.indexOf(m) !==-1) {
						return 30
					}else {
						return 28
					}

				},
				getDelTime(deltime) {

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
				},
				showData() {
					let size, index;
					index = this.storageIndex
					if(this.showOne) {
						size = this.eachSize
						
					}else {
						size = this.startNumber;
					}
					this.showOne = true;
					let data = this.storageData.splice(index,size)
					this.datas = this.datas.concat(data)
					if(this.storageData.length<size) {
						this.load = false;
					}else {
						this.load = true
					}

				},
				loadMore() {
					this.showData()
				},
				hotLoad(txt) {
					let _this = this
					this.timeId =setTimeout(function(){
						_this.showData()
						// _this[txt] = false
						
					},500)
					
				}


			}, 
			completed: {

			}, 
			created() {
				console.log(11,this.$route.params)
				var n = this.$route.params.type
				//发送接口
				this.$http.post('/qianduan',{classify: n})
				.then((res) => {
					console.log(res)
					this.storageData = res.data.data;
					// this.showData()
					this.datas = res.data.data;//后面按需加载,"加载更多"
				})
				.catch((error) => {
					console.log(error)
				})

	

			},
			beforeDestroyed() {
				this.datas = [] //这里
				console.log("11111")
			}
		}

</script>

<style type="text/css" media="screen" scoped>

   .qianduan {
   	/*  height:  90em;
   	 overflow: hidden; */
   	 position:  relative;
   	 /* margin-bottom:  32em; */
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
	.imgBox {
   		height: 5.6em;
   		width:  5.6em;
   		float:  left;
   		border-radius: 0.6em;
   		box-shadow: 1px 1px 3px gray;
	}

	img {
		width:  5.6em;
		height:  5.6em;	
	}
	@media screen and (max-width: 640px) {
		.imgBox {
			height:  4.6em;
			width:  4.6em;
		}
		img {
			width:  4.6em;
			height:  4.6em;
		}
	}
	h3{
	  display: inline-block;	
	}
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
	    padding-top: 10em;
	}
	.readMore,.loadMore {
		
	    width: 100%;
	    background-image: linear-gradient(-180deg,rgba(255,255,255,0) 0%,#fff 70%);
		display: flex;
		justify-content: center;
	}
	.readMore a,
	.loadMore a {
		
		padding:  .6em 2.1em;
		color:   #ca0c16;
		font-size: 1.3em;
		border:  1px solid red;
		text-align:  center;
		border-radius:  0.6em;
	}
	.readMore a:hover,
	.loadMore a:hover{
		background-color: #fde3e4 !important;
        border-color: #ca0c16 !important
	}

	[v-cloak]{
    display:none !important;
      }

</style>

