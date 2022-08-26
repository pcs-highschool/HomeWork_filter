<template>
  <div id="header-menu">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <hr>
  </div>
</template>

<script>
export default {}
</script>

<style>
#header-menu {
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  padding: 5px 60px;
  box-shadow: 2px 2px 10px lightblue;
}

#header-menu > a {
  margin: 10px;
  font-size: bold;
  transform: all 0.2s;
  position: relative;
}

#header-menu > a::before {
  transform: scale(1.2);
}

#header-menu > a:hover::before {
  width: 100%;
  background-color: black;
}
</style>