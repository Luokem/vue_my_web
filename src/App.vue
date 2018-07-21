<template>
  <div id="app">
    <Header />

    <div class="content" @click="changeActive">
      <router-view/>
    </div>

    <Foot />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Foot from './components/foot.vue'
export default {
  components: {
    Header,Foot
  },
  methods: {
    changeActive() {
      this.$store.dispatch('changeActive',0)
   }
  }
}
</script>

<style>
 * {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  }
  html{
    width:  100%;
    /* height:  100%; */
    font-size:  62.5%;

  }
  body {
    font-size:  1.6em;
    /* height: 100%; */
  }

  ul {
    list-style:  none;
  }
  li, a {
    text-decoration: none;
  }
  a {
    cursor: pointer;
  }

   table {
    border-collapse: collapse;
    border-spacing: 0;
  }

#app {
  width:  100%;
  /* height: 100%; */
  background:  #fbfbfb;
}

.content {
  width:  calc(100% - 7em);
  min-height:  100vh;
  margin-top:  5.5em;
  margin-left:  2em;
  margin-right:  5em;
  overflow: scroll;
  position:  relative;
}



@media screen and (max-width:850px) {
   .content {
  width:  calc(100% - 1em) !important;
  margin: 4.5em .5em 0 !important;
  font-size:  .9em;
  }
  }



::-webkit-scrollbar {
width: 20px;
height: 1px;
}

::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
/* border-radius: 10px; */
background-color: rgb(91,214,255);
/* background-image: url(./down.png); */
}

::-webkit-scrollbar-track {/*滚动条里面轨道*/
-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
background: rgb(191,239,255);
}

::-webkit-scrollbar-track-piece {
background: rgb(91,214,255);
}
::-webkit-scrollbar-track-piece:start {
background: yellow;
}

::-webkit-scrollbar-button {
background: rgb(200,200,200);
border-radius: 0 0 50% 50%;
}

.content::-webkit-scrollbar {
  width:  0px !important;
  height:  0px !important;
}

/* 清除浮动 */
.clearfix::after{
  content:  '';
  height:  0;
  clear:  both;
  visibility: visible;
  display: table; 
}

.clearfix {
  *zoom:  1;
}

</style>
