<template>
	
	<div class="textareaBox">
		<textarea name="" v-model="text" placeholder="请输入" >
			
		</textarea>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			textContent: { 
				type: String,
			    default: ''
			}
		},
		data() {
			return {
				text: this.textContent,
			}
		},
		watch: {
			text() {
				// console.log(this.text)
				this.$emit('onChange',this.text)
			}
		}
	}
</script>

<style type="text/css" media="screen" scoped>

	textarea {
		width:    95%;
		max-width: 35em;
		height:  200px;
		margin:  10px auto 30px;
		border:  1px solid black;
		border-radius: 5px;
		font-size:  1.3em;
		padding:  10px 5px;
		letter-spacing: 2px;
		line-height: 1.5em;
	}

	textarea:hover {
		border-color:  gray;		
	}
</style>