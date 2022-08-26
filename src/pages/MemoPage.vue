<template>
  <div v-if="filteredList === null" class="loader">
    <h4>
      <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360"/>
      로딩중
    </h4>
  </div>

  <div v-else-if="filteredList.length < 1" class="loader">
    <h4> 
      <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
        유저가 발견되지 않았습니다.
    </h4>

    <router-link
      class="prevMemo" :to="{ name: 'memo', params: { userId: this.$route.params.userId, titleId: backPage }, }">{{refresh()}}돌아가기</router-link>
  </div>

  <div v-else class="memo">
    {{ getPage() }}
    <div class="title">{{ filteredList[0].title }}</div>
    <textarea type="text" class="content" />
    <div class="buttons" @click="refresh()">
      <router-link class="prevMemo" :to="{ name: 'memo', params: { userId: this.$route.params.userId, titleId: prevPage }, }">prev</router-link>
      <router-link class="nextMemo" :to="{ name: 'memo', params: { userId: this.$route.params.userId, titleId: nextPage }, }">next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      filteredList: null,
      nextPage: Number,
      prevPage: Number,
      backPage: Number,
    };
  },

  computed: {
    filteredData() {
      return this.$usersData[0].filter((user) => {
        if (user.userId === Number(this.$route.params.userId)) {
          return user;
        }
        return false;
      });
    },
  },

  methods: {
    getPage: function () {
      for (let page = 0; page < this.filteredData.length; page++) {
        if (this.filteredData[page].id === Number(this.$route.params.titleId)) {
          this.nextPage = this.filteredData[page].id + 1;
          this.prevPage = this.filteredData[page].id - 1;
          this.backPage = this.filteredData[page].id;
        }
      }
    },
    refresh: function () {
      let self = this;
      this.filteredList = [];

      this.filteredData.filter((user) => {
        if (user.id === Number(this.$route.params.titleId)) {
          self.filteredList.push(user);
        }
      });
    },
  },

  mounted() {
    let self = this;
    this.filteredList = [];

    this.filteredData.filter((user) => {
      if (user.id === Number(this.$route.params.titleId)) {
        self.filteredList.push(user);
      }
    });
  },
};
</script>

<style>
.memo {
  width: 60%;
  margin: 40px 20%;
  padding: 20px;
  border: 2px solid aquamarine;
  border-radius: 20px;
  text-align: center;
  font-size: 20pt;
}

.content {
  width: 100%;
  height: 250px;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 20pt;
}

.buttons > * {
  width: 40%;
  display: inline-block;
  border: 2px solid palevioletred;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
}

.title{
  height: 70px;
}
</style>