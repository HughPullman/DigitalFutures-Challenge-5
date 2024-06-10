import express from "express";

import { addLocationController } from "../controllers/addLocation.controller.js";
import { addLocationValidation } from "../middleware/user.validation.js";

const router = express.Router();

router.route("/").post(addLocationValidation, addLocationController);

export { router as addLocationRouter };