import service from "@/utils/request"

// /ncov/index?key=7599343671fbe9cbdf29c31cbbf1ee1f
const key1 = {
    key:"7599343671fbe9cbdf29c31cbbf1ee1f"
}
const key2 = {
    key:"62e34ad34025d5d5127135efa58d4ca8"
}

const api = {

    // 获取疫情信息
    getNcov(){
        return service.get("/ncov/index",{params:key1})
    },

    // 获取中国疫情数据
    getNcovCity(){
        return service.get("/txapi/ncovcity/index",{params:key1});
    },


    // 获取世界疫情数据
    getNcovWorld(){
        return service.get('/ncovabroad/index',{params:key1});
    }
}

export default api

