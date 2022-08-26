<template>
  <div v-if="usersDataList === null" class="loader">
    <img width="70" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" />
    <h4>데이터를 불러오는 중입니다.</h4>
  </div>
  <div v-else-if="usersDataList.length < 1" class="loader">
    <h4>
        <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360"/>
        유저가 발견되지 않았습니다.
    </h4>
  </div>
  <div v-else>
    <create-list :dataList="usersDataList" :className="'users'" :linkName="'data'"/>
  </div>

  <input type="button" @click="fetchData()" value="새로고침" class="getButton"/>
</template>


<script>
import CreateList from '../components/CreateList.vue';

export default {
    components: {
        CreateList,
    },

    data() {
        return {
            usersId: null,
            usersDataList: null,
        };
    },

    methods: {
        fetchData: function() {
            this.usersId = [];
            this.usersDataList = [];
            this.$usersData[0].filter((user) => {
                let userId = user.userId;

                if(this.usersId.indexOf(userId) == -1) {
                    this.usersId.push(userId);
                    this.usersDataList.push(user);
                }
            })
        }
    },

    mounted() {

    },
}
</script>

<style>
* {
    color: black;
    text-decoration: none;
}
body {
    overflow-x: hidden;
}
.loader {
    text-align: center;
    padding: 40px 0;
    margin: 50px;
}
.getButton {
    border: 2px solid darkblue;
    background-color: white;
    display: block;
    margin: 30px auto;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s;
}
.getButton:hover {
    background-color: darkblue;
    color: white;
}
</style>

