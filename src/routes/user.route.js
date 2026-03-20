import express from "express";
import { addUser, deletUser, fetchUserData, updateUser } from "../controller/user.controller.js";

const userRoutes = express.Router();


userRoutes.get('/', fetchUserData)

userRoutes.get('/:id', fetchUserData)

userRoutes.post('/', addUser)

userRoutes.patch('/:id', updateUser)

userRoutes.delete('/:id', deletUser)


export default userRoutes;