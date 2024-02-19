<template>
  <div class="wapping">
    <div class="info">
      <div class="imgBox">
        <img class="cardImg" :src="cardImgUrl" />
      </div>
      <div class="name">
        <strong style="font-weight: 700; font-size: 16px">{{
          infoBox.cn_name
        }}</strong>
        <br />
        <span>{{ infoBox.text.types }}</span>
        <hr />
        <span>{{ infoBox.text.desc }}</span>
      </div>
    </div>
    <div class="deck">
      <div class="mainDeck">
        <draggable
          v-model="mainDeck"
          group="site"
          animation="300"
          ghostClass="ghost"
          chosenClass="chosen"
          ><transition-group class="group"
            ><div class="card" v-for="(card, index) in mainDeck" :key="index">
              <div @click="getCardInfo(card)">
                <img
                  class="cardImg"
                  :src="`https://cdn.233.momobako.com/ygopro/pics/${card.id}.jpg`"
                />
              </div></div></transition-group
        ></draggable>
      </div>
      <div class="extraDeck">
        <draggable
          v-model="extraDeck"
          group="site"
          animation="300"
          ghostClass="ghost"
          chosenClass="chosen"
          ><transition-group class="group"
            ><div class="card" v-for="(card, index) in extraDeck" :key="index">
              <div @click="getCardInfo(card)">
                <img
                  class="cardImg"
                  :src="`https://cdn.233.momobako.com/ygopro/pics/${card.id}.jpg`"
                />
              </div></div></transition-group
        ></draggable>
      </div>
    </div>
    <div class="right">
      <div class="search">
        <el-input
          v-model="searchInput"
          placeholder="请输入内容"
          style="margin-right: 20px"
          @keydown.enter.native="searchCard()"
        ></el-input>
        <el-button type="primary" @click="searchCard()">搜索</el-button>
      </div>
      <div class="YDK">
        <el-button type="primary" @click="openDrawer(1)">添加YDK</el-button
        ><el-button type="primary" @click="openDrawer(0)">导出YDK</el-button>
      </div>
      <div class="searchList">
        <draggable
          v-model="cardList"
          :group="{ name: 'site', pull: 'clone' }"
          animation="300"
          ghostClass="ghost"
          chosenClass="chosen"
          @add="add"
          ><transition-group class="group"
            ><div class="card" v-for="(card, index) in cardList" :key="index">
              <div @click="getCardInfo(card)">
                <img
                  class="cardImg"
                  :alt="card.cn_name"
                  :src="`https://cdn.233.momobako.com/ygopro/pics/${card.id}.jpg`"
                />
              </div></div></transition-group
        ></draggable>
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
          ><el-button type="primary" @click="addYDKDeck()">添加</el-button>
        </div>
        <div v-else class="but">
          <el-button type="primary" @click="empty()">清空</el-button
          ><el-button type="primary" @click="exportYDKDeck()">导出</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "cardPairing",
  components: {
    draggable,
  },
  data() {
    return {
      mainDeck: [], //主卡组
      extraDeck: [], //额外卡组
      cardList: [], //搜索结果列表
      searchInput: "天", //搜索输入框
      infoBox: {
        id: "",
        cn_name: "",
        text: {
          types: "",
          pdesc: "",
          desc: "",
        },
      },
      cardImgUrl: "", //点击后显示的图片
      drawer: false, //抽屉标识
      textYDK: "", //抽屉文本
      addYDK: "", //添加YDK
      exportYDK: "", //导出YDK
      flag: true, //添加还是导出YDK
    };
  },
  mounted() {},
  methods: {
    async searchCard() {
      //提示内容为空
      if (this.searchInput === "") return;
      let result = await this.$api.card.reqCardInfo(this.searchInput);
      if (result.status === 200) {
        this.cardList = result.data.result;
      }
    },
    //点击获取卡片信息
    getCardInfo(card) {
      console.log(card);
      this.infoBox = card;
    },
    // 当别的数组向searchList拖入数据完成时触发
    add(e) {
      //删除被拖拽的元素
      this.cardList.splice(e.newIndex, 1);
    },
    //打开抽屉 flag 1为添加 0为导出
    openDrawer(flag) {
      this.drawer = true;
      if (flag === 1) {
        this.flag = true;
      }
      if (flag === 0) {
        this.flag = false;
      }
    },
    //清空抽屉文本
    empty() {
      this.textYDK = "";
    },
    //添加YDK到deck里面
    async addYDKDeck() {
      let YDK = this.textYDK;
      if (YDK === "") {
        this.$message.error("请输入YDK");
        return;
      }
      let side = "!side";
      let main = "#main";
      let extra = "#extra";
      let deck = YDK.split(main)[1];
      let mainDeck = deck.split(extra)[0];
      let extraDeck = deck.split(extra)[1].split(side)[0];
      //当前不支持side deck
      //   let sideDeck = deck.split(side)[1];
      mainDeck = mainDeck.split("\n");
      extraDeck = extraDeck.split("\n");
      mainDeck.pop();
      extraDeck.pop();
      mainDeck.shift();
      extraDeck.shift();
      this.$message.warning("正在导入");
      if (mainDeck.length > 0) {
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
      if (extraDeck.length > 0) {
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
    },
    exportYDKDeck() {
      this.$message.info("功能未实现");
    },
  },
  watch: {
    infoBox() {
      this.cardImgUrl = `https://cdn.233.momobako.com/ygopro/pics/${this.infoBox.id}.jpg`;
    },
    mainDeck() {
      this.$message("这是一条消息提示");
    },
    extraDeck() {
      this.$message("这是一条消息提示");
    },
  },
};
</script>

<style lang="scss" scoped>
$cardHeight: 89px;
.wapping {
  display: flex;
  width: 99%;
  height: 95%;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.info {
  width: 20%;
  height: 100%;
  border-right: 1px solid #ddd;
  .imgBox {
    height: calc(100% - 302px);
    min-height: 360px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    .cardImg {
      height: 302px;
    }
  }
  .name {
    word-break: break-all;
    word-wrap: break-word;
    padding: 15px;
    margin-top: 5px;
    user-select: none;
    overflow-y: auto;
    min-height: 340px;
    hr {
      background-color: #ddd;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    span {
      white-space: pre-wrap;
      font-size: 14px;
    }
  }
}
.deck {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;

  .mainDeck {
    width: 100%;
    height: 75%;
    .group {
      min-height: 300px;
      display: flex;
      align-content: flex-start;
      flex-wrap: wrap;
      .card {
        margin-right: 5px;
        .cardImg {
          height: $cardHeight;
        }
      }
    }
  }
  .extraDeck {
    width: 100%;
    height: 23%;
    border-top: 1px solid #ddd;
    .group {
      margin: 5px;
      min-height: 100%;
      display: flex;
      align-content: flex-start;
      flex-wrap: wrap;
      .card {
        margin-right: 5px;
        .cardImg {
          height: $cardHeight;
        }
      }
    }
  }
}
.right {
  width: 19%;
  height: 100%;
  border-left: 1px solid #ddd;
  .search {
    display: flex;
    padding: 15px;
    justify-content: center;
  }
  .YDK {
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  .searchList {
    height: calc(100vh - 300px);
    overflow-y: auto;
    padding: 8px;
    border-top: 1px solid #ddd;
    .group {
      min-height: 500px; //控制空数组能拖入
      display: flex; //控制空数组能拖入 display任意
      flex-direction: row;
      align-content: flex-start;
      flex-wrap: wrap;
      overflow-y: hidden;
      .card {
        margin-right: 5px;
        .cardImg {
          height: $cardHeight;
        }
      }
    }
  }
}
.chosen {
  height: $cardHeight;
}
.ghost {
  height: $cardHeight;
}
.YDKBox {
  padding: 9px;
  .but {
    display: flex;
  }
}
</style>