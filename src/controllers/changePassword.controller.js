import { validationResult } from "express-validator";
import { userService } from "../services/user.service.js";

export const changePasswordController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(`Unable to change password, please check details`);
    }
    try {
        const user = await userService.changePassword(req.body);
        res.status(200).send({ message: `Password change successful`, user });
    } catch (e) {
        res.status(400).send({
            message: `Unable to change password, please check details`,
            user: req.body
        });
    }
};