<template>
    <div class="fouritems">
        <div>
          <a href="##">影院热映</a><a id="two" href="##">我的</a>
        </div>
        <div>
          <a href="##">豆瓣时间</a><a class="three" href="##">使用豆瓣</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#two{
  padding: 8px 58px;
}
#two,.three{
  margin-left: 30px;
}
.fouritems{
  width: 100%;
  margin-top: 40px;
}
.fouritems a{
  background-color: #f6f6f6;
  padding: 8px 42px;
}
.fouritems>div{
  margin-top: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
}
</style>
