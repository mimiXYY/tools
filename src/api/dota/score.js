//废弃
import request from '@/utils/request';
export const reqScore = () => request({
    url: "/api/getScore",
    method: 'get'
});
export const saveScore = (data) => request({
    url: "/api/saveScore",
    method: 'post',
    data: data
});