<template>
	<div>
		<div class="leftMenu">
			<div>
				<LeftMenu />
			</div>
		</div>
		<div class="main-content">
			<router-view> </router-view>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import LeftMenu from '../components/leftMenu.vue'
    import router from 'vue-router'
	export default {
		components: {
			LeftMenu
		}

	}

</script>

<style type="text/css" media="screen" scoped>
	.leftMenu {
	width:  calc(25% - 1.3em);
		float:  left;
		margin-left:  1.3em;
	}
	
	.main-content {
	width:  calc(75% - 1.3em);
	margin-left: 1.3em;
	float:  left;
	}
	::-webkit-scrollbar {
	width: 0px;
	height: 0px;
	}

	@media screen and (max-width: 850px) {
    .leftMenu {
      float:  normal;
      width: auto;
      position: relative;
    }
    .main-content {
      box-sizing:  border-box;
      width:  calc(100% - 0em);
      margin-left:  0em;
      margin-right:  0em;

    }
  }
</style>

