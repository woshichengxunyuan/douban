<template>
    
        <div class="ran">
            <a href="##">{{texttitle}}</a>
            <span>〉</span>
        </div>
    
</template>

<script>
export default {
    props:{
        texttitle:String
    }
}
</script>

<style scoped>
.ran{
    width: 49%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #cccccc;
}
.ran:nth-child(odd){
    border-left: none;
    border-top: none;
}
.ran:nth-child(even){
    border-right: none;
    border-top: none;
    border-left: none;
}
a{
    color: #42bd56;
    padding: 8px 10px;
}
span{
    margin-right: 10px;
    color: #cccccc;
}
</style>
