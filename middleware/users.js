
const jwt = require("jsonwebtoken");
module.exports = {

    validateRegister: (req, res, next) => {
        
        if (!req.body.nombre || req.body.nombre.length < 3) {
            return res.status(400).send({
                msg: 'Please enter a username with min. 3 chars'
            });
        }
        if (!req.body.contraseña || req.body.contraseña.length < 6) {
            return res.status(400).send({
                msg: 'Please enter a password with min. 6 chars'
            });
        }
        if (
            !req.body.contraseña_repeat ||
            req.body.contraseña != req.body.contraseña_repeat
        ) {
            return res.status(400).send({
                msg: 'Both passwords must match'
            });
        }
        next();

    },
    isLoggedIn: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(
                token,
                'SECRETKEY'
            );
            req.userData = decoded;
            next();
        } catch (err) {
            return res.status(401).send({
                msg: 'Your session is not valid!'
            });
        }
    }

};
