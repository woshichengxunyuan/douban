<template>

<div>
    <Loading v-if="bool"></Loading>
    <div v-else>
        
        <Indextop></Indextop>
       
    <!-- 第一行 -->
    <div class="tiaoOne">
        <el-row>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="22" class="moreOption">
                <span>影院热映</span><span class="more">更多</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <div class="bigbox">
            <div class="clearfix hua">
                <MoviesOne v-for="(v,i) in marr" :key="i" :image="v.images.small" :directid="v.id"  :title="v.title" :avg="v.rating.average"></MoviesOne>
            </div>
        </div>
    <!-- 第二行 -->
        <el-row>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="22" class="moreOption mmoreOption">
                <span>免费在线观影</span><span class="more">更多</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <div class="bigbox">
            <div class="clearfix hua">
                <MoviesOne v-for="(v,i) in marrOne" :key="i" :image="v.images.small" :directid="v.id"  :title="v.title" :avg="v.rating.average"></MoviesOne>
            </div>
        </div>
    <!-- 第三行 -->
        <el-row>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="22" class="moreOption">
                <span>新片速递</span><span class="more">更多</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <div class="bigbox">
            <div class="clearfix hua">
                <MoviesOne v-for="(v,i) in marrTwo" :key="i" :image="v.images.small"  :directid="v.id"  :title="v.title" :avg="v.rating.average"></MoviesOne>
            </div>
        </div>
        <!-- 发现好电影 -->
        <el-row class="findMov">
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="22" class="moreOption">
                <span>发现好电影</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
    
        <div class="bigbox">
            <div class="goods clearfix">
                <Goodmovies  v-for="(v,i) in goodarr" :key="i" :title="v.title" :colorstyle="v.color" :href="v.href" :line="v.line"></Goodmovies>
            </div>
        </div>
        <!-- 分类浏览 -->
        <el-row class="findMov">
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="22" class="moreOption">
                <span>分类浏览</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>

        <div>
            <div class="outside clearfix">
                <Rangemovies v-for="(v,i) in rangearr" :key="i" :texttitle="v.texttitle"></Rangemovies>
            </div>
        </div>

        <!-- 底部 -->
        <Footers></Footers>
        </div>
    </div>
</div>
</template>

<script>
import Indextop from '../components/indextop'
import MoviesOne from '../components/moviesOne'
import Goodmovies from '../components/goodmovies'
import Rangemovies from '../components/rangemovies'
import Footers from '../components/footer'
import Loading from '../components/loading'

export default {
    components:{
        Indextop,
        MoviesOne,
        Goodmovies,
        Rangemovies,
        Footers,
        Loading

    },
    created() {
      this.axios({
          url:"/link/data",
          method:"get"
      }).then((ok)=>{
        var narr=ok.data.movie;
        this.goodarr=ok.data.faxianhaodianying;
        this.bool=false;
        for(var i=0; i<narr.length; i++){
            if(i<8){
                this.marr.push(narr[i]);
            }
            if(i>=8&&i<16){
                this.marrOne.push(narr[i]);
            }
            if(i>=16&&i<24){
                this.marrTwo.push(narr[i]);
            }
        }
        console.log(this.marr);
    })
    },
    data() {
        return {
            marr:[],
            marrOne:[],
            marrTwo:[],
            goodarr:[],
            rangearr:[
                {texttitle:"经典"},
                {texttitle:"冷门佳片"},
                {texttitle:"豆瓣高分"},
                {texttitle:"动作"},
                {texttitle:"喜剧"},
                {texttitle:"爱情"},
                {texttitle:"悬疑"},
                {texttitle:"恐怖"},
                {texttitle:"科幻"},
                {texttitle:"治愈"},
                {texttitle:"文艺"},
                {texttitle:"成长"},
                {texttitle:"动画"},
                {texttitle:"华语"},
                {texttitle:"欧美"},
                {texttitle:"韩国"},
                {texttitle:"日本"}
            ],
            bool:true
        }
    }
}
</script>


<style scoped>
.outside{
    width: 365px;
    margin-left: 8px;
}
.goods{
    width: 1100px;
    height: 158px;
    margin-top: -14px;
}
.moreOption{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 36px;
}
.mmoreOption{
    margin-top: 12px;
}
.more{
    color: #42bd56;
    
}

.el-row {
    margin-bottom: 10px;
    margin-top: 18px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }

  .hua{
      width: 890px;
  }
  .bigbox{
      overflow: auto;
  }
  .tiaoOne{
      margin-top: 64px;
  }
</style>
