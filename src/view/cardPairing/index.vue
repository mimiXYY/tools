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
            ><div class="card" v-for="card in mainDeck" :key="card.cid">
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
            ><div class="card" v-for="card in extraDeck" :key="card.cid">
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
      <div class="searchList">
        <draggable
          v-model="cardList"
          :group="{ name: 'site', pull: 'clone' }"
          animation="300"
          ghostClass="ghost"
          chosenClass="chosen"
          ><transition-group class="group"
            ><div class="card" v-for="card in cardList" :key="card.cid">
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
    };
  },
  mounted() {},
  methods: {
    async searchCard() {
      console.log(11);
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
  },
  watch: {
    infoBox() {
      this.cardImgUrl = `https://cdn.233.momobako.com/ygopro/pics/${this.infoBox.id}.jpg`;
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
  .searchList {
    height: calc(100vh - 250px);
    overflow-y: auto;
    padding: 8px;
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
</style>