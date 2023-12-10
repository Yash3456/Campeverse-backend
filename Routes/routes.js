import express from "express";
import { LoginwithGoogle, UserLogin, Usersignup } from "../Controller/UserController.js";

const router = express.Router();

router.post("/signup",Usersignup);
router.post("/login",UserLogin);

router.post("/googlelogin",LoginwithGoogle);

export default router;


