// import express from "express";

// import RoleController from "../controllers/RoleController";

// const router = express.Router();
// router.get("/role", RoleController.getRole);
// router.post("/addrole", RoleController.createRole);
// router.delete("/deleterole/:id", RoleController.deleteRole);
// router.patch("/updaterole/:id", RoleController.updateRole);
// router.get("/role/:id", RoleController.getRoleById);

// export default router;

import  { Router } from "express";
import RolesController from "../controllers/RoleController";


export class RolesRouter {
    private router: Router;
    private rolesController: RolesController;
    constructor() {
        this.rolesController = new RolesController();
        this.router = Router();
        this.initializeRoutes()

    }
    private initializeRoutes(): void{
        this.router.get("/", this.rolesController.getRolesController);
     
            
    }

    getRouter(): Router {
        return this.router
    }
}




