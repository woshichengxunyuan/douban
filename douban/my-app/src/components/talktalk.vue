<template>
    <div class="talkbox">
        <div>
            <p>{{title}}</p>
            <p>
                <span class="counter">{{name}}</span>
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>

            </p>
            <p>{{content}}</p>
            <p><span>{{count}}</span>&nbsp;有用</p>
        </div>
    </div>
</template>

<script>
export default {
   props:{
       title:String,
       name:String,
       count:String,
       content:String
   },
   data() {
       return {
           value: 5
       }
   },
}
</script>

<style scoped>
    .counter{
        color: black;
    }
    .el-rate{
        margin-left: 8px;
    }
    p{
        margin: 6px 24px 0px 24px;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #cccccc;
    }
    .talkbox{
        margin-top: 24px;
    }
    div>p:nth-child(1){
        font-size: 17px;
        color: black;
    }
</style>
