<template>
  <div>
    <div class="head">
      <el-card shadow="hover">
        <el-row :gutter="24"
          ><el-col :span="8"
            ><div class="win">
              <div v-if="radiant_win">天辉胜利</div>
              <div v-else>夜魇胜利</div>
            </div></el-col
          >
          <el-col :span="8"
            ><div class="score">
              <div
                class="radiantScore"
                :style="`color:${radiant_win ? 'green' : 'red'}`"
              >
                {{ radiant_score }}
              </div>
              <div class="time">
                <div>全阵营选择(BP)</div>
                <div>{{ computeTime }}</div>
              </div>
              <div
                class="nightgauntScore"
                :style="`color:${radiant_win ? 'red' : 'green'}`"
              >
                {{ nightgaunt_score }}
              </div>
            </div></el-col
          ><el-col :span="8"
            ><div>比赛编号:{{ matchesId }}</div></el-col
          ></el-row
        ></el-card
      >
    </div>
    <div class="radiant">天辉</div>
    <matchesTab :matchesData="radiantData"></matchesTab>
    <div class="nightgaunt">夜魇</div>
    <matchesTab :matchesData="nightgauntData"></matchesTab>
  </div>
</template>

<script>
import { getRankStar, getRank } from "@/utils/getDotaResource";
import { getGoods } from "@/utils/dota/getDotaGoods";
import matchesTab from "@/components/matchesTab/index.vue";
export default {
  name: "dotaMatches",
  components: { matchesTab },
  data() {
    return {
      matchesId: 7470469551, //比赛id
      matchesData: [], //比赛数据
      radiantData: [], //天辉数据
      nightgauntData: [], //夜魇数据
      radiant_win: false, //天辉是否胜利 否则是夜魇
      radiant_score: null, //天辉比分
      nightgaunt_score: null, //夜魇比分
      duration: 0, //比赛时长
    };
  },
  beforeMount() {
    // this.matchesId = this.$route.params.id;
    this.getMatchesInfo();
  },
  mounted() {},
  computed: {
    //计算时间
    computeTime() {
      let h = Math.floor(this.duration / 3600);
      if (h < 1) {
        let m = Math.floor(this.duration / 60);
        let s = this.duration - m * 60;
        return `${m}:${s}`;
      } else {
        let m = Math.floor((this.duration - h * 3600) / 60);
        let s = this.duration - m * 60;
        return `${h}:${m}:${s}`;
      }
    },
  },
  methods: {
    //获取比赛数据
    async getMatchesInfo() {
      if (this.matchesId !== undefined) {
        let res = await this.$api.opendota.reqMatchInfo(this.matchesId);
        if (res.status === 200) {
          let data = res.data;
          //遍历装备,添加装备图片url
          let num = [
            "item_0",
            "item_1",
            "item_2",
            "item_3",
            "item_4",
            "item_5",
          ];
          let url = ["url_0", "url_1", "url_2", "url_3", "url_4", "url_5"];
          data.players.forEach((element) => {
            //添加中立装备
            if (element.item_neutral !== 0) {
              element.item_neutral_url = this.itemUrl(element.item_neutral);
            }
            //添加装备图片url
            url.forEach((url, index) => {
              if (element[num[index]] !== 0) {
                element[url] = this.itemUrl(element[num[index]]);
              } else {
                element[url] = 0;
              }
            });
          });
          this.radiantData = data.players.slice(0, 5); // 天辉数据
          this.nightgauntData = data.players.slice(5); // 夜魇数据
          this.radiant_win = data.radiant_win; // 是否胜利
          //比分
          this.radiant_score = data.radiant_score;
          this.nightgaunt_score = data.dire_score;
          this.duration = data.duration; // 游戏时长
        }
      }
    }, //获取英雄名字
    heroName(hero_id) {
      if (hero_id === null && hero_id === undefined) return;
      let heroList = this.$store.state.dota.heroList;
      let hero = heroList.filter((hero) => {
        if (hero.id === hero_id) return hero;
      });
      if (hero.length === 0) return;
      let name = hero[0].name;
      name = name.substring(14);
      return name;
    },
    //获取英雄头像图片
    heroUrl(hero_id) {
      let name = this.heroName(hero_id);
      if (name === undefined) return;
      let url = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name}.png`;
      return url;
    },
    rank(rank) {
      return getRank(rank);
    },
    rankStar(rank) {
      return getRankStar(rank);
    },
    //获取装备图片url
    itemUrl(itemId) {
      return getGoods(itemId);
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  .el-row {
    height: 100px;
    .el-col {
      font-size: 1.5em;
      font-weight: bold;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .score {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          margin: 10px;
          font-size: 1.2em;
        }
        .time {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .radiantScore {
          font-size: 2em;
        }
        .nightgauntScore {
          font-size: 2em;
        }
      }
    }
  }
}
.radiant {
  margin: 20px 0 0 10px;
  font-size: 2em;
}
.nightgaunt {
  margin: 20px 0 0 10px;
  font-size: 2em;
}
</style>