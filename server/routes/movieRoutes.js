import express from "express";
const router = express.Router();

import { request, add, remove } from "../controller/movieController.js";

router.route("/movies").get(request);
router.route("/movies").post(add);
router.route("/movies").delete(remove);
// router.route("/plant").patch(update);
// router.route("/plant/:plantId").get(pick);

export default router;
