export const getRankImg = (rank_tier) => {
    let number = Math.floor(rank_tier / 10)  //取前面的整数
    return `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${number}.png`
}
export const getHeroImg = (hero1) => {
    let hero = hero1
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero}.png`
}