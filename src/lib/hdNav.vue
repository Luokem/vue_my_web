<template>
	<div>
		<ul >
			<li v-for="(list , index) in navData"><a :href="list.url">{{list.label}}</a></li>
			
		</ul>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		props: {
			navData: {
				type: Array,
				default: [
					{
						label: 'test',
						url: ''
					}
				]
			}
		}
	}
</script>


<style type="text/css" media="screen" scoped>
	ul {
		position: absolute;
		top:  25px;
		left:  0;
		z-index: 99;
		background: #f4f4f4;
		width:  6em;
		border:  1px solid black;
		border-radius: 2px;
		margin-left:  -5px;
	}
	ul li {
		margin: 3px 0 ;
		padding: 3px 3px 3px 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		word-spacing: nowrap;
	}

	a {
		color:  black;
	}
	a:hover {
		color:  green;
	}
	
</style>