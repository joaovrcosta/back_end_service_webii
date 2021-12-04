// (async ()=> {
//     const db = require('./db');
//     console.log('começou!');

//     console.log('select * from usuario');
//     const usuarios = await db.selectUsuario();
//     //const usua = await db.selectUsuario
//     console.log(usuarios);

//     // console.log('insert into cliente');
//     // const result = await db.insertUsuario({
//     //     nome:"felipe", 
//     //     senha:"felipe@email.com"
//     // });
//     // console.log(result);


//     // console.log('delete from cliente');
//     // const result1 = await db.deleteUsuario(1);
//     // console.log(result1);

//     console.log('update usuario');
//     const result2= await db.updateUsuario(2, {nome: "Fabricio", senha: "jfjei3943jkckfs04"})
//     console.log(result2);
// })();

(async () => {
    const database = require('./dborm');
    const Cliente = require('./cliente')

    console.log('Criar tabela ==========================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);

    // console.log('Criar um registro =============');
    // const insetirCliente = await Cliente.create({
    //     nome: 'Fernando Leal',
    //     idade: 32,
    //     endereco: 'Avenida dos Latinos'
    // })
    // console.log(insetirCliente);

    // console.log('Buscar um registro ===============');
    // const cliente = await Cliente.findByPk(1);
    // console.log(cliente);

    // console.log('Alterar um registro ==========================')
    // const clienteAlterar = await Cliente.findByPk(2);
    // clienteAlterar.nome = "Icaro Freitas"
    // const resultadoSave = await clienteAlterar.save();
    // console.log(resultadoSave);

    console.log('Buscar todos os registros ==========');
    const clientes = await Cliente.findAll();
    console.log(clientes);

    console.log('Deletar o registro ================');
    const clienteDelete = await Cliente.findByPk(4);
    clienteDelete.destroy();

}) ();
