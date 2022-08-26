<template>
  <div class="tool">
    <div v-for="(val, idx) in dataList" :key="idx" :class="className">
    <router-link
      :to="{ name: linkName, params: { titleId: val.id, userId: val.userId } }"
    >

      <div v-if="className === 'users'">ID : <span>{{ val.userId }}</span> 
      <button>자세히보기</button>
      </div>
      <div v-else-if="className === 'titleList'">TITLE : {{ val.title }}</div>
      <div v-else-if="className === 'memo'">
        <div class="title">title : {{ val.title }}</div>
      </div>
    </router-link>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: Array,
    className: String,
    linkName: String,
  },
};
</script>

<style>
.tool{
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  width: 1000px;
}
.users {
  width: 200px;
  height: 200px;
  background-color: 1px solid #eee;
  padding: 10px;

  cursor: pointer;
  box-sizing: border-box;
  margin: 20px;
  border-radius: 10px;
  background-color: rgb(229, 254, 255);
  box-shadow:2px 2px 10px rgb(158, 252, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  box-sizing: border-box;
  padding: 30px;
}

.titleList {
  width: 1000px;
  margin: 20px auto;
  display: block;
  border-bottom: 1px solid #eee;
  border-top: 1px solid rgb(229, 254, 255);
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgb(2, 131, 143);

  padding: 20px;
}

.users > a {
  font-size: 20px;
}
.users > a > div > span{
  font-size: 25px;
  font-weight: bold;
}
.users > a > div > button{
  /* float: right; */
  display: block;
  border: none;
  background: none;
  margin-top: 50px;
  /* color: rgb(231, 230, 230); */
}
</style>