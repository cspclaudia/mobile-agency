const express = require("express");
const routes = express.Router();
const multer = require("./config/multer");
const userController = require("./controllers/userController");
const packageController = require('./controllers/packageController');
const clientController = require('./controllers/clientController');
const auth = require("./middlewares/auth");
routes.post("/user/register", userController.register);
routes.post("/user/login", userController.login);
routes.get("/user/info", auth, userController.userInfo);
routes.post('/user/image',auth,multer.single('imagem'),userController.uploadImage);
routes.post('/user/update',auth,userController.update);
routes.post('/package/create',auth,packageController.registerPackage);
routes.get('/packages/list',auth,packageController.listPackages);
routes.post('/package/remove',auth,packageController.removePackage);
routes.post('/client/create',auth,clientController.registerClient);
routes.get('/clients/list',auth,clientController.listClients);
routes.post('/client/remove',auth,clientController.removeClient);

module.exports = routes;