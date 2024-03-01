import request from "@/utils/request";
//获取全部英雄数据
export const reqHeros = (account_id) => request({
    url: `/list-api/api/players/${account_id}/heroes`,
    method: 'get'
})
//最近比赛
export const reqRecentMatches = (account_id) => request({
    url: `/list-api/api/players/${account_id}/recentMatches`,
    method: 'get'
})
//用户信息
export const reqUserInfo = (account_id) => request({
    url: `/list-api/api/players/${account_id}`,
    method: 'get'
})
//该次比赛数据
export const reqMatchInfo = (match_id) => request({
    url: `/list-api/api/matches/${match_id}`,
    method: 'get'
})
