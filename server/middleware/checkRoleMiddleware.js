const jwt = require('jsonwebtoken')

module.exports = function(role){
    return  function (req, res, next) {
        if (req.method === 'OPTIONS'){
            next()
        }
        try{
            const token = req.headers.authorization.split('')[1]
            if (!token){
                return next.status(401).json({messege:'Пользователь не авторизован'})
            }
            const decoded = jwt.verify(token,process.env.SECRET_KEY)
            if (decoded.role !== role ){
                return next.status(403).json({messege:'У вас нет доступа'})

            }

            req.user = decoded
            next()
        }catch (e) {
            return next.status(401).json({messege:'Пользователь не авторизован'})
        }

    }

}

