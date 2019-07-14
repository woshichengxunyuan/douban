<template>
    <div>
        <div>
            <!-- <div>
                <img :src="image">
            </div>
            <div>
                <span><img :src="image_hlarge"></span>
                <span><img :src="image_lmobile"></span>
            </div> -->

            <el-row>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="17"><div class="grid-content bg-purple bigpic"><img :src="image_lmobile"></div></el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-row>
                            <el-col :span="24"><div class="grid-content bg-purple-dark picOne"><img :src="image_hlarge"></div></el-col>
                            <el-col :span="24"><div class="grid-content bg-purple-dark picOne"> <img :src="image"></div></el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

            <el-row>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="22">
                    <div class="grid-content bg-purple">
                        <h3>{{title}}</h3>
                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

            <el-row>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="22">
                    <div class="grid-content bg-purple">
                        <p>{{content}}</p>
                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

            <el-row>
                <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="22">
                    <div class="grid-content bg-purple-dark">
                        <p><span class="minutes">{{time_str}}</span></p>
                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple-dark"></div></el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        image:String,
        image_hlarge:String,
        image_lmobile:String,
        title:String,
        content:String,
        time_str:String
    }
}
</script>

<style scoped>
h3{
    margin: 0;
    font-weight: normal;
    font-size: 17px;
}
p{
    margin-top: 10px;
    font-size: 12px;
    color: #aaa;
}

.bigpic img{
    width: 256px;
    height: 164px;
}
.picOne img{
    width: 79px;
    height: 79px;
}
.el-row {
    margin-bottom: 10px;
  }
  
.grid-content {
border-radius: 4px;
min-height: 36px;
}
.row-bg {
padding: 10px 0;
}
</style>
