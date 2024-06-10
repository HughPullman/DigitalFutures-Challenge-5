import { check } from "express-validator";

export const registerValidation = [
    check("username").exists().isString(),
    check("password").exists().isString()
];

export const loginValidation = [
    check("username").exists().isString(),
    check("password").exists().isString()
];

export const changePasswordValidation = [
    check("username").exists().isString(),
    check("password").exists().isString(),
    check("newPassword").exists().isString()
];

export const addLocationValidation = [
    check("username").exists().isString(),
    check("password").exists().isString(),
    check("location").exists().isString()
];

export const getLocationsValidation = [
    check("username").exists().isString(),
    check("password").exists().isString(),
];

export const deleteLocationValidation = [
    check("username").exists().isString(),
    check("password").exists().isString(),
    check("location").exists().isString()
];