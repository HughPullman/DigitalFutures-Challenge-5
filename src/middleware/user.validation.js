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
    check("id").exists().isString(),
    check("location").exists().isString()
];

export const getLocationsValidation = [
    check("id").exists()
];

export const deleteLocationValidation = [
    check("id").exists().isString(),
    check("location").exists().isString()
];