<template>
    <div>
       <p class="zhizu"><span>蜘蛛侠：英雄远征的短评（999999）</span></p>
       <div v-for="(v,i) in markarr" :key="i" class="paiban">
           <div class="person"><img :src="v.imgurl" alt="w"></div>
           <div class="markOne">
               <div class="personOne">
                    <p>{{v.name}}</p>
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
                </div>
               <p><span class="zi">{{v.time}}</span></p>
               <p>{{v.content}}</p>
               <p><img src="../../static/img/1.svg" alt=""><span class="zi">{{v.count}}</span></p>
           </div>
       </div>
       <p class="hot"><a href="##">打开App看更多热门短评</a></p>
    </div>
</template>

<script>
export default {
    created() {
        this.axios({
            url:"/nav/data",
            method:"get"
        }).then((ok)=>{
            
            this.markarr=ok.data.mark;
            console.log(this.markarr);
        })
    },

    data() {
        return {
            markarr:[],
            value: 4
        }
    },
}
</script>


<style scoped>
.person img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
}
.person{
    margin-left: 20px;
}
p>img{
    width: 20px;
    height: 20px;
}
.paiban{
    display: flex;
    margin-top: 24px;
}
p{
    margin: 10px 20px 0px 0px;
    display: flex;
    align-items: center;
}
.personOne{
    display: flex;
    align-items: center;
    margin-top: 6px;
}
.personOne p{
    margin: 0;
}
.markOne{
    margin-left: 12px;
}
span{
    color: #cccccc;
}
.zhizu{
    margin-top: 30px;
}
.zhizu span{
    margin-left: 20px;
}
.zi{
    font-size: 13px;
}
.hot a{
    background-color: #42BD56;
    color: #ffffff;
    padding: 8px 80px;
    border-radius: 25px;
    margin-left: 19px;
}
.hot{
    display: block;
    /* text-align: center; */
    margin-top: 30px;
}

</style>
