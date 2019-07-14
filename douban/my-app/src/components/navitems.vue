<template>
        <div>
            <router-link :to="linkurl">
                <h1 :style="{color:colorstyle}">{{name}}</h1>
                <span>{{content}}</span>
            </router-link>
        </div>
</template>

<script>
export default {
    props:{
        name:String,
        content:String,
        colorstyle:String,
        linkurl:String
    }
}
</script>

<style scoped>

h1{
    font-size: 24px;
    font-weight: normal;
    margin:16px 0px 0px 0px;
    padding: 0;
}
span{
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: #999;
}
</style>
