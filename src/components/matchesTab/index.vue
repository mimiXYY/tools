<template>
  <div class="matches">
    <el-table :data="matchesData" style="width: 100%">
      <el-table-column label="玩家" width="width"
        ><template slot-scope="scope">
          <div class="user">
            <el-image
              style="width: 52px; height: 29px"
              :src="heroUrl(scope.row.hero_id)"
              fit="fill"
            ></el-image>
            <div class="info">
              <div
                class="name"
                :style="{
                  color: `${
                    scope.row.personaname === undefined ? 'black' : '#66bbff'
                  }`,
                }"
              >
                {{
                  scope.row.personaname === undefined
                    ? "匿名"
                    : scope.row.personaname
                }}
              </div>
              <div class="rank" v-if="scope.row.rank_tier !== null">
                {{ rank(scope.row.rank_tier) }}
                {{ rankStar(scope.row.rank_tier) }}
              </div>
              <div class="rank" v-else>未知</div>
            </div>
          </div>
        </template></el-table-column
      >
      <el-table-column prop="level" label="等级" width="100" align="center">
      </el-table-column>
      <el-table-column label="击杀" width="40" align="center">
        <template slot-scope="scope">
          <div style="color: green">{{ scope.row.kills }}</div>
        </template>
      </el-table-column>
      <el-table-column label="死亡" width="40" align="center"
        ><template slot-scope="scope">
          <div style="color: red">{{ scope.row.deaths }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="assists" label="助攻" width="40" align="center">
      </el-table-column
      ><el-table-column prop="last_hits" label="正补" width="45" align="center">
      </el-table-column>
      <el-table-column prop="denies" label="反补" width="45" align="center">
      </el-table-column>
      <el-table-column label="总资产" width="70" align="center"
        ><template slot-scope="scope">
          <div style="color: goldenrod">
            {{ (scope.row.net_worth / 1000).toFixed(1) }}K
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="gold_per_min"
        label="GPM"
        width="70"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="xp_per_min" label="XPM" width="70" align="center">
      </el-table-column>
      <el-table-column
        prop="hero_damage"
        label="英雄伤害"
        width="80"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="tower_damage"
        label="防御塔伤害"
        width="90"
        align="center"
      >
      </el-table-column>
      <el-table-column label="英雄治疗" width="80" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.hero_healing > 0 ? true : false">
            {{ scope.row.hero_healing }}
          </div>
          <div v-else>-</div></template
        >
      </el-table-column>
      <el-table-column label="物品" width="width" align="center">
        <template slot-scope="scope"
          ><div class="goods">
            <el-image
              v-if="scope.row.item_0 !== 0"
              :src="scope.row.url_0"
              fit="fill"
            ></el-image
            ><el-image
              v-if="scope.row.item_1 !== 0"
              :src="scope.row.url_1"
              fit="fill"
            ></el-image
            ><el-image
              v-if="scope.row.item_2 !== 0"
              :src="scope.row.url_2"
            ></el-image
            ><el-image
              v-if="scope.row.item_3 !== 0"
              :src="scope.row.url_3"
            ></el-image
            ><el-image
              v-if="scope.row.item_4 !== 0"
              :src="scope.row.url_4"
              fit="fill"
            ></el-image
            ><el-image
              v-if="scope.row.item_5 !== 0"
              :src="scope.row.url_5"
              fit="fill"
            ></el-image></div></template
      ></el-table-column>
      <el-table-column label="中立装备" width="80" align="center"
        ><template slot-scope="scope"
          ><div class="neutral">
            <el-image
              v-if="scope.row.item_neutral !== 0"
              :src="scope.row.item_neutral_url"
              fit="fill"
            ></el-image></div
        ></template>
      </el-table-column>
      <el-table-column label="阿哈利姆" width="80" align="center">
        <template slot-scope="scope"
          ><div class="aghanims">
            <el-image
              :src="`https://www.opendota.com/assets/images/dota2/scepter_${scope.row.aghanims_scepter}.png`"
              fit="fill"
            ></el-image
            ><el-image
              :src="`https://www.opendota.com/assets/images/dota2/shard_${scope.row.aghanims_shard}.png`"
              fit="fill"
            ></el-image></div></template
      ></el-table-column>
      <!-- <el-table-column label="增益状态" width="80" align="center"
          ><template slot-scope="scope">{{ scope.row.personaname }}</template>
        </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { getRankStar, getRank } from "@/utils/getDotaResource";
export default {
  name: "matchesTab",
  props: ["matchesData"],
  data() {
    return {};
  },
  methods: {
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
  },
};
</script>
<style lang="scss" scoped>
.matches {
  margin-top: 10px;
  .user {
    display: flex;
    align-items: center;
    .info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
    }
  }
  .level {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .goods {
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    .el-image {
      width: 38px;
      height: 28px;
      margin: 1px;
    }
  }
  .neutral {
    .el-image {
      width: 38px;
      height: 28px;
    }
  }
  .aghanims {
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-image {
      width: 50%;
      height: 50%;
    }
  }
}
</style>