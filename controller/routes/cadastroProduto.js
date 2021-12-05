const seguranca = require("../../model/components/seguranca");
const usuarioBanco = require("../../model/repositories/usuarios-bd");
var UsuarioLogin = require("../../model/entities/Usuario");

module.exports = function (app) {
  app.post("/cadastro/produto/salvar", (req, res) => {
    try {
      usuarioBanco.insertUsuario({
        nome: req.body.nome,
        senha: seguranca.ocultarSenha(req.body.senha),
      });
      res.render("Cadastro", {
        title: "Cadastro",
        mensagem: "Usuario Cadastrado com sucesso",
      });
    } catch (error) {
      res.render("Cadastro", {
        title: "Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  app.get("/cadastro", (req, res) => {
    res.render("Cadastro", { title: "Cadastro", mensagem: null });
  });
};
