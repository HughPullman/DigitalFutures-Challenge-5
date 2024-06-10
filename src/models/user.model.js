import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    savedLocations: [{ type: String }]
});

const User = new mongoose.model("User", userSchema);

export default User;