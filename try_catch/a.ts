const  pos = async () => {
    return new Promise((resolve, reject) => {
        console.log(resolve);
        setTimeout(()=>{
            reject('agweagewa')
        },2000)
    })
}

const qpq = async () => {
    try{
        await pos();
    }catch(e) {
        console.log(`[queryDistributor]` + e)
        throw e
    }
}

(async() =>{
    try {
        await qpq();
    } catch (e) {
        console.log('[outside]' + e)
    }
})()
