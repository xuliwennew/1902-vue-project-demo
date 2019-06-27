import cartApi from "../../apis/cartApi"

/**
 * 1. 是否有需要共享的数据
 * 2. 共享的数据处理操作 mutations actions
 */
export default {

    state: {
        cartInfo: {}
    },
    mutations: {

        INIT(state, data) {
            state.cartInfo = data;
        }
    },
    actions: {

        INIT(store, payload) {
            cartApi.getCartInfo(data => {
                store.commit("INIT", data)
            })
        }
    },
    getters: {
        GETCART(state){
            return state.cartInfo
        }
    }

}
