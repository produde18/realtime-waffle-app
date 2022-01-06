const Menu = require('../../models/menu')
function homeController() {   //function returns an object 
    return {
        async index(req, res) {     //same as index : function ()
            const waffles = await Menu.find()
            // console.log(waffles)
            return res.render('home', { waffles: waffles })
        }
    }
}

module.exports = homeController