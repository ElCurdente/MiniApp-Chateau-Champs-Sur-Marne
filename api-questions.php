<?php

header("Access-Control-Allow-Origin: *"); 
header('content-type:application/json');      
header('Access-Control-Allow-Headers: Content-Type');  
      
$db = new PDO('mysql:host=vc5fo.myd.infomaniak.com;dbname=vc5fo_mini_app', 'vc5fo_admin', '742695anToine', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $req = "SELECT * FROM questions";
      $stmt=$db->query($req);
      $questions=$stmt->fetchAll(PDO::FETCH_ASSOC);
            echo'{
          "items" :
                ';
          echo json_encode($questions);
          echo'}';
        
?>