import express from "express";

import { getLocationsController } from "../controllers/getLocations.controller";
import { getLocationsValidation } from "../middleware/user.validation";

const router = express.Router();

router.route("/").post(getLocationsValidation, getLocationsController);

export { router as getLocationsRouter };