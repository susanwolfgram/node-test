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