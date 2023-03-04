const {Basket, BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')

class basketController{

    async postOne(req,res){
        const basket = await Basket.findAll()
        return res.json(basket)

    }
    async getAll(req,res){
        const basket = await Basket.findAll()
        return res.json(basket)

    }

    async getOne(req,res){
        const {id} = req.params
        const basket_device = await BasketDevice.findOne(
            {
                where: {id},
                include: [{model: BasketDevice, as: 'info'}]
            },
        )
        return res.json(basket_device)
    }


}

module.exports = new basketController()