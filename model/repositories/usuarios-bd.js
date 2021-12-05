const db = require("../services/db");
const usuario = require("../entities/Usuario");

async function insertUsuario(usuario) {
  const conn = await connect();
  const sql = "INSERT INTO usuario(nome,senha) VALUES(?,?);";
  const values = [usuario.nome, usuario.senha];
  return await conn.query(sql, values);
}

async function selectUsuario() {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM usuario;");
  return rows;
}

async function deleteUsuario(id) {
  const sql = "DELETE FROM usuario WHERE id=?;";
  const conn = await connect();
  return await conn.query(sql, [id]);
}

async function updateUsuario(id, usuario) {
  const conn = await connect();
  const sql = "UPDATE usuario SET nome=?, senha=? WHERE id=?";
  const values = [usuario.nome, usuario.senha, id];
  return await conn.query(sql, values);
}

module.exports = { selectUsuario, insertUsuario, deleteUsuario, updateUsuario };

async function login(usuario) {
  const conn = await db.connect();
  const sql = "SELECT * FROM usuario WHERE nome =? and senha=? LIMIT 1";
  const values = [usuario.nome, usuario.senha];
  const rows = await conn.query(sql, values);
  //const rows = await  Promise.apply(conn.query(sql, values));

  if (rows.length > 0) return rows[0];
  else return null;
}
function isEmptyObject(obj) {
  const teste = !Object.keys(obj).length;
  return teste;
}
