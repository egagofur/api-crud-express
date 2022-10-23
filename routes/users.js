const express = require("express");
const router = express.Router();
const usersHandler = require("./handlers/users");
const usersIdHandler = require("./handlers/users/id");

// get all users data
router.route("/").get(usersHandler.get).post(usersHandler.post);

router
  .route("/:userId")
  .get(usersIdHandler.get)
  .put(usersIdHandler.put)
  .delete(usersIdHandler.delete);

module.exports = router;
