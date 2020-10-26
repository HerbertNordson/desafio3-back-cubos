const Router = require('koa-router');
const router = new Router();

const Classificacao = require('./controllers/classificacao');
const Rodadas = require('./controllers/rodadas');
// const Usuarios = require('./controllers/usuarios');
const Auth = require('./controllers/auth');


router.get("/classificacao", Classificacao.classificacao);
router.get(`/jogos/:rodada`, Rodadas.rodadas);
router.post("/auth", Auth.autenticar);

module.exports = router;
