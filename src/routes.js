const Router = require('koa-router');
const router = new Router();

const Classificacao = require('./controllers/classificacao');
const Rodadas = require('./controllers/rodadas');
const Auth = require('./controllers/auth');
const Session = require('./middlewares/session')

router.get('/classificacao', Classificacao.classificacao);
router.get('/jogos/:rodada', Rodadas.rodadas);
router.post('/auth', Auth.autenticar);
router.post('/jogos', Session.verify, Rodadas.atualizarRodada);

module.exports = router;
