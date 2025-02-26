import express from "express";

import getCompra from "../controllers/compra/getCompra.js";
import listCompra from "../controllers/compra/listCompra.js";
import postCompra from "../controllers/compra/postCompra.js";
import putCompra from "../controllers/compra/putCompra.js";
import patchCompra from "../controllers/compra/patchCompra.js";
import deleteCompra from "../controllers/compra/deleteCompra.js";

const router = express.Router();

router.get("/", getCompra);
router.get("/list", listCompra);
router.post("/", postCompra);
router.put("/", putCompra);
router.patch("/", patchCompra);
router.delete("/", deleteCompra);

export default router;
