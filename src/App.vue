<template>
  <div>
    <header-menu/>
  <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';
export default {
  components : {
    HeaderMenu,
  },

  data() {
    return {
      dataInserted: false,
    };
  },

  mounted() {
    let self = this;
    this.$axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(function(res){
      if(res.status !== 200){
        console.log("error");
      } else {
        self.$usersData[0] = res.data;
        console.log(self.$usersData[0]);
      }
    })
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>