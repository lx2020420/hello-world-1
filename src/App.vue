<template>
  <div id="app">
    <router-view></router-view>
    <Tab-Bar>
      <Tab-Bar-Item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/homeActive.png" alt="">
        <div slot="item-text" >首页</div>
      </Tab-Bar-Item>
      <Tab-Bar-Item path="/category" activeColor="yellow">
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/categoryActive.png" alt="">
        <div slot="item-text" >分类</div>
      </Tab-Bar-Item>
      <Tab-Bar-Item path="/cart"  activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/gouwuche.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/gouwucheActive.png" alt="">
        <div slot="item-text" >购物车</div>r
      </Tab-Bar-Item>
      <Tab-Bar-Item path="/prefile"  activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/wode.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wodeActive.png" alt="">
        <div slot="item-text" >我的</div>
      </Tab-Bar-Item>
    </Tab-Bar>

  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar"
  import TabBarItem from "./components/tabbar/TabBarItem"

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>

<style lang="scss">
  @import "./assets/css/base.css";




</style>
