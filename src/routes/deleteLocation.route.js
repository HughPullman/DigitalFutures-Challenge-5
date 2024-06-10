import express from "express";

import { deleteLocationController } from "../controllers/deleteLocation.controller.js";
import { deleteLocationValidation } from "../middleware/user.validation.js";

const router = express.Router();

router.route("/").post(deleteLocationValidation, deleteLocationController);

export { router as deleteLocationRouter };