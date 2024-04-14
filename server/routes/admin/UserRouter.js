var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();
//图片上传
const multer = require('multer')
//放在静态资源文件夹下
const upload = multer({dest:'public/avataruploads/'})
 
/* GET home page. */
UserRouter.post('/adminapi/user/login', UserController.login)    
// single是一个中间件 
UserRouter.post('/adminapi/user/upload', upload.single('file'), UserController.upload)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
UserRouter.post('/adminapi/user/add', upload.single('file'), UserController.add)     
//实现用户列表的增删改查功能   
// 获取用户列表展示页面                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
UserRouter.get('/adminapi/user/list', UserController.getList)
// 编辑用户信息弹出框展示页面
UserRouter.get('/adminapi/user/list/:id', UserController.getList)
// 编辑用户信息弹出框返回后端
UserRouter.put('/adminapi/user/list/:id', UserController.putList)
// 删除用户
UserRouter.delete('/adminapi/user/list/:id', UserController.delList)

UserRouter.get('/adminapi/user/home', (req,res)=>{
    res.send({ok:1})
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

module.exports = UserRouter;
