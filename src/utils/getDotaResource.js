
export const getRankImg = (rank_tier) => {
    let number = Math.floor(rank_tier / 10)  //取前面的整数
    return `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${number}.png`
}
export const getRankStarImg = (rank_tier) => {
    let rank = Math.floor(rank_tier / 10)  //取前面的整数
    let number = rank_tier - rank * 10
    return `https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${number}.png`
}
export const getRank = (rank_tier) => {
    let number = Math.floor(rank_tier / 10)  //取前面的整数
    const rank = ['先锋', '卫士', '中军', '统帅', '传奇', '万古流芳', '超凡入圣', '冠绝一世']
    if (rank === null) {
        return '未知'
    } else {
        return rank[number - 1]
    }
}
export const getRankStar = (rank_tier) => {
    let rank = Math.floor(rank_tier / 10)  //取前面的整数
    let number = rank_tier - rank * 10
    return number
}