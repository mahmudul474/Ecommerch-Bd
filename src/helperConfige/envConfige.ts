export  const  getBaseUrl=():string=>{
    return process.env.NEXT_PUBLIC_API_URL || `https://api.dreamfurniturebd.com/api/v1`
}