import heros from '@/utils/dota/heros'  //导入全部英雄的名字
import gameMode from "@/utils/dota/gameMode"  //导入游戏的模式;
import lobbyType from "@/utils/dota/lobbyType";//导入游戏的匹配方式;
const actions = {

}
const mutations = {


}
const state = {
    heroList: heros,
    gameMode: gameMode,
    lobbyType: lobbyType,

}
const getters = {
}
export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}