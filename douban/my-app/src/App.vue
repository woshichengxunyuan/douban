<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,div,ul,li,ol,dl,dd,dt,a,img,input{
  padding:0;
  margin:0;
}
a{
  text-decoration: none;
  color:black;
}
ul,li{
  list-style:none;
}

.clearfix:before,.clearfix:after{
	content:"";
	display:block;
	clear:both;
	overflow: hidden;
}
.el-rate__icon{
  font-size: 10px;
  margin-right: 0;
}
.el-rate__text{
  font-size: 10px;
}
.douban{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 1;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}

</style>
