import User from "../models/user.model.js";

const login = async ({ username, password }) => {
    const user = await User.findOne({ username });

    if (user && password === user.password) {
        return user;
    }

    throw new Error();
}

const register = async ({ username, password }) => {
    try {
        const newUser = new User({ username, password });
        return await newUser.save();
    } catch (e) {
        throw e;
    }
}

export const userService = {
    login,
    register
};