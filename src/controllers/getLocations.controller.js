import { validationResult } from "express-validator";
import { userService } from "../services/user.service.js";

export const getLocationsController = async (req, res) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(422).send(`Unable to get Locations`);
    }

    try {
        const userLocations = await userService.getLocations(req.body);
        res.status(200).send({ message: `Locations loaded successfully`, userLocations });
    } catch (e) {
        res.status(400).send({
            message: `Unable to get Locations`,
            user: req.body
        });
    }
}