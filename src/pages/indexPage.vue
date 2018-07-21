<template>
  <div class="center" > 

    <div class="leftMenu">
      <!-- <router-link :to="{path: '/editPage'}">
      <div class="gotoEdit">
        我要发布
      </div>
    </router-link> -->
      <div>
        <LeftMenu />
      </div>
    </div>
    <div class="main-content">
      <IndexMain /> 
    </div>
  </div>
</template>

<script>
import LeftMenu from '../components/leftMenu.vue'
import IndexMain from '../components/indexMain.vue'
import router from 'vue-router'
export default { 
  components: {
    LeftMenu,IndexMain
  },
  data () {
    return {
      
    }
  },
  methods: {
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.center {
		width:  100%;
		height:  100vh;
	}
  .leftMenu {
    float:  left;
    width:  18%;
  }

  .main-content {
    width:  calc(82% - 1.9em);
    margin:  1.7em .6em 1.7em 1.3em;
    float:  left;
  }
  .gotoEdit{
    display: inline-block;
    padding:  0.6em .95em ;
    cursor: pointer;
    border:  1px solid gray;
    box-shadow: 1px 1px 5px gray;
    color:  rgb(30,35,154);
    border-radius: 10px;
    margin:  .6em 0;
  }
  .gotoEdit:hover{
     color:  #fff;
     background:  black;
     opacity: .5;
  }
  @media screen and (max-width: 850px) {
    .leftMenu {
      width: auto;
      /* position: relative; */
    }
    .main-content {
      width:  calc(100% - 2em)!important;
      margin-left:  1em;
      margin-right:  1em;

    }
  }
  
</style>
