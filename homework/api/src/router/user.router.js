//导入koa路由包
const Router = require('koa-router');

const {userValidator,verifyUser,verifyLogin} = require('../middleware/user.middleware')
const {auth} = require('../middleware/auth')


//解构出一个controller的一个register方法
const {register,login} = require('../controller/user.controller')


//创建一个路由对象，并添加前缀路由
const router = new Router({prefix: '/users'});


//为注册接口register添加路由
router.post('/register',userValidator,verifyUser,register);

//为登录接口logint添加路由
router.post('/login',userValidator,verifyLogin,login);

//访问其他资源时（测试jwt认证）
router.get('/jwttest',auth,(ctx,next)=>{
    ctx.body={
        message:'用户认证成功！JWT验证成功!您已处于登录状态！（token有效期为10s）'}
})


//导出路由对象
module.exports = router;