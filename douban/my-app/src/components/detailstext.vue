<template>
    <div class="bigside">
        <p><span>影人</span></p>
        <div class="outsidebox">
            <div class="clearfix bigbox">
                <ul v-for="(v,i) in actarr" :key="i">
                    <li><img :src="v.imgurl"></li>
                    <li>{{v.name}}</li>
                    <li><span>{{v.posit}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    created() {
        this.axios({
            url:"/nav/data",
            method:"get"
        }).then((ok)=>{   
            this.actarr=ok.data.darr;
            // console.log(this.actarr)
        })
    },
    data() {
        return {
            actarr:[]
        }
    },
}
</script>

    

<style scoped>
img{
    width: 75px;
    height:107px;
}
ul{
    float: left;
    width: 75px;
    margin-left: 11px;
}
li{
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
}
.bigbox{
    width: 690px
}
.outsidebox{
    overflow: auto;
}
span{
    color: #cccccc;
}
p span{
    margin-left: 20px;
}
.bigside{
    margin-top: 36px;
}
</style>
