const express = require("express");
const router = express.Router();
const { getUsers , getUser, addUser, updateUser, logIn, deleteUser, addContact, deleteContact, updateContact } = require("../controllers/userController.js");

/**
 * @desc get all users from DB
 * @rout /ChatApp/users
 * @method GET
 * @access public
 */

router.get("/users", getUsers);

/**
 * @desc get user from DB
 * @rout /ChatApp/users/:id
 * @method GET
 * @access public
 */

router.get("/:id", getUser);

/**
 * @desc add user to DB
 * @rout /ChatApp/users/:id
 * @method post
 * @access public
 */
router.post("/adduser", addUser);


router.post("/login", logIn);



/**
 * @desc update user
 * @route /chatAPP/users/:id
 * @access public
 * @method put
*/
router.put("/:id", updateUser);


/**
 * @desc delete user
 * @route /chatAPP/users/:id
 * @access public
 * @method delete
*/
router.delete("/:id", deleteUser);

/**
 * @desc add contact
 * @rout /ChatApp/users/:id/addcontact
 * @method post
 * @access public
*/
router.post("/:id/addcontact", addContact);

/**
 * @desc update contact
 * @rout /ChatApp/users/:id/idcontact
 * @method post
 * @access public
*/
router.put("/:id/:idContact", updateContact);

/**
 * @desc delete contact
 * @rout /ChatApp/users/:id/idcontact
 * @method post
 * @access public
*/
router.delete("/:id/:idContact", deleteContact);



module.exports = router;
