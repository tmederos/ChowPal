const router = require("express").Router();
const itemController = require('../controllers/itemController');

route.route("/")
    .get(itemController.findAll)
    .get(itemController.findOne)
    .post(itemController.createOne)
    .put(itemController.findOneAndUpdate)
    .delete(itemController.deleteOne);

module.exports = router;
