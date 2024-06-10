import { validationResult } from "express-validator";
import { userService } from "../services/user.service.js";

export const loginController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(`Unable to login, please check details`);
    }
    try {
        const user = await userService.login(req.body);
        res.status(200).send({ message: `Login Successful`, user });
    } catch (e) {
        res.status(400).send({
            message: `Unable to login, please check details`,
            user: req.body
        });
    }
};