<?php 
echo 'hello';
if (isset($_GET["foo"])) {
	$sqlQuery = "select * from tblVolunteer where volunteerID = 1";
	
}





$serverName = "IS-HAY04.ischool.uw.edu"; //serverName\instanceName

// Since UID and PWD are not specified in the $connectionInfo array,
// The connection will be attempted using Windows Authentication.
$connectionInfo = array( "Database"=>"VOLUNTEER_DB","UID"=>"INFO445", "PWD"=>"GoHuskies!");
$conn = sqlsrv_connect($serverName, $connectionInfo);

if( $conn ) {
     echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}
echo 'hello';
// if (isset($_GET["foo"])) {
// 	$sqlQuery = "select * from tblVolunteer where volunteerID = 1";
// 	echo getResults($sqlQuery);
// }





// function getResults($sqlQuery) {
// 	$db = new PDO("sqlsrv:Server=IS-HAY04.ischool.uw.edu;Database=VOLUNTEER_DB", "INFO445", "GoHuskies!");
// 	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// 	$query = $db->query($sqlQuery);
// 	return $query;  
// }

?>