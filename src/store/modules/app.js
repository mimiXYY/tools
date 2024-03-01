const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }) {
        commit('CLOSE_SIDEBAR')
    },
}		// 准备actions——用于响应组件中的动作
const mutations = {
    TOGGLE_SIDEBAR: state => { state.opened = false },	// 响应toggleSideBar动作，并操作state数据（state）
    CLOSE_SIDEBAR: state => { state.opened = true },		// 响应closeSideBar动作，并操作state数据（state）
}	// 准备mutations——用于操作数据（state）
const state = {
    opened: false			// 准备一个状态opened，初始值为false
}			// 准备state——用于存储数据
const getters = {}
export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}	