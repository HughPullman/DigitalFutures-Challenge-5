import express from "express";

import { getLocationsController } from "../controllers/getLocations.controller.js";
import { getLocationsValidation } from "../middleware/user.validation.js";

const router = express.Router();

router.route("/").post(getLocationsValidation, getLocationsController);

export { router as getLocationsRouter };