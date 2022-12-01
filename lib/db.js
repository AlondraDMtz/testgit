const mysql = require ( 'mysql' ) ;
const mysqlConnection = mysql.createConnection ( {
  host  : 'localhost',
  user  :'root',
  password  :'',
  port  : '3306',
  database   : 'proyecto'
} ) ;
mysqlConnection.connect( ) ;
module.exports = mysqlConnection;