const { Router } = require('express')

const router = require('express').Router(),
    middleware = require('../../middlewares'),
    controller = require("./controllers");

router.use(middleware.authenticated)

router.post('/', middleware.masterOnly, controller.create)
router.delete('/:id', middleware.masterOnly, controller.remove)
router.get('/:id', controller.find)
router.put('/:id', controller.update)
router.get("/", controller.findAll)

module.exports = router
