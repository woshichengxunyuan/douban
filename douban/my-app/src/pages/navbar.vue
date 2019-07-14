<template>
    <div class="big">
        <!-- 搜索框 -->
        <div class="search">
            <span @click="fun()">关闭</span>
            <input type="text">
        </div>
        <!-- navbar -->
        <div class="clearfix choose">
            <Navitems class="items" v-for="(v,i) in obj" :key="i" :name="v.name" :content="v.content" :colorstyle="v.colorstyle" :linkurl="v.linkurl"></Navitems>
        </div>
        <!-- footer -->
        <div class="alloptions">
            <p @click="funjoin()">{{arr[0].options}}</p>
            <p class="dong"><span>{{arr[1].options}}</span><span>{{arr[2].options}}</span></p>
        </div>
    </div>
</template>

<script>
import Navitems from '../components/navitems'
export default {

    created() {
        this.axios({
            url:"/nav/data",
            method:"get"
        }).then((ok)=>{
            this.obj=ok.data.arr;
            console.log(this.obj)
        })

    },

    data() {
      return {
            input: '',
            obj:[],
            arr:[
                {options:"登录豆瓣"},
                {options:"使用桌面版"},
                {options:"使用豆瓣APP"}
            ]
        }
    },

    components:{
        Navitems
    },

    methods: {
     fun(){
         this.$router.go(-1);
     },
     funjoin(){
         this.$router.push("/dz");
     } 
    }
}
</script>


<style scoped>
  input{
      background: url(../../static/img/s.png) no-repeat center;
      background-size: 17px; 
  }
/* 搜索 */
  .search{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content:center;
      padding: 14px 0px; 
  }
  .search input{
        height: 34px;
        width: 294px;
        margin-left: 10px;
        border: none;
        background-color:#f3f3f3;
  }
  .search span{
      color: #42bd56;
  }
  /* navitems */
  .items{
      width: 33.3%;
      float: left;
      text-align: center;
  }
  .choose{
      padding: 6px 0px 28px 0;
      border-top:1px solid #cccccc;
      border-bottom:1px solid #cccccc; 
  }
  .big{
      width: 100%;
      margin: 0;
      padding: 0;
  }
  .alloptions p{
      text-align: center;
      color: #42bd56;
  }
  .alloptions p span{
      display: inline-block;
      width: 48%;
      text-align: center
  }
  .alloptions p span:nth-child(1){
      border-right: 1px solid #cccccc;
  }
  .dong{
      padding: 14px 0;
      border-top: 1px solid #ccc;
      border-bottom:1px solid #cccccc;
  }
</style>
