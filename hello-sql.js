// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var sql = require("seriate");

// Change the config settings to match your 
// SQL Server and database

var config = {  
    "server": "IS-HAY04.ischool.uw.edu",
    "user": "INFO445",
    "password": "GoHuskies!",
    "database": "VOLUNTEER_DB"
};

sql.setDefaultConfig( config );

// sql.execute( {  
//         query: "SELECT * FROM INFORMATION_SCHEMA.TABLES"
//     } ).then( function( results ) {
//         console.log( results );
//     }, function( err ) {
//         console.log( "Something bad happened:", err );
//     } );

sql.execute( {  
        query: "SELECT * FROM tblVOLUNTEER WHERE volunteerID = 1"
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );

/*
var myTable = "MyTable";  
sql.execute( {  
        query: "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = @tableName",
        params: {
            tableName: {
                type: sql.NVARCHAR,
                val: myTable,
            }
        }
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );

*/