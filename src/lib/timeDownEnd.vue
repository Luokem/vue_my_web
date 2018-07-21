<template>
	<div class="marginTop">
		<transition name="down">
			<div v-if="show">
				距离双十一还有:{{day}} 天&nbsp;&nbsp; {{hour}}  小时 &nbsp;&nbsp; {{minute}} 分 &nbsp;&nbsp; {{mill}}秒
			</div>
		</transition>
		
	</div>
	
</template>

<script type="text/javascript">
	
	export default {
		data(){
			return {
				day: '00',
				hour: '00',
				minute: '00',
				mill:'00',
				timeId: '',
				show: true,

			}
		},
		methods: {
			timeDownEnd() {
				if(this.day == 0 && this.hour ==0 && this.minute==0 && this.mill ==0 &&this.showDiff) {
					
					this.show = false;
					this.showDiff = true;
					clearTimeout(this.timeId)

				}
			 	var goalDate = new Date('2018-11-11 23:11:11')
			 	this.timeId = setInterval(()=> {
			 	var nowDate = new Date()
			 	
			 	var end =  goalDate - nowDate;
			 	console.log(end)
			 	 this.day = parseInt(((((end/1000)/60)/60)/24));

			     this.hour= parseInt(((((end/1000)/60)/60)%24));

			     this.minute = parseInt((((end/1000)/60)%60));

			     this.mill = parseInt(((end/1000)%60));
                this.flag("day",this.day)
                this.flag("hour",this.hour)
                this.flag("minute",this.minute)
                this.flag("mill",this.mill)
                 
			 	},1000)

			 	

			},
			flag(item,value) {
				return value > 9? this[item] =value : this[item] = '0' + this[item];
			}
		},
		mounted() {
			this.timeDownEnd()
			
		}
	}
</script>


<style type="text/css" media="screen" scoped>
	 .marginTop {
	 	margin-top:  5em;
	 }
</style>