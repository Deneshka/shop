const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const deviceController = require("../controllers/deviceController");


router.post('/', basketController.postOne)
router.get('/', basketController.getOne)
router.get('/', basketController.getAll)


module.exports = router