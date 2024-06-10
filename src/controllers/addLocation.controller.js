import { validationResult } from "express-validator";
import { userService } from "../services/user.service.js";

export const addLocationController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(`Unable to add Location`);
    }

    try {
        const userLocations = await userService.addLocation(req.body);
        res.status(200).send({ message: `Location added successfully`, userLocations });
    } catch (e) {
        res.status(400).send({
            message: `Unable to add Location`,
            user: req.body
        });
    }
};