const Sequelize = require('sequelize');
const sequelize = new Sequelize('webii', 'root', 'admin123',{dialect: 'mysql', host: 'localhost', port:3306})

async function connectORM() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:admin123@localhost:3306/webii");
    console.log('Conectou no MySQL');
    global.connection = connection;
    return connection;
}


module.exports = {sequelize}

