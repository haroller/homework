const {DataTypes} = require('sequelize')

const seq = require('../database/seq')

//创建用户表
const User = seq.define('User',{
    //id由seqeulize自动创建
    user_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'唯一的用户名'
    },
    password:{
        type:DataTypes.CHAR(8),
        allowNull:false,
        comment:'密码'
    },
    is_admin:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
        comment:'是否是管理员'
    }
})

//force:true表示若已经存在这样一张表，那么删除该表并创建一张新表
// User.sync({force:true})

module.exports = User;