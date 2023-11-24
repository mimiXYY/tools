<template>
  <div>
    <div class="container">
      <img :src="imgUrl" />
      <el-input
        v-model="hero"
        placeholder="请输入英雄"
        style="width: 200px; margin-right: 20px"
      ></el-input
      ><el-input
        v-model="score"
        placeholder="请输入分数"
        maxlength="5"
        style="width: 200px; margin-right: 20px"
      ></el-input
      ><el-button type="primary" @click="addScore()">确认</el-button>
    </div>
    <div id="main">
      <div ref="eChart" style="width: 90%; height: 600px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getDate } from "@/utils/getDate";
export default {
  name: "scoreEchart",
  data() {
    return {
      score: "",
      hero: "",
      imgUrl: require("@/assets/dota2.jpg"),
      option: {
        //工具
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {},
          },
        },
        title: {
          text: "DOTA2分数",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
          // 动态调整 用计算实时获取
          min: 0, // 设置最小值
          max: 4000, // 设置最大值
          axisLabel: {
            formatter: "{value} 分", // 设置刻度标签格式化模板
          },
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
            // 显示数据中最大值和最小值
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
          },
        ],
      },
      myChart: null,
    };
  },
  mounted() {
    this.getScore();
    this.createEchart();
  },
  methods: {
    createEchart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.eChart);
      this.myChart = myChart;
      // 绘制图表
      this.myChart.setOption(this.option);
    },
    // 添加分数
    async addScore() {
      let date = getDate(Date.now());
      let data = { date: date, score: this.score, hero: this.hero };
      // 发送时间数据
      let result = await this.$api.score.saveScore(data);
      if (result.data === "ok" && result.status === 200) {
        //发成功或失败对于相应方法 success() warning()
        this.success();
        //清空输入框
        this.score = 0;
        this.hero = "";
        // 获取最新分数
        this.getScore();
      } else {
        this.warning();
      }
    },
    success() {
      this.$message({
        message: "发送成功",
        type: "success",
      });
    },
    warning() {
      this.$message({
        message: "请刷新网页后重试",
        type: "warning",
      });
    },
    //获取分数
    async getScore() {
      const result = await this.$api.score.reqScore();
      if (result.status === 200) {
        let date = result.data.date.trim().split(",");
        let score = result.data.score.trim().split(",");

        let option = {
          xAxis: {
            type: "category",
            data: date,
          },
          series: [
            {
              data: score,
              type: "line",
              smooth: true,
            },
          ],
        };
        this.myChart.setOption(option);
      }
    },
  },
};
</script>

<style>
#main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px; /* 设置容器高度为视口高度，使图片垂直居中 */
}
img {
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
</style>