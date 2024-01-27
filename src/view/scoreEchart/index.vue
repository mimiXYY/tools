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
      ><el-button type="primary" @click="debounceHandlerAddScore()"
        >确认</el-button
      >
    </div>
    <div id="main">
      <div ref="eChart" style="width: 90%; height: 600px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getDate } from "@/utils/getDate";
import _ from "lodash";
export default {
  name: "scoreEchart",
  data() {
    return {
      score: "",
      hero: "",
      yMin: "0",
      yMax: "4000",
      imgUrl: require("@/assets/img/dota2.jpg"),
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
          min: this.yMin, // 设置最小值
          max: this.yMax, // 设置最大值
          axisLabel: {
            formatter: "{value} 分", // 设置刻度标签格式化模板
          },
        },
        // 坐标滚动条
        dataZoom: [
          {
            show: true,
            start: 80,
            end: 100,
          },
          {
            type: "inside",
            start: 94,
            end: 100,
          },
          {
            show: true,
            yAxisIndex: 0,
            filterMode: "empty",
            width: 30,
            height: "80%",
            showDataShadow: false,
            left: "93%",
          },
        ],
        series: [
          {
            data: [],
            type: "line",
            // 不显示数据点
            showSymbol: false,
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
    //防抖添加分数
    debounceHandlerAddScore: _.debounce(async function () {
      let date = getDate(Date.now());
      let data = { date: date, score: this.score, hero: this.hero };
      // 发送时间数据
      let result = await this.$api.score.saveScore(data);
      if (result.data === "ok" && result.status === 200) {
        this.success();
        //清空输入框
        this.score = null;
        this.hero = "";
        // 获取最新分数
        this.getScore();
      } else {
        this.warning();
      }
      getDate();
    }, 1000),
    // 添加分数
    addScore() {
      this.debounceHandlerAddScore();
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
        // 数据问题，后续改为数据库就没问题，在这先改造数据
        score.splice(score.length - 1, 1);
        // 过滤出最大和最小值
        const arr = score.map((item) => {
          return Number(item);
        });
        // 最小值
        Array.min = function (arr) {
          return Math.min.apply(Math, arr);
        };
        // 最大值
        Array.max = function (arr) {
          return Math.max.apply(Math, arr);
        };
        // 修改y值坐标
        this.yMin = Array.min(arr) - 500;
        this.yMax = Array.max(arr) + 500;
        let option = {
          xAxis: {
            type: "category",
            data: date,
          },
          yAxis: {
            min: this.yMin, // 设置最小值
            max: this.yMax, // 设置最大值
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

<style scoped>
#main {
  display: flex;
  justify-content: center;
  width: 100%;
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