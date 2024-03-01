<!-- 废弃 -->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        fixed
        type="index"
        label="序号"
        width="125px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="日期"
        min-width="125px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="hero"
        label="英雄"
        min-width="125px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="score"
        label="分数"
        min-width="125px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="125px"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ScoreManage",
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.getScore();
  },
  methods: {
    async getScore() {
      const result = await this.$api.score.reqScore();
      if (result.status === 200) {
        let date = result.data.date.trim().split(",");
        let score = result.data.score.trim().split(",");
        for (let index = 0; index < 12; index++) {
          const newData = {
            date: date[index],
            hero: "喜羊羊",
            score: score[index],
          };
          this.tableData.push(newData);
        }
      }
    },
  },
};
</script>

<style scoped>
</style>