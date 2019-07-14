<template>
    <div class="footer-top">
        <div  class="difooter">
           <span><img src="../../static/img/douban-app-logo.png" alt="d"></span><span>豆瓣</span>
        </div>
        <div class="di"><a href="##">去 App Store 免费下载 iOS 客户端</a></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
img{
    width: 48px;
    height: 48px;
}
div{
    text-align: center;
   
}
.difooter{
    display: flex;
    align-items: center;
    justify-content: center;
}
span{
    font-size: 24px;
    margin-left: 20px;
}
.footer-top{
    margin-top: 70px;
}
.di{
    margin: 20px 0px;
}
.di a{
    color: #42bd56;
}

</style>
