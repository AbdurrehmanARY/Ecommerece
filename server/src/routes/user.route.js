
import { Router } from "express"
import { login, logout, myProfile, register } from "../controllers/user.controller.js"
import { upload } from "../middleware/multer.middleware.js"
 const router=Router()

 router.route("/register").post(
    upload.single(),
    register
    )


// login router 
router.route("/login").post(login)

// my profile route
// router.get("/myProfile",isAuth,myProfile)
router.get("/myProfile",myProfile)

// logout route 
router.get("/logout",logout)






















export default router