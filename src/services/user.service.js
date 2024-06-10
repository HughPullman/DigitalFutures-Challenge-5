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

const changePassword = async ({ username, password, newPassword }) => {

    const user = await User.findOne({ username });
    
    if (user && password === user.password) {
            user.password = newPassword;
            return user;
    }
    throw new Error();
    
}

export const userService = {
    login,
    register,
    changePassword
};