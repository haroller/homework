//导入User表对象
const User = require('../model/user.model')

class userService{
    async createUser(user_name,password){
        //创建新用户并将用户信息写入数据库
        const res = await User.create({user_name: user_name,password: password});
        return res;
    }


    async getUerInfo({ id, user_name, password}) {
        const whereOpt = {}
        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
    
        const res = await User.findOne({
          attributes: ['id', 'user_name', 'password'],
          where: whereOpt,
        })
    
        return res ? res.dataValues : null
      }
      
}






module.exports = new userService;