// const { Router } = require("express");
// // const auth = require("./middlewares/auth.js");

// const path = require("path");
// const rh = require("./requesthandler.js");

// // const multer = require("multer");

// // const storage = multer.diskStorage({
// //     destination: "./files",
// //     filename: (req, file, cb) => {
// //         cb(null, file.originalname);
// //     }
// // });

// // const upload = multer({ storage: storage });

// const router = Router();

// router.route("/register").post(rh.register);
// router.route("/login").post(rh.login);
// router.route("/profile/:id").get(rh.profile);
// router.route("/update/:id").put(rh.update);
// // router.route("/get-profile").get(auth, rh.getprofile);
// // router.route("/get-file").get(rh.getfile);
// router.route("/listing").get(rh.listing);
// router.route("/deletedata/:id").delete(rh.deletedata);

// module.exports = router;
