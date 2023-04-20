import { Request, Response, Router } from "express";
import { getAviso,getAvisos,updateAviso,postAviso,deleteAviso } from "../controllers/notification";
import { logMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:5432/items [GET]
 */
router.get("/all", logMiddleware, getAvisos);
router.get("/:idNotification", getAviso);
router.post("/",postAviso);
router.put("/:idNotification",updateAviso);
router.delete("/:idNotification", deleteAviso);

export {router};