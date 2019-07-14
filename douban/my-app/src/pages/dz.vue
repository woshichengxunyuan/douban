<template>
    <div class="bbox">
        <div><img src="../../static/img/close.svg" @click="funjump()"></div>
        <div>
            <h1 v-if="bool">{{arrOne.title}}</h1>
            <h1 v-else>{{arrTwo.title}}</h1>
            <p><span>登录注册表示同意 </span><a href="##">豆瓣使用协议、隐私政策</a></p>
            <div>
                <!-- 登录注册输入框 -->
                <div v-if="bool" class="inputcontent">
                    <div class="inpOne">
                        <span>{{arrOne.inp1}}</span>
                        <input type="text" :placeholder="arrOne.inp2" v-model="username">
                    </div>
                    <div class="inpTwo">
                        <input type="text" :placeholder="arrOne.inp3" v-model="userpwd">
                        <span>{{arrOne.inp4}}</span>
                    </div>
                </div>
                <!-- 登录输入框 -->
                <div v-else class="inputcon">
                    <div v-if="boold" class="inputconOne" >
                        <input type="text" :placeholder="arrTwo.inp2" v-model="emailname">
                    </div>

                    <div v-else class="inpOne">
                        <span>{{arrOne.inp1}}</span>
                        <input type="text" :placeholder="arrOne.inp2" v-model="seaphone">
                    </div>

                    <div class="inputconTwo">
                        <input type="text" :placeholder="arrTwo.inp3" v-model="emailpwd">
                    </div>
                </div>

                <div v-if="lastbtn">
                    <el-row v-if="bool">
                        <el-button type="success" :disabled="dengbtnOne"  @click="fundenga()">登录</el-button>
                    </el-row>

                    <el-row v-else>
                        <el-button type="success" :disabled="dengbtnTwo"  @click="fundengb()">登录</el-button>
                    </el-row>
                </div>
                <el-row v-else>
                    <el-button type="success"  :disabled="dengbtnThree"  @click="fundengc()">登录</el-button>
                </el-row>
                <!-- 登录注册系列 -->
                <div v-if="bool" class="zhanghao">
                    <a href="##" @click="funz()">{{arrOne.span1}}</a>
                    <span>{{arrOne.span3}}</span>
                </div>
                <!-- 登录系列 -->
                <div v-else class="zhanghao">
                    <div>
                        <a href="##" @click="funz()">{{arrTwo.span1}}</a>
                        <a v-if="boold" href="##" @click="fund()">{{arrTwo.span2}}</a>
                        <a v-else href="##" @click="fund()">{{arrTwo.span4}}</a>
                    </div>
                    <span>{{arrTwo.span3}}</span>
                </div>

                <div class="third">
                    <p>第三方登录</p>
                    <div class="footerbox">
                        <span><img src="../../static/img/weib.png"></span>
                        <span><img src="../../static/img/weix.png"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.axios({
            url:"/dz/data",
            method:"get"
        }).then((ok)=>{
            
            this.arrOne=ok.data.reg[0];
            this.arrTwo=ok.data.reg[1];
            console.log(this.arrTwo);

        })
    },
    data() {
        return {
            arrOne:[],
            arrTwo:[],
            bool:true,
            boold:true,
            lastbtn:true,
            dengbtnOne:true,
            dengbtnTwo:true,
            dengbtnThree:true,
            username:'',
            userpwd:'',
            emailname:'',
            emailpwd:'',
            seaphone:''
            }
    },
    methods: {
        funz(){
            this.bool=!this.bool;
            this.lastbtn=true;
            this.boold=true;
        },
        fund(){
            this.boold=!this.boold;
            this.lastbtn=!this.lastbtn;
        },
        funjump(){
            this.$router.go(-1);
        },

        fundenga(){
            var regusername=/^1\d{10}$/;
            var reguserpwd=/^[a-z]\d{5}$/;

            if(regusername.test(this.username)==true && reguserpwd.test(this.userpwd)==true){
                this.$router.push("/tv");
            }else{
                alert("亲，注册信息不符合要求哦！")
            }
            this.username='';
            this.userpwd=''
        },
        fundengb(){
            var regemailname1=/^\W+@\W+(\.\W+)+$/;
            var regemailname2=/^1\d{10}$/;
            var regemailpwd=/^[a-zA-Z][a-zA-Z0-9_]{5,16}$/;

            if(regemailname1.test(this.emailname)==true || regemailname2.test(this.emailname)==true && regemailpwd.test(this.emailpwd)==true){
                this.$router.push("/index");
            }else{
                alert("亲，注册信息不符合要求哦！")
            }
            this.emailname='';
            this.emailpwd='';
            
        },
        fundengc(){
            var regphonename=/^1\d{10}$/;
            var regemailpwd=/^[a-zA-Z][a-zA-Z0-9_]{5,16}$/;
            if(regphonename.test(this.seaphone)==true && regemailpwd.test(this.emailpwd)==true){
                this.$router.push("/fm");
            }else{
                alert("亲，注册信息不符合要求哦！")
            }

            this.seaphone='';
            this.emailpwd='';
        }
    },
    watch: {
        // 第一组登录界面
        username(){
            if(this.username!='' && this.userpwd!=''){
                this.dengbtnOne=false;
            }else{
                this.dengbtnOne=true;
            }
        },
        userpwd(){
            if(this.username!='' && this.userpwd!=''){
                this.dengbtnOne=false;
            }else{
                this.dengbtnOne=true;
            }
        },
        // 第二组登录界面
        emailname(){
            if(this.emailname!='' && this.emailpwd!=''){
                this.dengbtnTwo=false;
            }else{
                this.dengbtnTwo=true;
            }
        },
        emailpwd(){
            if(this.emailname!='' && this.emailpwd!=''){
                this.dengbtnTwo=false;
            }else{
                this.dengbtnTwo=true;
            }
        },
        // 第三组登录页面
        seaphone(){
            if(this.seaphone =='' && this.emailpwd ==''){
                this.dengbtnThree=true;
            }else{
                this.dengbtnThree=false;
            }
        }
    },
}
</script>

