<?php
&servername ="localhost";
&username = "root";
&password =" ";
&dbname ="mydb";
try{
    &conn mysqli_connect(&servername; &username; &password; &dbname);
    echo("successfully in connection");
}
catch("mysql; sql_exception &ex")
{
     echo("error in connection");
}
if(isset())