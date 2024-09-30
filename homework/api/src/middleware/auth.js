const jwt = require('jsonwebtoken')

const auth = async (ctx,next)=>{
    const {authorization} = ctx.request.header;
    const token = authorization.replace('Bearer ','')

    try{

        const user = jwt.verify(token,'zxzxzx')
        ctx.state.user = user
        ctx.body = {
            message:'用户认证成功！'}

    }catch(err){
        ctx.body = {
            message:'用户认证失败！'}
        return

    }



    await next()
}


module.exports = {
    auth
}