import { Request, Response, Router } from "express";
import { getAviso,getAvisos,updateAviso,postAviso,deleteAviso } from "../controllers/notification";
import { logMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:5432/items [GET]
 */
router.get("/all", logMiddleware, getAvisos);
router.get("/:idLocation", getAviso);
router.post("/",postAviso);
router.put("/:idLocation",updateAviso);
router.delete("/:idLocation", deleteAviso);

export {router};