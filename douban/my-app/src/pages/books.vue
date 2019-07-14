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
                <span>最受关注图书 | 虚构类</span><span class="more">更多</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <div class="bigbox">
            <div class="clearfix hua">
                <MoviesOne v-for="(v,i) in marr" :key="i" :image="v.images.small" :subtype="v.subtype" :directid="v.id" :title="v.title" :avg="v.rating.average"></MoviesOne>
            </div>
        </div>
    <!-- 第二行 -->
        <el-row>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="22" class="moreOption mmoreOption">
                <span>最受关注图书 | 非虚构类</span><span class="more">更多</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <div class="bigbox">
            <div class="clearfix hua">
                <MoviesOne v-for="(v,i) in marrOne" :key="i" :image="v.images.small" :subtype="v.subtype" :directid="v.id" :title="v.title" :avg="v.rating.average"></MoviesOne>
            </div>
        </div>
        <!-- 第三行 -->
        <el-row>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="22" class="moreOption">
                <span>豆瓣书店</span><span class="more">更多</span>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <div class="bigbox">
            <div class="clearfix hua">
                <MoviesOne v-for="(v,i) in marrTwo" :key="i" :image="v.images.small" :subtype="v.subtype"  :directid="v.id" :title="v.title" :avg="v.rating.average"></MoviesOne>
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
          var narr=ok.data.books;
          console.log(narr);
          this.goodarr=ok.data.goodBook;
          this.bool=false
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
                {texttitle:"小说"},
                {texttitle:"爱情"},
                {texttitle:"历史"},
                {texttitle:"外国文学"},
                {texttitle:"青春"},
                {texttitle:"励志"},
                {texttitle:"随笔"},
                {texttitle:"传记"},
                {texttitle:"推理"},
                {texttitle:"旅行"},
                {texttitle:"奇幻"},
                {texttitle:"经营"}
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
    /* border: 1px solid black; */
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
