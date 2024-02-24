<template>
  <div class="container">
    <div class="left">
      <div class="cardImg">
        <img
          class="img"
          :src="`https://cdn.233.momobako.com/ygopro/pics/${this.cardInfo.id}.jpg`"
          alt="this.cardInfo.cn_name"
        />
      </div>
      <div class="desc">
        <strong class="name">{{ this.cardInfo.cn_name }}</strong>
        <br />
        <span>{{ this.cardInfo.text.types }}</span>
        <hr />
        <span>{{ this.cardInfo.text.desc }}</span>
      </div>
    </div>
    <div class="center">
      <div class="content">
        <div class="mainDeck">
          <div class="info">
            <div class="mainInfo">
              <div class="name">
                <el-input
                  v-if="true"
                  type="text"
                  v-model="name"
                  clearable
                  :disabled="disabled"
                  ><el-button
                    type="primary"
                    slot="append"
                    class="el-icon-edit"
                    @click="changeName"
                  ></el-button
                ></el-input>
              </div>
              <hr />
              <div class="count">
                <strong
                  >主牌组<span
                    v-show="this.mainDeck.length === 0 ? false : true"
                    >&nbsp;&nbsp;{{ this.mainDeck.length }}</span
                  ></strong
                >
              </div>
            </div>
            <div class="operate">
              <el-select
                v-model="value"
                placeholder="请选择"
                @change="changeDeck"
              >
                <el-option
                  v-for="item in deckName"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><el-button type="info" @click="addYDKDeck()">查看</el-button
              ><el-button type="info" @click="openDrawer(1)">导出YDK</el-button
              ><el-button type="info" @click="openDrawer(0)">导入YDK</el-button>
            </div>
          </div>
          <div class="deck">
            <draggable
              v-model="mainDeck"
              :group="{ name: 'site' }"
              animation="300"
            >
              <transition-group class="cardGroup">
                <div
                  class="card"
                  v-for="(card, index) in mainDeck"
                  :key="index"
                  @click="getCardInfo(card)"
                >
                  <img
                    :src="`https://cdn.233.momobako.com/ygopro/pics/${card.id}.jpg`"
                    alt="card.cn_name"
                  /></div
              ></transition-group>
            </draggable>
          </div>
        </div>
        <div class="extraDeck">
          <div>
            <div class="count">
              <strong
                >额外牌组<span
                  v-show="this.extraDeck.length === 0 ? false : true"
                  >&nbsp;&nbsp;{{ this.extraDeck.length }}</span
                ></strong
              >
            </div>
          </div>
          <div class="deck">
            <draggable
              v-model="extraDeck"
              :group="{ name: 'site' }"
              animation="300"
            >
              <transition-group class="cardGroup">
                <div
                  class="card"
                  v-for="(card, index) in extraDeck"
                  :key="index"
                  @click="getCardInfo(card)"
                >
                  <img
                    :src="`https://cdn.233.momobako.com/ygopro/pics/${card.id}.jpg`"
                    alt="card.cn_name"
                  /></div
              ></transition-group>
            </draggable>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="search">
        <el-input type="text" v-model="input" clearable>
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="searchCard()"
          ></el-button
        ></el-input>
      </div>
      <div class="searchList" ref="searchList">
        <draggable
          v-model="searchList"
          :group="{ name: 'site', pull: 'clone' }"
          animation="300"
          @add="add"
        >
          <transition-group class="cardGroup">
            <div
              class="card"
              v-for="(card, index) in searchList"
              :key="index"
              @click="getCardInfo(card)"
            >
              <img
                :src="`https://cdn.233.momobako.com/ygopro/pics/${card.id}.jpg`"
                alt="card.cn_name"
              /></div
          ></transition-group>
        </draggable>
      </div>
    </div>
    <el-drawer :visible.sync="drawer" :with-header="false">
      <div class="YDKBox">
        <el-input
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 15 }"
          placeholder="请输入YDK"
          v-model="textYDK"
        >
        </el-input>
        <div v-if="flag" class="but">
          <el-button type="primary" @click="empty()">清空</el-button
          ><el-button type="primary" @click="addYDKDeck()">导入</el-button>
        </div>
        <div v-else class="but">
          <el-button type="primary" @click="empty()">清空</el-button
          ><el-button type="primary" @click="copy()" ref="copy">复制</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import deckNameList from "@/utils/deckName.js";
