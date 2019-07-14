<template>
    <div>
        <p><span>蜘蛛侠：英雄远征的预告片(38)和图片(383)</span></p>
        <div class="bigbox">
            <div class="contentyu clearfix">
                <a href="##" v-for="(v,i) in yuarr" :key="i">
                    <img :src="v.imgurlp">
                </a>
                <span class="findall">查看全部剧照/海报/壁纸</span>
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
            this.yuarr=ok.data.carr;
            console.log(this.yuarr)
        })
    },
    data() {
        return {
            yuarr:[]
        }
    },
}
</script>


<style scoped>
a{
    display: block;
    width: 213px;
    height: 120px;
    float: left;
    margin-left: 6px;
}
a img{
    width: 100%;
    height: 100%;
    border: none;
}
.findall{
    display: block;
    width: 213px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    color: #42bd56;
    background-color: #cccccc;
    float: left;
    margin-left: 6px;
}
.contentyu{
    width: 1540px;
    height: 125px;
}
.bigbox{
    overflow: auto;
}
p span{
    margin-left: 20px;
    color: #cccccc;
}

</style>
