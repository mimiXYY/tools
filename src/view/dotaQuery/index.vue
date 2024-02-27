<template>
  <div>
    <el-row class="head">
      <el-col :span="13"
        ><div class="search">
          <el-input v-model="input" placeholder="输入steam32位ID"
            ><el-button
              type="primary"
              slot="append"
              icon="el-icon-search"
            ></el-button
          ></el-input></div
      ></el-col>
      <el-col :span="7" class="user">
        <div class="avatar">
          <el-avatar shape="square" :size="80" :src="avatarUrl"></el-avatar>
        </div>
        <div class="name">
          <strong>{{ personaName }}</strong>
        </div>
      </el-col>
      <el-col :span="4" class="image"
        ><el-image style="width: 90px; height: 90px" :src="rankUrl"></el-image
      ></el-col>
    </el-row>
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="prop" label="英雄" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="胜败" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="游戏模式" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="时长" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="击杀" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="死亡" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="助攻" width="width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getRankImg } from "@/utils/getDotaResource";
export default {
  name: "dotaQuery",
  data() {
    return {
      input: "", //搜索框内容
      personaName: "喜羊羊_official", //用户名
      avatarUrl:
        "https://avatars.steamstatic.com/b30cd8a3574277775e0ee65f1d8bd1b02998bdb5.jpg", //user头像url
      rank_tier: 61, //段位
    };
  },
  computed: {
    rankUrl() {
      return getRankImg(this.rank_tier);
    },
  },
  beforeMount() {
    //在挂载前获取数据
    this.getHeroList();
  },
  mounted() {},
  methods: {
    //获取全部英雄数据
    async getHeroList() {
      let heroList = await this.$api.opendota.reqHero();
      console.log(heroList);
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  .el-col {
    height: 100px;
  }
  .search {
    width: 40%;
    line-height: 100px;
  }
  .user {
    display: flex;
    align-items: center;
    .name {
      font-size: 2em;
      margin-left: 30px;
    }
  }
  .image {
    float: right;
  }
}
</style>