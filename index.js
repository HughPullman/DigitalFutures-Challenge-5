import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectToDb } from "./src/db/connection.js";
import { loginRouter } from "./src/routes/login.route.js";
import { registerRouter } from "./src/routes/register.route.js";
import { changePasswordRouter } from "./src/routes/changePassword.router.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(cors());
app.use(express.json());

try {
    console.log(`Connecting to Database @ ${process.env.DB_URI}`);
    await connectToDb(process.env.DB_URI);
    console.log(`Connected to Database @ ${process.env.DB_URI}`);
} catch (e) {
    console.log(e);
}

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/passChange', changePasswordRouter);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on : ${server.address().address}:${server.address().port}`);
});

export default server;