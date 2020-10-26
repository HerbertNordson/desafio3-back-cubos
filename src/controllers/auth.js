const jwt = require('jsonwebtoken');
const {response} = require('./response');
const Usuarios = require('../repositories/usuarios');
const Password = require('../utils/password');

require('dotenv').config();

const autenticar = async (ctx) => {
	const { email = null, senha = null } = ctx.request.body;
	if (!email || !senha) {
		return response(ctx, 400, { mensagem: 'Pedido mal formatado' });
	}

	const usuario = await Usuarios.obterUsuariosPorEmail(email);

	if (usuario) {
		const comparison = await Password.check(senha, usuario.senha);
		if (comparison) {
			const token = await jwt.sign(
				{ id: usuario.id, email: usuario.email },
				process.env.JWT_SECRET || 'cubosacademy',
				{
					expiresIn: '1h',
				}
			);
			return response(ctx, 200, { token });
		}
	}

	return response(ctx, 200, { mensagem: 'Email ou senha incorretos' });
};

module.exports = { autenticar };