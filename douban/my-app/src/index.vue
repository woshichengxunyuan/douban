<template>
    <div>
        <Loading v-if="bool"></Loading>
        <div v-else>
            <Indextop></Indextop>
            <div class="tiao">
                <Indexfour></Indexfour>
                <!-- 请求数据完成，安放数据 -->
                <div class="contentCon">
                    <Indexcontent  v-for="(v,i) in narr" :key="i" :image="v.image" :image_hlarge="v.image_hlarge" :image_lmobile="v.image_lmobile" :title="v.title" :content="v.content" :time_str="v.time_str"></Indexcontent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Indextop from './components/indextop'
import Indexfour from './components/indexfour'
import Indexcontent from './components/indexcontent'
import Loading from './components/loading'


export default {
    components:{
        Indextop,
        Indexfour,
        Indexcontent,
        Loading
    },
    created() {
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            this.narr=ok.data.shouye;
            this.bool=false;
        })
    },

    data() {
        return {
            narr:[],
            bool:true
        }
    }
}
</script>


<style scoped>
.contentCon{
    margin-top: 36px;
}
.tiao{
    margin-top: 86px;
}
</style>
