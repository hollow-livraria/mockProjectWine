import express from "express";

import getVinho from "../controllers/vinho/getVinho.js";
import listVinho from "../controllers/vinho/listVinho.js";
import postVinho from "../controllers/vinho/postVinho.js";
import putVinho from "../controllers/vinho/putVinho.js";
import patchVinho from "../controllers/vinho/patchVinho.js";
import deleteVinho from "../controllers/vinho/deleteVinho.js";

const router = express.Router();

router.get("/", getVinho);
router.get("/list", listVinho);
router.post("/", postVinho);
router.put("/", putVinho);
router.patch("/", patchVinho);
router.delete("/", deleteVinho);

export default router;
