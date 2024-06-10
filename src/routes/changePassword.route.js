import express from "express";

import { changePasswordController } from "../controllers/changePassword.controller.js";
import { changePasswordValidation } from "../middleware/user.validation.js";

const router = express.Router();

router.route("/").post(changePasswordValidation, changePasswordController);

export { router as changePasswordRouter };