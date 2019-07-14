<template>
    <div class="douban">
        <div>
            <router-link to="/index"><span class="dou"><img src="../../static/img/logo.png"></span></router-link>
        </div>
        <div class="openapp">
            <router-link to="/navbar"><span class="sou"><img src="../../static/img/m.png"></span></router-link>
            <span>打开豆瓣APP</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.openapp span:nth-child(2){
    background-color: #42bd56;
    padding: 6px 16px;
    font-size: 13px;
    color: #ffffff;
    border-radius: 4px;
    
}
.openapp{
    width: 286px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 15px;
}
.dou img{
    width: 48px;
    height: 22px;
}
.sou img{
    width: 24px;
    height: 18px;
}

</style>
