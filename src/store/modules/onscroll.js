const state = {
	distence: 0,
}


const getters = {
	distence() {
		return state.distence
	}
}


const mutations = {

}

const actions = {
   onScroll({commit},{el,params=200}) {
   	  var dom = document.documentElement;
   	  var elHeight = el.offsetTop
   	  window.onscroll = function() {
        var height = dom.scrollTop
        var wheight = window.innerHeight
        if(elHeight-height-wheight <params) {
        	console.log(elHeight)
        }
   	  }
   }
}


export default {
	state, getters, mutations, actions
}