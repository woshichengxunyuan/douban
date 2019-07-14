<template>

        <!-- 电影内容 -->
        <div class="moviesbutton" @click="fun()">
            <ul>
                <li class="ig"><img :src="image"></li>
                <li class="text">{{title}}</li>
                <li>
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
                </li>
            </ul>
        </div>
</template>

<script>

export default {
    created() {
      this.value=this.avg/2;
    },
    props:{
        image:String,
        title:String,
        avg:Number,
        directid:String,
        subtype:String
    },
     data() {
      return {
        value: 3.7
      }
    },
    methods: {
      fun(){
        this.$router.push("/details?id="+this.directid+"&subtype="+this.subtype)
      }
    },
}
</script>

<style scoped>
.moviesbutton{
  width: 100px;
  float: left;
  margin-left: 10px;
}
ul{
  width: 100px;
}
ul img{
  width: 100%;
  height: 142px;
}
.text{
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.el-rate{
  text-align: center;
}


</style>
