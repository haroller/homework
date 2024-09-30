const {APP_PORT} = require('./config/config.default');

//导入koa实例对象
const app = require('./app/index')




//启动服务
app.listen(APP_PORT,()=>{
    console.log(`it is running on http://localhost:${APP_PORT}`); 
});