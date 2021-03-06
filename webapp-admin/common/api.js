
//api.get(url,params)
export default {

    //async await
    get(url,params,cb){
        fetch(url,{
            method:"GET",
            credentials: "include",
            mode: "cors",

        }).then(res=>{
            res.json().then(cb)
        })
    },

    post(url,params,cb){
        fetch(url,{
            method:"POST",
            credentials: "include",
            mode: "cors",

            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:params
        }).then(res=>{
            res.json().then(cb)
        })
    },

    delete(url,params,cb){
        fetch(url,{
            method:"delete",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:params
        }).then(res=>{
            res.json().then(cb)
        })
    }
}
