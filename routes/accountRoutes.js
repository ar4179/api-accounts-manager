const express = require("express");
const accountController = require("./../controllers/accountController");
const router = express.Router();

router
    .route("/")
    .get(accountController.getAllAccounts)
    .post(accountController.createAccount);

router
    .route("/:id")
    .get(accountController.getAccount)
    .patch(accountController.updateAccount)
    .delete(accountController.deleteAccount); // delete tasks associated with the account as well

router.route("/:id/tasks").get(accountController.getTasksByAccount);

module.exports = router;
