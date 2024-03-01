import request from '@/utils/request';
//获取卡片数据
export const reqCardInfo = (card) => request({
    url: `/v0/?search=${card}`,
    method: 'get'
});
//并发 
// export const reqCardInfoAll = (cardList) => request.all(
//     cardList.map(card => { return request.get(`/v0/?search=${card}`) })
// )
// export const reqSpread = request.spread