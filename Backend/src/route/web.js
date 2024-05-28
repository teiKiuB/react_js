import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorcontroller from "../controllers/doctorController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.showCRUD);
    router.get('/edit', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-users', userController.handleGetUsers);
    router.post('/api/create-user', userController.handleCreateUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcode', userController.getAllCode)

    router.get('/api/top-doctor-home', doctorcontroller.getTopDoctorHome)
    router.get('/api/get-doctors', doctorcontroller.getDoctors)
    router.post('/api/save-info-doctor', doctorcontroller.postInfoDoctor)
    router.get('/api/get-detail-doctor', doctorcontroller.getDetailDoctor)

    return app.use("/", router);
}

module.exports = initWebRoutes;