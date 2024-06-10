import { check } from "express-validator";

export const registerValidation = [
    check("username").exists().isString(),
    check("password").exists().isString()
];

export const loginValidation = [
    check("username").exists().isString(),
    check("password").exists().isString()
];