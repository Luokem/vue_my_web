<template>
	
	<div>
		<TimeDownEnd />
		<Clock />
	</div>
</template>

<script type="text/javascript">
	import TimeDownEnd from '../lib/timeDownEnd.vue'
	import Clock from '../lib/Clock.vue'
	export default {
		components: {
			TimeDownEnd,Clock
		}
	}
</script>