<template>
  <div>
    <div v-if="loading">
      <el-row class="head">
        <el-col :span="7"
          ><div class="search">
            <el-input
              v-model="input"
              placeholder="输入steam32位ID"
              clearable
              onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value"
              onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value"
              onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}"
              ><el-button
                type="primary"
                slot="append"
                icon="el-icon-search"
                @click="getUserInfo"
              ></el-button
            ></el-input></div></el-col
      ></el-row>
    </div>
    <el-skeleton :loading="loading" animated :rows="6" v-show="!flag">
      <template slot="template"> </template>
      <template>
        <div>
          <el-row class="head">
            <el-col :span="7"
              ><div class="search">
                <el-input
                  v-model="input"
                  placeholder="输入steam32位ID"
                  clearable
                  onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value"
                  onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value"
                  onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}"
                  ><el-button
                    type="primary"
                    slot="append"
                    icon="el-icon-search"
                    @click="getUserInfo"
                  ></el-button
                ></el-input></div
            ></el-col>
            <el-col :span="3" class="heros">
              <div>
                <el-card shadow="hover" class="card">
                  <div class="heroCard">
                    <el-image
                      class="avatar"
                      style="width: 64px; height: 36px"
                      fil="fill"
                      :src="heroUrl(heros[0].id)"
                    ></el-image>
                    <div style="width: 100%; display: inline-block">
                      <el-statistic :title="`${heros[0].games}场`">
                        <template slot="formatter">
                          {{
                            ((heros[0].win * 100) / heros[0].games).toFixed(1)
                          }}%
                        </template></el-statistic
                      >
                    </div>
                  </div></el-card
                >
              </div>
            </el-col>
            <el-col :span="3" class="heros">
              <div>
                <el-card shadow="hover" class="card">
                  <div class="heroCard">
                    <el-image
                      class="avatar"
                      fil="fill"
                      style="width: 64px; height: 36px"
                      :src="heroUrl(heros[1].id)"
                    ></el-image>
                    <div style="width: 100%; display: inline-block">
                      <el-statistic :title="`${heros[1].games}场`">
                        <template slot="formatter">
                          {{
                            ((heros[1].win * 100) / heros[1].games).toFixed(1)
                          }}%
                        </template></el-statistic
                      >
                    </div>
                  </div></el-card
                >
              </div>
            </el-col>
            <el-col :span="3" class="heros">
              <div>
                <el-card shadow="hover" class="card">
                  <div class="heroCard">
                    <el-image
                      class="avatar"
                      fil="fill"
                      style="width: 64px; height: 36px"
                      :src="heroUrl(heros[2].id)"
                    ></el-image>
                    <div style="width: 100%; display: inline-block">
                      <el-statistic :title="`${heros[2].games}场`">
                        <template slot="formatter">
                          {{
                            ((heros[2].win * 100) / heros[2].games).toFixed(1)
                          }}%
                        </template></el-statistic
                      >
                    </div>
                  </div></el-card
                >
              </div>
            </el-col>
            <el-col :span="5" class="user">
              <div class="avatar">
                <el-avatar
                  shape="square"
                  :size="80"
                  :src="avatarUrl"
                ></el-avatar>
              </div>
              <div class="name">
                <strong>{{ personaName }}</strong>
              </div>
            </el-col>
            <el-col :span="3" class="image"
              ><el-image
                style="width: 90px; height: 90px"
                :src="rankUrl"
              ></el-image
              ><el-image
                v-show="rank_tier !== null"
                class="star"
                style="width: 90px; height: 90px"
                :src="rankStarUrl"
              ></el-image
            ></el-col>
          </el-row>
          <el-table
            :data="dotaMatches"
            style="width: 100%"
            border
            class="tab"
            :highlight-current-row="true"
          >
            <el-table-column label="英雄" width="width" align="center">
              <template slot-scope="scope">
                <div class="hero">
                  <el-image
                    fil="fill"
                    style="width: 52px; height: 29px"
                    :src="heroUrl(scope.row.hero_id)"
                  ></el-image>
                  <el-link
                    @click="toLink(scope.row.match_id)"
                    type="primary"
                    :underline="false"
                    class="name"
                    >{{ heroName(scope.row.hero_id) }}</el-link
                  >
                </div>
              </template>
            </el-table-column>
            <el-table-column label="胜败" width="width" align="center">
              <template slot-scope="scope">
                <div>
                  <el-link
                    @click="toLink(scope.row.match_id)"
                    v-if="scope.row.radiant_win"
                    :underline="false"
                    style="color: #66bb6a"
                  >
                    比赛胜利
                  </el-link>
                  <el-link
                    @click="toLink(scope.row.match_id)"
                    :underline="false"
                    v-else
                    style="color: #ff4c4c"
                    >比赛失败</el-link
                  >
                  <div>{{ getLobbyType(scope.row.lobby_type) }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="游戏模式" width="width" align="center">
              <template slot-scope="scope"
                ><div>{{ getGameMode(scope.row.game_mode) }}</div>
                <div>{{ rank }} {{ rankStar }}</div></template
              >
            </el-table-column>
            <el-table-column
              prop="duration"
              label="时长"
              width="150"
              align="center"
            >
              <template slot-scope="scope">
                <div>{{ computeTime(scope.row.duration) }}</div>
              </template>
            </el-table-column>

            <el-table-column label="击杀/死亡/助攻" width="350" align="center">
              <template slot-scope="scope">
                <div>
                  <div class="kda">
                    {{ scope.row.kills }} / {{ scope.row.deaths }} /
                    {{ scope.row.assists }}
                  </div>
                  <div class="progress">
                    <div
                      class="kills"
                      :style="{
                        width: `${
                          (scope.row.kills * 100) /
                          (scope.row.kills +
                            scope.row.deaths +
                            scope.row.assists)
                        }%`,
                      }"
                    ></div>
                    <div
                      class="deaths"
                      :style="{
                        width: `${
                          (scope.row.deaths * 100) /
                          (scope.row.kills +
                            scope.row.deaths +
                            scope.row.assists)
                        }%`,
                      }"
                    ></div>
                    <div
                      class="assists"
                      :style="{
                        width: `${
                          (scope.row.assists * 100) /
                          (scope.row.kills +
                            scope.row.deaths +
                            scope.row.assists)
                        }%`,
                      }"
                    ></div>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div> </template
    ></el-skeleton>
  </div>
