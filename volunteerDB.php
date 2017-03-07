<?php 
if (isset($_GET["foo"])) {
	$sqlQuery = "select * from tblVolunteer where volunteerID = 1";
	echo getResults($sqlQuery);
}





function getResults($sqlQuery) {
	$db = new PDO("sqlsrv:Server=IS-HAY04.ischool.uw.edu;Database=VOLUNTEER_DB", "INFO445", "GoHuskies!");
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$query = $db->query($sqlQuery);
	return $query;  
}




?>