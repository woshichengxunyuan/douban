<template>
    <div>
        <div v-if="bool">
            <Loading></Loading>
        </div>
        <div v-else>
            <Indextop></Indextop>

            <!-- 电影及电视剧 -->
            <div class="tiaoTwo">
            <div v-if="this.$route.query.subtype==btype?false:true" class="dbox">
                <div>
                    <div>
                        <h2>{{newarr[0].title}}</h2>
                        <p class="paiOne">
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                            <span class="pingjia">{{newarr[0].collect_count}}人评价</span>
                        </p>
                    </div>

                    <p class="paiTwo"><span v-for="(v,i) in newarr[0].genres" :key="i">{{v}}</span></p>
                </div>
        
                <div class="ig">
                    <img :src="newarr[0].images.small" alt="z">
                </div>
            </div>

            <!-- 书本 -->
            <div v-else  class="dbox">
                <div>
                    <div>
                        <h2>{{newbarr[0].subtitle}}</h2>
                        <p class="paiOne">
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                            <span class="pingjia">{{newbarr[0].isbn10}}人评价</span>
                        </p>
                    </div>

                    <p class="paiTwo"><span v-for="(v,i) in newbarr[0].author" :key="i">{{v}}</span></p>
                </div>
        
                <div class="ig">
                    <img :src="newbarr[0].images.small" alt="z">
                </div>
            </div>
            <!-- 书本结束 -->
            
            
            <p class="look"><span>想看</span><span>看过</span></p>

            <p class="jianjie"><span>蜘蛛侠：英雄远征的剧情简介</span></p>

            <p v-if="this.$route.query.subtype==btype?false:true" class="text">{{newarr[0].detailscontent}}</p>
            <p v-else class="text">{{newbarr[0].catalog}}</p>

            <Detailstext></Detailstext>
            <Detailsyugao></Detailsyugao>
            <Marks></Marks>
            <div class="liao"><span>喜欢蜘蛛侠：英雄远征的人也喜欢</span></div>
            <div class="overbox">
                <div class="clearfix bigqbox">
                    <Nostarts v-for="(v,i) in stararr" :key="i" :image="v.imgurl" :name="v.name"></Nostarts>
                </div>
            </div>
            <div>
                <div class="liao"><span>聊聊《蜘蛛侠：英雄远征》中的彩蛋与细节</span></div>
                <Talktalk v-for="(v,i) in talkarr" :key="i" :title="v.title" :name="v.name" :count="v.count" :content="v.content"></Talktalk>
                <p class="openApp"><a href="##">打开App看更多热门影评</a></p>
            </div>

            <div>
                <div class="liao"><span>推荐蜘蛛侠：英雄远征的豆列</span></div>
                <div class="bigbox">
                    <div class="goods clearfix">
                        <Goodmovies  v-for="(v,i) in douarr" :key="i" :title="v.title" :colorstyle="v.color" :href="v.href" :line="v.line"></Goodmovies>
                    </div>
                </div>
            </div>

            <div>
                <div class="liao"><span>了解更多电影信息</span></div>
                <div class="outside clearfix">
                    <Rangemovies v-for="(v,i) in rangearr" :key="i" :texttitle="v.texttitle"></Rangemovies>
                </div>
            </div>

            <Footer></Footer>
        </div>
        </div>
    </div>
</template>


<script>
import Indextop from '../components/indextop'
import Detailstext from '../components/detailstext'
import Detailsyugao from '../components/detailsyugao'
import Footer from '../components/footer'
import Marks from '../components/marks'
import Nostarts from '../components/Nostarts'
import Talktalk from '../components/talktalk'
import Goodmovies from '../components/goodmovies'
import Rangemovies from '../components/rangemovies'
import Loading from '../components/loading'


export default {

    created() {
        this.numid=this.$route.query.id;
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            console.log(ok)
            this.acarr=ok.data.movie;
            this.bcarr=ok.data.books;
            this.bool=false;
        })

        this.axios({
            url:"/nav/data",
            method:"get"
        }).then((ok)=>{
            this.stararr=ok.data.like;
            console.log(this.stararr);
            this.talkarr=ok.data.mark1;
            this.douarr=ok.data.tuijian;
            this.bool=false;
        })
        
    },
    components:{
        Indextop,
        Detailstext,
        Detailsyugao,
        Footer,
        Marks,
        Nostarts,
        Talktalk,
        Goodmovies,
        Rangemovies,
        Loading
    },
    data() {
        return {
            acarr:[],
            bcarr:[],
            value: 3.7,
            numid:0,
            btype:"books",
            stararr:[],
            talkarr:[],
            douarr:[],
            rangearr:[
                {texttitle:"返回电影首页"},
                {texttitle:"新片速递"},
                {texttitle:"免费在线观影"},
                {texttitle:"更多电影分类"}
            ],
            bool:true
        }
    },
    computed: {
        newarr(){
            var demoarr=this.acarr.filter((v,i)=>{
                if(v.id==this.numid){
                    return v;
                }
            })
            return demoarr;
        },
        newbarr(){
            var demoarr=this.bcarr.filter((v,i)=>{
                if(v.id==this.numid){
                    return v;
                }
            })
            return demoarr;
        }
    },
}
</script>


<style scoped>
.outside{
    width: 365px;
    margin-left: 8px;
    margin-top: 12px;
}
.bigbox{
      overflow: auto;
  }
.goods{
    width: 1100px;
    height: 158px;
    margin-top: 6px;
}
.openApp{
    text-align: center;
    margin-top: 40px;
}
.openApp a{
    background-color: #42BD56;
    padding: 8px 80px;
    border-radius: 25px;
    color: #ffffff;
}
.liao{
    margin-top: 30px;
}
.liao span{
    margin-left: 20px;
    color: #cccccc;
}
.ig img{
    width: 100px;
    height: 142px;
    border: none;
}
.dbox{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 56px;
}
.paiOne{
    display: flex;
}
.paiTwo{
    width: 200px;
}
h2{
    font-weight: normal;
    margin:-60px 0px 0px 0px;
}
.pingjia{
    margin-left: 8px;
    color:#cccccc;
}
.look{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
.look span{
    padding: 6px 64px;
    border: 1px solid orange;
    border-radius: 2px;
    color: orange;
}
.look span:nth-child(2){
    margin-left: 8px;
}
.jianjie span{
  
    margin-left: 20px;
    color: #cccccc;
}
.jianjie{
    margin-top: 30px;
}
.text{
   width: 340px;
   margin: auto;
}
.bigqbox{
    width: 880px;
}
.overbox{
    margin-top: 22px;
    overflow: auto;
}
p{
    font-size: 15px;
}
.tiaoTwo{
    margin-top:100px;
}
</style>
