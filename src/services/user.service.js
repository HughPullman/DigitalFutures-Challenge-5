import User from "../models/user.model.js";

const login = async ({ username, password }) => {
    const user = await User.findOne({ username });

    if (user && password === user.password) {
        return user._id;
    }

    throw new Error();
}

const register = async ({ username, password }) => {
    try {
        const user = await User.findOne({ username });
        if (user) throw new Error("User already exists!");
        const newUser = new User({ username, password });
        await newUser.save();
        return;
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

const addLocation = async ({ id, location }) => {
    const user = await User.findOne({ _id: id });

    if (user) {
        const containsLoc = user.savedLocations.includes(location);
        if (!containsLoc) {
            user.savedLocations.push(location);
            user.save();
        }
        return;
    }
    throw new Error();
}

const getLocations = async ({ id }) => {
    const user = await User.findOne({ _id: id });

    if (user) {
        return user.savedLocations;
    }
    throw new Error();
}

const deleteLocation = async ({ id,  location }) => {
    const user = await User.findOne({ _id: id });

    if (user) {
        user.savedLocations = user.savedLocations.filter(e => e !== location);
        user.save();
        return user.savedLocations;
    }
    throw new Error();
}

export const userService = {
    login,
    register,
    changePassword,
    addLocation,
    getLocations,
    deleteLocation
};