import request from "@/utils/request";
//获取获取全部英雄数据 Id对应的名字
export const reqHero = () => request({
    url: "//api.opendota.com/api/heroes",
    method: 'get'
})
