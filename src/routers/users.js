import express from "express";

import getUser from "../controllers/user/getUser.js";
import listUser from "../controllers/user/listUser.js";
import postUser from "../controllers/user/postUser.js";
import putUser from "../controllers/user/putUser.js";
import patchUser from "../controllers/user/patchUser.js";
import deleteUser from "../controllers/user/deleteUser.js";

const router = express.Router();

router.get("/list", listUser);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.patch("/", patchUser);
router.delete("/:id", deleteUser);

export default router;
