import request from "@/utils/request";
//获取获取全部英雄数据 Id对应的名字
export const reqHero = () => request({
    url: "/api/heroes",
    method: 'get'
})
//最近比赛
export const reqRecentMatches = (account_id) => request({
    url: `/api/players/${account_id}/recentMatches`,
    method: 'get'
})
//用户信息
export const reqUserInfo = (account_id) => request({
    url: `/api/players/${account_id}`,
    method: 'get'
})