import draggable from "vuedraggable";
export default {
  name: "cardPairing",
  components: {
    draggable,
  },
  data() {
    return {
      name: "英雄", //卡组名字
      disabled: true, //是否可以修改卡组名字
      drawer: false, //抽屉
      flag: false, //判断是导入还是导出
      textYDK: "", //卡组信息
      deckName: [],
      value: "",
      input: "天空", //搜索框值
      searchList: [], //搜索结果
      mainDeck: [], //主卡组
      extraDeck: [], //额外卡组
      cardInfo: {
        cn_name: "",
        id: 0,
        text: {
          desc: "",
          types: "",
        },
      }, //卡牌信息
    };
  },
  mounted() {
    //加载选择框的卡组列表
    this.getDeckList();
  },
  methods: {
    //搜索卡片
    async searchCard() {
      if (this.input == "") {
        this.$message.error("请输入卡名");
        return;
      }
      let res = await this.$api.card.reqCardInfo(this.input);
      if (res.status === 200) {
        this.searchList = res.data.result;
      }
    },
    //获取点击的卡片信息
    getCardInfo(card) {
      this.cardInfo = card;
    },
    //打开抽屉 flag 0为导入 1为导出
    openDrawer(flag) {
      this.drawer = true;
      if (flag === 1) {
        this.flag = false;
        this.exportYDKDeck();
      }
      if (flag === 0) {
        this.flag = true;
        this.empty();
      }
    },
    //导入卡组，给选择框
    getDeckList() {
      let options = "选择";
      deckNameList.list.map((item, index) => {
        this.deckName.push({
          value: options + index,
          label: item.name,
        });
      });
    },
    empty() {
      this.textYDK = "";
    },
    //导出卡组
    exportYDKDeck() {
      let deckList = "#created\n#main\n";
      let hr = "\n";
      this.mainDeck.map((item) => {
        deckList = deckList + item.id + hr;
      });
      deckList = deckList + "#extra\n";
      this.extraDeck.map((item) => {
        deckList = deckList + item.id + hr;
      });
      this.textYDK = deckList;
    },
    //复制YDK
    copy() {
      this.$copyText(this.textYDK).then(
        () => {
          this.$message({
            message: "复制成功",
            type: "success",
          });
        },
        () => {
          this.$message({
            message: "复制失败，请手动复制",
            type: "error",
          });
        }
      );
    },
    // 分解YDK
    async addYDKDeck() {
      let YDK = this.textYDK;
      if (YDK === "") {
        this.$message.error("请输入YDK");
        return;
      }
      let side = "!side";
      let main = "#main";
      let extra = "#extra";
      let mainDeck;
      let extraDeck;
      let deck = YDK.split(main)[1];
      console.log(YDK, deck);
      if (deck.length !== 0) {
        mainDeck = deck.split(extra)[0];
        mainDeck = mainDeck.split("\n");
        mainDeck.pop();
        mainDeck.shift();
        if (deck.split(extra)[1].length !== 0) {
          extraDeck = deck.split(extra)[1].split(side)[0];
          extraDeck = extraDeck.split("\n");
          extraDeck.pop();
          extraDeck.shift();
        }
      }
      //当前不支持side deck
      //   let sideDeck = deck.split(side)[1];

      this.$message.warning("正在导入");
      if (mainDeck !== undefined && mainDeck.length > 0) {
        await this.$api.card.reqCardInfoAll(mainDeck).then(
          this.$api.card.reqSpread((...res) => {
            let cardList = res.map((item) => {
              if (item.status === 200) {
                return item.data.result[0];
              }
            });
            this.mainDeck = cardList;
          })
        );
      }
      if (extraDeck !== undefined && extraDeck.length > 0) {
        await this.$api.card.reqCardInfoAll(extraDeck).then(
          this.$api.card.reqSpread((...res) => {
            let cardList = res.map((item) => {
              if (item.status === 200) {
                return item.data.result[0];
              }
            });
            this.extraDeck = cardList;
          })
        );
      }
      //关闭抽屉
      this.drawer = false;
    },
    //选择卡组
    changeDeck(val) {
      let name;
      this.deckName.map((item) => {
        if (item.value === val) {
          name = item.label;
        }
      });
      deckNameList.list.map((item) => {
        if (item.name === name) {
          this.textYDK = item.deck;
        }
      });
    },
    // 当别的数组向searchList拖入数据完成时触发
    add(e) {
      //删除被拖拽的元素
      this.searchList.splice(e.newIndex, 1);
    },
    //修改卡组名字
    changeName() {
      this.disabled = !this.disabled;
    },
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  padding: 10px;
  min-width: 968px;
  border: 1px solid #ddd;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  box-sizing: border-box;
  height: calc(100vh - 100px);
  overflow: hidden;
  .left {
    width: 20%;
    min-width: 234px;
    margin-right: 10px;
    border: 1px solid #ddd;
    padding: 10px;

    .cardImg {
      position: relative;
      min-width: 212px;
      padding: 5px;
      aspect-ratio: 20/29;
      .img {
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      display: block;
      font-size: 14px;
      .name {
        font-size: 22px;
        font-weight: bold;
      }
      hr {
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 10px 0;
      }
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    width: 60%;
    min-width: 342px;
    margin-right: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    .content {
      width: 100%;
      height: 100%;
      position: relative;
      .mainDeck {
        .info {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .mainInfo {
            font-weight: bold;
            .name {
              width: 100%;
              font-size: 22px;
              display: flex;
              justify-content: space-between;
            }
            .count {
              margin-top: 8px;
              font-size: 18px;
            }
          }
          .operate {
            display: flex;
            justify-content: center;
            align-items: center;
            .el-button {
              margin-left: 5px;
            }
          }
          .deck {
            min-height: 300px;
            margin-top: 10px;
            border-top: 1px solid #ddd;
          }
        }
        .deck {
          min-height: 300px;
          margin-top: 10px;
          border-top: 1px solid #ddd;
        }
        .cardGroup {
          display: flex;
          align-content: flex-start;
          flex-wrap: wrap;
          min-height: 500px;
          .card {
            margin: 8px 0;
            margin-right: 5px;
            img {
              width: 59px;
              height: 86px;
            }
          }
        }
      }

      .extraDeck {
        border-top: 1px solid #ddd;
        position: relative;
        .count {
          margin-top: 10px;
          font-weight: bold;
          font-size: 18px;
        }
        .deck {
          min-height: 189px;
          margin-top: 10px;
          border-top: 1px solid #ddd;
          .cardGroup {
            display: flex;
            align-content: flex-start;
            flex-wrap: wrap;
            min-height: 150px;
            .card {
              margin: 8px 0;
              margin-right: 5px;
              img {
                width: 59px;
                height: 86px;
              }
            }
          }
        }
      }
    }
  }

  .right {
    width: 20%;
    padding: 10px;
    border: 1px solid #ddd;

    .search {
      display: flex;
    }

    .searchList {
      margin-top: 10px;
      min-height: 300px;
      height: calc(100% - 50px);
      .cardGroup {
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        height: 720px;
        min-height: 500px;
        overflow-y: auto;
        .card {
          margin-bottom: 6px;
          flex-grow: 1;
          img {
            width: 88.5px;
            height: 129px;
          }
        }
      }
    }
  }
  .YDKBox {
    padding: 9px;
    .but {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>