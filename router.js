const express = require("express");
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("./controller_user");
 
const router = express.Router();
 
router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
 
module.exports = router;