<style scoped>
.inputconOne{
    padding: 4px 0px;
    border-bottom: 1px solid #cccccc;
}
.inputconTwo{
     padding: 4px 0px;
}
.inputconOne input{
    /* width: 100%; */
    width: 320px;
    margin-left: 4px;
    height: 36px;
}
.inputconTwo input{
    width: 320px;
    margin-left: 4px;
    height: 36px;
}

.footerbox{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}
.footerbox span:nth-child(2){
    margin-left: 30px;
}
.third{
    margin-top: 130px;
}
.third p{
    font-size: 13px;
    color: #cccccc;
}
.zhanghao{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.zhanghao a{
    color: #42bd56;
}
.zhanghao>div>a:nth-child(2){
    margin-left: 12px;
}
.el-button{
    width: 100%;
    background-color: #42bd56;
    font-size: 17px;
    color: #ffffff;
}
.el-row{
    margin-top: 20px;
}
p>span{
    color: #cccccc;
}
p>a{
    color: #42bd56;
}
.inputcontent,.inputcon{
    margin-top: 30px;
    border: 1px solid #cccccc;
}

.bbox{
    padding: 15px 20px 0px 20px;
    max-width: 750px;
    margin: auto;
}
.inpOne{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0px;
    border-bottom: 1px solid #cccccc;
}
.inpTwo{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0px;
}
.inpOne span,.inpTwo span{
    padding:6px 4px;
    margin: 0px 5px;
    font-size: 13px;
}
.inpTwo span{
    color: #42bd56;
}
.inpOne span{
    border-right: 1px solid #cccccc;
}
.inpOne>span{
    font-weight: bold;
}
span>img{
    width: 66px;
    height: 66px;
}
div>img{
    width: 16px;
    height: 16px;
}
.inpOne>input{
    width: 276px;
    height: 36px;
}
.inpTwo>input{
    width: 230px;
    height: 36px;
}
p,h1{
    text-align: center;
    margin: 0px;
    font-weight: normal;
}
h1{
    font-size: 30px; 
}
input{
    outline: none;
    border: none;
}
</style>
