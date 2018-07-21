import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

	state:{
		active: true
	},
	mutations:{
		mChangeActive(state,param) {
			if(param==0) {
				state.active = false;
			}else {

				state.active = true;
			}
			
		}
	},

	actions: {
		changeActive(store,param) {
			
			store.commit('mChangeActive',param)
		} 
	}

})