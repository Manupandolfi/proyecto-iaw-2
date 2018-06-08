var router = express.Router();
const climaController = require('../controllers/clima');

router.get('/', climaController.getClima);
