<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{
        display:flex;
        text-align: center;
        background-color: #f0f0f0;

        position:fixed;
        right: 0;
        bottom: 0;
        left: 0;


        box-shadow: 0 -1px 1px rgba(100,100,100,.4);
    }


</style>