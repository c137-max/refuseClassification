import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({  
    state: {  
        uerInfo: {
			username: "",
			userID: "",
			head_pic: "",
			token: ""
		},  
        hasLogin: false,
		token: ""
    },  
    mutations: {  
        login(state, provider) {//改变登录状态  
            state.hasLogin = true  
            state.uerInfo.token = provider.token  
			state.token = provider.token  
            state.uerInfo.userID = provider.user_name  
            state.uerInfo.head_pic = provider.head_pic  
            uni.setStorage({//将用户信息保存在本地  
                key: 'uerInfo',  
                data: provider  
            })  
        },  
        logout(state) {//退出登录  
            state.hasLogin = false  
            state.uerInfo = {}
			state.token = ""
            uni.removeStorage({  
                key: 'uerInfo'  
            })  
        },
    }  
})
export default store