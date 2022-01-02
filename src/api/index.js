import service from "@/utils/request"

// /ncov/index?key=7599343671fbe9cbdf29c31cbbf1ee1f
const params = {
    key:"7599343671fbe9cbdf29c31cbbf1ee1f"
}
const api = {
    getNcov(){
        return service.get("/ncov/index",{params})
    }
}

export default api

