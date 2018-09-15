import Vue from 'vue'
import Vuex from 'vuex'

import ChangeActive from './modules/select-change-ative.js'
import OnScroll from './modules/onscroll.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		ChangeActive,OnScroll
	}
	

})