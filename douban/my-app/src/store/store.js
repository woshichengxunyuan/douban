import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        obj:[],
        moviesarr:[]
    },
    mutations:{
        axdata(state,paload){
            state.obj=paload.data.shouye;
        },
        axmovies(state,payload){
            state.moviesarr=payload.data.movie;
            console.log(state.moviesarr);
        }
    },
    actions:{
        axiosdata(context){
            axios({
                url:"/link/data",
                method:"get"
            }).then((ok)=>{
                console.log(ok)
                context.commit("axdata",ok);
            })
        },
        moviesdata(context){
            axios({
                url:"/link/data",
                method:"get"
            }).then((ok)=>{
                context.commit("axmovies",ok);
            })
        }
    }
})