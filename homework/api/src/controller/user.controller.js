//controller中编写后台处理逻辑

//导入操作数据库的模块
const { where } = require('sequelize');

//导入jwt包
const jwt = require('jsonwebtoken')


const {createUser, getUerInfo} = require('../service/user.service');
const {registerError} = require('../error/errortype')


class userController{
    async register(ctx,next){
        //1、获取用户数据
        const {user_name,password} = ctx.request.body;
        try{
            //2、操作数据库
            const res = await createUser(user_name,password);

            //3、返回结果
            ctx.body = {message:`恭喜您，${user_name}！您已注册成功！`}
        }catch (err){
            ctx.app.emit('error',registerError,ctx)
        }
        
    }


    

    async login(ctx,next){
        const {user_name,password} = ctx.request.body;
        try{
            const res = await getUerInfo({user_name});
            const {password,...resUser} = res;
            ctx.body = {
                message : `欢迎您，${user_name}！您已登录成功！`,
                result:{
                    token:jwt.sign(res,'zxzxzx',{expiresIn:'10s'})
                }
            }
        }catch(err){
            console.error('用户登陆失败',err);
            

        }
    }
}



//导出一个controller实例对象
module.exports = new userController