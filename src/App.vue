<template>
  <div id="app">
<<<<<<< HEAD
	<keep-alive exclude="Detail">
	  <router-view></router-view>
	</keep-alive>
    <main-tab-bar></main-tab-bar>
=======
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

>>>>>>> cfc6826cdcf0e4d8b48ad84a89b5bbbfc10bef2e
  </div>
</template>

<script>
<<<<<<< HEAD
	import MainTabBar from "components/content/mainTabBar/MainTabBar.vue"
	export default {
		name: 'App',
		components: {
			MainTabBar
		}
	}
</script>

<style lang="less">
	@import "assets/css/reset.css";
=======
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




>>>>>>> cfc6826cdcf0e4d8b48ad84a89b5bbbfc10bef2e
</style>
