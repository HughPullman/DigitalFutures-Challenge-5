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
        user.save();
        return user;
    }
    throw new Error();
    
}

const addLocation = async ({ username, password, location }) => {
    const user = await User.findOne({ username });

    if (user && password === user.password) {
        user.savedLocations.push(location);
        return user.savedLocations;
    }
    throw new Error();
}

const getLocations = async ({ username, password }) => {
    const user = await User.findOne({ username });

    if (user && password === user.password) {
        return user.savedLocations;
    }
    throw new Error();
}

export const userService = {
    login,
    register,
    changePassword,
    addLocation,
    getLocations
};