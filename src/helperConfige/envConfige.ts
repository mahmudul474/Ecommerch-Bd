export  const  getBaseUrl=():string=>{
    return process.env.NEXT_PUBLIC_API_URL || `https://site-api.trelyt.store/api/v1`
}