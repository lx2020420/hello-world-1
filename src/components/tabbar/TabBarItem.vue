<template>
    <div class="tab-bar-item" @click="itemClick"  >
<!--        <div v-if="!isActiveaa" >-->
        <div v-if="!isActive" >
            <slot  name="item-icon"></slot>
        </div>
<!--        <div v-else >-->
        <div v-else >
        <slot  name="item-icon-active"></slot>
        </div>
<!--        <div :class="{active:isActive}">-->
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    //需求：本例通过在computed属性中根据处于活动状态的路径，与进入的组件页面的路径是否一致，来控制tabBarItem是否处于活跃状态

// 使用computed的好处，他在首次刷新页面时就会先进行计算


    //问题：（1）data return的数据，在多次使用<Tab-Bar-Item path="/home">组件标签，使用的data中的数据是每次是一份独立的拷贝
    //      （2）使用computed属性中的数据时，computed计算的时机是多次使用一个完整的组件标签时（并且在该组件标签中使用
    //            了computed中的数据），每次使用都会计算一次。而且computed中计算出来的数据也是，每个组件标签有一份对立的数据拷贝
    //          另外当computed中使用的数据改变时，也会触发执行一次计算：例如      this.isActiveaa=true;



    //      （3）在思考以什么作为区分标志时，主要是查找他们不同的特性
    //      （4）需要添加事件时，可以在组件的上方加一层div,在div标签中写事件触发。多次使用组件触发时，只触发一次
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type : String ,
                default : 'red'
            }
        },
        data() {
            return{
                isActiveaa: false // 测试使用
            }
        },
        computed:{
            isActive() {
                // console.log(this.$route.path);
                // console.log(this.path);
                // console.log(this.isActiveaa); //          另外当computed中使用的数据改变时，也会触发执行一次计算：例如      this.isActiveaa=true;

                return this.$route.path.indexOf(this.path) !== -1;

            },
            activeStyle() {
                return this.isActive ? {color : this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
                 // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                this.$router.push(this.path);

                //////////不能在此时判断，因为此时只是将地址push进去，地址还未跳转过去
                // if(this.$route.path.indexOf(this.path) !== -1)
                // {
                     this.isActiveaa=true;
                //     console.log(this.$route.path);
                //     console.log(this.path);
                //     console.log(this.isActiveaa);
                // }
                // else {
                //     this.isActiveaa=false;
                //     console.log(this.$route.path);
                //     console.log(this.path);
                //     console.log(this.isActiveaa);
                // }

            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex:1;
        height: 49px;

    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;

        vertical-align: middle;
        margin-bottom: -2px;
    }

    /*.active{*/
    /*    color: red;*/
    /*}*/
</style>