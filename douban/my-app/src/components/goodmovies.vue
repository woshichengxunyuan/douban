<template>
    <div class="itemsmovies">
        <a :href="href" v-if="line==false" :style="{color:colorstyle,boderColor:colorstyle}">{{title}}</a><br v-else>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        href:String,
        colorstyle:String,
        line:{
            type:Boolean,
            default:false
        }
    }
}
</script>


<style scoped>
    a{
        border: 1px solid;
        padding: 16px 16px;
        border-radius: 5px;
    }
    .itemsmovies{
        float: left;
        margin-top: 40px;
        margin-left: 10px;
    }
</style>
