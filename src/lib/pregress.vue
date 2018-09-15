<template>
 <transition name="fade">
  <p class="progress-bar" v-if="isShow">
  </p>
 </transition>
</template>
<script type="text/babel">
 export default {
  data() {
   return {
    isShow: true, // 是否显示进度条
    val: 0, // 进度
   }
  },
  props: {
   /**
    * 每10毫秒自增幅度
    */
   step: {
    type: Number,
    default: 5,
   },
   /**
    * 初始值
    */
   initVal: {
    type: Number,
    default: 0,
   },
   /**
    * 到一定进度停止
    */
   stopVal: {
    type: Number,
    default: 100,
   },
   /**
    * 进度条继续到成功
    */
   isOk: {
    type: Boolean,
    default: false,
   },
  },
  mounted() {
    
   // 初始化后加载进度，加载到百分之多少由stopVal决定
   this.val = this.initVal
   let step = this.step
   let timer = setInterval(() => {
    this.val = this.val + step
    // this.$el.style.width = this.val + '%'
    document.getElementsByClassName('progress-bar')[0].style.width = this.val + '%'
    // 父组件数据加载完前进度条最多到stopVal的这个百分值
    if (this.val >= this.stopVal) {
     clearInterval(timer)
     this.isShow = false
     return
    }
   }, 10)
  },
  watch: { 
   /**
    * 监听组件props变化决定是否继续加载，一般在父组件数据加载完后改变此标志位
    */
   isOk() {
    // console.log('start2')
    let val = this.val
    let step = this.step
    let timer = setInterval(() => {
     val = val + step
     // this.$el.style.width = val + '%'
     document.getElementsByClassName('progress-bar')[0].style.width = val + '%'
     // 加载到百分百完成
     if (val >= 100) {
      // 关闭定时器
      clearInterval(timer)
      // 加载完成关闭进度条
      this.isShow = false
      // 加载完成的回调
      this.$emit('callback', 'load success')
      return
     }
    }, 10)
   },
  },
 }
</script>
<style type="text/css" media="screen">
@media screen and (max-width: 750px) {
  .progress-bar {
    font-size: 14px !important;
}
}

 .progress-bar {
  position:  fixed;
  top:  5em;
  height: 3px;
  width: 0; 
  background-color:  #f66;
 }
 .fade-enter-active,
 .fade-leave-active {
  
   transition: all .3s;
  }
  .fade-enter, .fade-leave-active {
   opacity: 0
  }
 
</style>