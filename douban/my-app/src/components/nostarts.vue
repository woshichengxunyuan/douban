<template>

        <!-- 电影内容 -->
        <div class="moviesbutton">
            <ul>
                <li class="ig"><img :src="image"></li>
                <li class="text">{{name}}</li>
            </ul>
        </div>
</template>

<script>

export default {
    props:{
        image:String,
        name:String
    },
    // methods: {
    //   fun(){
    //     this.$router.push("/details?id="+this.directid+"&subtype="+this.subtype)
    //   }
    // },
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
}
.el-rate{
  text-align: center;
}


</style>