</template>

<script>
import {
  getRankImg,
  getRankStarImg,
  getRankStar,
  getRank,
} from "@/utils/getDotaResource";
export default {
  name: "dotaQuery",
  data() {
    return {
      input: 134861381, //搜索框内容
      personaName: "", //用户名
      avatarUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png", //user头像url
      rank_tier: null, //段位
      dotaMatches: [], //对局数据
      cnNumber: ["一", "二", "三", "四", "五"],
      heros: [
        { id: null, games: null, win: null },
        { id: null, games: null, win: null },
        { id: null, games: null, win: null },
      ], //游玩最多的3个英雄数据
      flag: false, //等搜索的时候再显示骨架
      loading: true, //显示骨架屏
    };
  },
  computed: {
    //段位
    rankUrl() {
      return getRankImg(this.rank_tier);
    },
    //星数
    rankStarUrl() {
      if (this.rank_tier === null) {
        return;
      } else {
        return getRankStarImg(this.rank_tier);
      }
    },
    rank() {
      return getRank(this.rank_tier);
    },
    rankStar() {
      return this.cnNumber[getRankStar(this.rank_tier) - 1];
    },
  },
  beforeMount() {},
  mounted() {
    this.flag = true; //等搜索的时候再显示骨架
  },
  methods: {
    //跳转该场比赛
    toLink(match_id) {
      //开一个新的网页
      window.open(`/dotaMatches/${match_id}`);
      // //跳转
      // this.$router.push({
      //   name: "dotaMatche",
      //   params: {
      //     id: match_id,
      //   },
      // });
    },
    //计算时间
    computeTime(time) {
      let h = Math.floor(time / 3600);
      if (h < 1) {
        let m = Math.floor(time / 60);
        let s = time - m * 60;
        return `${m}:${s}`;
      } else {
        let m = Math.floor((time - h * 3600) / 60);
        let s = time - m * 60;
        return `${h}:${m}:${s}`;
      }
    },
    //获取英雄名字
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
    //获取游戏模式
    getGameMode(game_mode) {
      let gameMode = this.$store.state.dota.gameMode;
      let mode = gameMode[game_mode].name;
      mode = mode.substring(10);
      return mode;
    },
    //获取游戏的匹配方式
    getLobbyType(lobby_type) {
      let lobbyType = this.$store.state.dota.lobbyType;
      let name = lobbyType[lobby_type].name;
      name = name.substring(11);
      return name;
    },
    //获取用户信息
    async getUserInfo() {
      this.flag = false; //显示骨架
      //显示骨架
      this.loading = true;
      let res = await this.$api.opendota.reqUserInfo(this.input);
      if (res.status === 200) {
        let r = res.data;
        this.personaName = r.profile.personaname;
        this.avatarUrl = r.profile.avatarfull;
        this.rank_tier = r.rank_tier;
      }
      //获取最近比赛
      this.getRecentMatches();
      //获取游玩过的英雄
      this.getHeros();
      //隐藏骨架
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    //获取游玩过的英雄
    async getHeros() {
      let res = await this.$api.opendota.reqHeros(this.input);
      if (res.status === 200) {
        //取前三个次数最多游玩英雄
        let heros = res.data.slice(0, 3);
        heros.map((item, index) => {
          let hero = {
            id: item.hero_id,
            games: item.games,
            win: item.win,
          };
          this.heros.splice(index, 1, hero);
        });
      }
    },
    //获取最近比赛
    async getRecentMatches() {
      let res = await this.$api.opendota.reqRecentMatches(this.input);
      if (res.status === 200) {
        this.dotaMatches = res.data;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  min-width: 50%;
  .el-col {
    height: 100px;
  }
  .search {
    width: 60%;
    line-height: 100px;
  }
  .user {
    display: flex;
    align-items: center;
    .name {
      font-size: 2em;
    }
  }
  .image {
    position: relative;
    float: right;
    .star {
      position: absolute;
      left: 0;
    }
  }
  .heros {
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      .heroCard {
        display: flex;
        align-items: center;
      }
    }
  }
}
.tab {
  margin-top: 20px;
  .hero {
    display: flex;
    justify-items: baseline;
    .name {
      margin-left: 10px;
      line-height: 30px;
    }
  }
  .kda {
    line-height: 30px;
    align-content: center;
  }
  .progress {
    height: 6px;
    display: flex;
    .kills {
      background-color: green;
      height: 100%;
    }
    .deaths {
      background-color: red;
      height: 100%;
    }
    .assists {
      background-color: #bdbbbb;
      height: 100%;
    }
  }
}
</style>