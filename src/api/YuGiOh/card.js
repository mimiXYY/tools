import request from '@/utils/request';
//获取卡片数据
export const reqCardInfo = (card) => request({
    url: `/v0/?search=${card}`,
    method: 'get'
});