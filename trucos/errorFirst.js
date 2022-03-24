const asincrona = (callback)=>{
    setTimeout(() => {
        try{
            let a = 3 + z
            callback(null, a)
        }catch(err){
            callback(err)
        }
    }, 1000);
}

asincrona((err, data)=>{
    if(err){
        console.error("hay un error")
        console.error(err)
        return false
    }

    console.log("ok");
    console.log(data);
})