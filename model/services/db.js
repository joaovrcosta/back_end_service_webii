async function connect(){
    console.log('MySQL!')
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:admin123@localhost:3306/webii");
    console.log("conectou no Mysql!");
    global.connection = connection;
    return connection;
}

module.exports = {connect}