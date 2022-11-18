const { Router } = require( 'express' );
const router = Router(); //Router permite definir las rutas y urls del servidor

const { listGateway ,createGateway } = require('../controllers/index.controller')

// router.get('/users', getUsers );
router.post('/create_gateway', createGateway );
//router.post('/update_gateway', updateGateway );
router.get('/list_gateway', listGateway );
//router.post('/delet_gateway', deleteGateway );


module.exports = router;