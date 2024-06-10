import express from "express";

import { addLocationController } from "../controllers/addLocation.controller";
import { addLocationValidation } from "../middleware/user.validation";

const router = express.Router();

router.route("/").post(addLocationValidation, addLocationController);

export { router as addLocationRouter };