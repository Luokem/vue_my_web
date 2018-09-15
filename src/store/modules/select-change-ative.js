/*
 一:  头部header 搜索框状态
*/

const state = {
		active: true,
	}

const getters = {
    select() {
    	return state.active
    }
}

const mutations = {
	mChangeActive(state,param) {
			if(param==0) {
				state.active = false;
			}else {
				state.active = true;
			}
			
		}
}

const actions = {
	changeActive({commit},param) {
			
			commit('mChangeActive',param)
		}
}

export default {
	state, getters, mutations, actions
}