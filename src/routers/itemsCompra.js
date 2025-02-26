import express from "express";

import getItemsCompra from "../controllers/itemsCompra/getItemsCompra.js";
import listItemsCompra from "../controllers/itemsCompra/listItemsCompra.js";
import postItemsCompra from "../controllers/itemsCompra/postItemsCompra.js";
import putItemsCompra from "../controllers/itemsCompra/putItemsCompra.js";
import patchItemsCompra from "../controllers/itemsCompra/patchItemsCompra.js";
import deleteItemsCompra from "../controllers/itemsCompra/deleteItemsCompra.js";

const router = express.Router();

router.get("/", getItemsCompra);
router.get("/list", listItemsCompra);
router.post("/", postItemsCompra);
router.put("/", putItemsCompra);
router.patch("/", patchItemsCompra);
router.delete("/", deleteItemsCompra);

export default router;
