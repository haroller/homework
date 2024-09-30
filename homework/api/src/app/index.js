
const cors = require('@koa/cors');
const Koa = require('koa');
const {koaBody} = require('koa-body')

//导入路由对象
const userRouter = require('../router/user.router');

//创建koa实例对象
const app = new Koa();

//注册koabody
app.use(koaBody());

// 配置CORS
app.use(cors({
    origin: 'http://localhost:3000', // 允许的源
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的方法
    allowHeaders: ['Content-Type','Authorization'], // 允许的头部
}));


//将所有带路由的中间件注册到koa实例对象上
app.use(userRouter.routes())



//导出koa实例对象
module.exports = app