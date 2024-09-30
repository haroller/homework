//导入配置文件
const {MYSQL_HOST,MYSQL_PORT,MYSQL_USER,MYSQL_PWD,MYSQ_DB} = require('../config/config.default')


//导入sequelize包
const {Sequelize} = require('sequelize');

//2、实例化对象
const seq = new Sequelize(MYSQ_DB,MYSQL_USER,MYSQL_PWD,{
    host: MYSQL_HOST,
    dialect: 'mysql'
});


//测试数据库是否连接成功
// seq.authenticate().then(()=>{
//     console.log('连接成功');
// }).catch((err)=>{console.log('连接失败，',err);
// })

//到处seq对象
module.exports = seq