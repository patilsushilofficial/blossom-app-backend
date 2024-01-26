import express from "express";
import { createUser, loginUser } from "../controllers/user.controller";

const userRoutes = express.Router();

userRoutes.route("/create").post(createUser);
userRoutes.route("/login").post(loginUser);
// userRoutes.route("/create").put(createUser);
// userRoutes.route("/create").delete(createUser);

export default userRoutes;
