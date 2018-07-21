<template>
	<div class="htmlArea">
		<h2>排行榜:</h2>
		<div class="link">
			 <router-link :to="{path: '/editPage'}">
		      <div class="gotoEdit">
		        我要发布
		      </div>
		    </router-link>
		</div>
		
		<template v-for="(item , index) in htmlData">
			<h3>{{item.title}}</h3>
			<ul >
				<li v-for="(list , id) in item.Date"><a :href="list.url" title="">{{list.label}}</a></li>
			</ul>
		</template>
		<button type="" @click="he">hello</button>
		<div class="am-sm" >
			<div >
				<a href="javascript:;">发布</a><br>
				<a href="javascript:;">排行榜</a>
			</div>
		</div>
		
	</div>
	
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				htmlData: [
					{
						title: '第一阶段',
						Date: [
							{
								label: '开始啦.ddddddddddd..',
								url: '/st-html/zero'
							},
							{
								label: '第一天-',
								url: '/st-html/one'
							},
							{
								label: '第二天...',
								url: '/st-html/two'
							},
							{
								label: '第三天...',
								url: '/st-html/three'
							},
							{
								label: '第四天...',
								url: '/st-html/four'
							},
						]
					}
				]
			}
		},
		methods: {
			he() {
				console.log('s');
				() => {

			console.log('hello')
		}
			}
		}
	}
</script>

<style type="text/css" media="screen" scoped>
	.htmlArea {
		border:  1px solid gray;
		padding:  10px;
		border-radius: 5px;
		box-shadow: 0 0 10px gray;
		position:  relative;
	}
	h2 {
		font-size:  100%;
		margin-bottom:  10px;
	}
	h3{
		font-size:  90%;
	}
	li {
		margin:  8px 0 0;
		width:  98%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	 a {
		font-size:  .9em;	
		color:  gray;
	}
	li:hover a {
		color:  green;
	}

	.link{
		position: absolute;
		top:  0;
		right:  5px;
	}

	 .gotoEdit{
    display: inline-block;
    padding:  10px 15px ;
    cursor: pointer;
    border:  1px solid gray;
    box-shadow: 1px 1px 5px gray;
    color:  rgb(30,35,154);
    border-radius: 10px;
    margin:  10px 0;
  }
  .gotoEdit:hover{
     color:  #fff;
     background:  black;
     opacity: .5;
  }
  .am-sm {
  	display: none;
  }
  @media screen and (max-width: 850px) {
  	  .htmlArea {
  	  	position: absolute;
  	  	top:  4.5em;
  	  	left:  -10em;
  	  	transform: translateX(-100%)
  	  }

  	.am-sm {
  		display: block;
  	}
  }
</style>