<template>
	<div>
		<input type="" name="" @focus="focus()" @blur="blur()" ref='ipt' >
	
		<div class="box">
		    <div class="hour"></div>
		    <div class="minut"></div>
		    <div class="second"></div>
		    
	  	</div>
  	</div>

</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			run() {
			 var h = document.getElementsByClassName("hour")[0];
			 var m = document.getElementsByClassName("minut")[0];
			 var s = document.getElementsByClassName("second")[0];
			 setInterval(()=> {
			 	
			    var date = new Date();
			    var seconds =  date.getSeconds();
			    var minutes = date.getMinutes();
			    var hours = date.getHours();
			    // console.log('1',date)
			    s.style.transform = "rotate(" + 6 * seconds +"deg)"
			    m.style.transform = "rotate(" + 6 * minutes +"deg)"
			    h.style.transform = "rotate(" + 30 * hours +"deg)"
			 }, 1000);
			    
			},
			focus() {
				console.log(333)
			},
			blur() {
				console.log(444)
			}
		},
		mounted() {
			this.run()
		}
	}	

</script>

<style scoped>


.box {
  width: 600px;
  height: 600px;
  margin: 0 auto;
  position: relative;
  background: url(../assets/clock/clock.jpg);
}

.box div {
  width: 30px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -15px;
}

.hour {
    background: url(../assets/clock/hour.png) no-repeat;
}

.minut {
    background: url(../assets/clock/minute.png) no-repeat;
}

.second {
  background: url(../assets/clock/second.png) no-repeat;
}

input {
	border:  1px solid black;
}
</style>