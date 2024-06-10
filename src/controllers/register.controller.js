import { validationResult } from "express-validator";
import { userService } from "../services/user.service.js";

export const registerController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(`Creating new user failed`);
    }
    try {
        const user = await userService.register(req.body);
        res.status(201).json({ user });
    } catch (e) {
        res.status(400).send(`Creating new user failed`);
    }
};