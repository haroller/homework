
const { getUerInfo } = require('../service/user.service')
const {formatError,alreadyExist} = require('../error/errortype')
const userValidator = async (ctx,next)=>{
    const {user_name,password} = ctx.request.body;

    if(!user_name || !password){
        ctx.app.emit('error',formatError,ctx)
        return;
    }
    await next();
}


const verifyUser = async (ctx,next)=>{
    const {user_name} = ctx.request.body;
    if (await getUerInfo({user_name})){
    //    ctx.app.emit('error',alreadyExist,ctx)
            ctx.body ={message:'用户已存在，请勿重复注册！！！'} 
        return
    }
    await next()
}
const verifyLogin = async (ctx,next)=>{
    //1、判断用户名是否存在
    const {user_name,password} = ctx.request.body;
    const res = await getUerInfo({user_name})
    if(!res){
        ctx.body ={
            message:'用户名不存在，登录失败，请注册后重试！'
        } 
        return;
    }
    if(password != res.password){
        ctx.body ={message:'该用户存在，但登录密码错误，请重试！'}
        return;
    }
    //2、密码是否匹配

    await next();
}




module.exports = {userValidator,verifyUser,verifyLogin};