<?php 
# datadelete.php 
require_once 'perc14.php'; 
 
try { 
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password, 
                    array( 
                            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION, 
                            \PDO::ATTR_PERSISTENT => false 
                        ) 
                   ); 
 
    $handle = $conn->prepare(" 
        DELETE FROM mahasiswa 
        WHERE ID=:id 
    "); 
     
    $dataID = 4; 
     
    $handle->bindParam(':id', $dataID, PDO::PARAM_INT); 
     
    $handle->execute(); 
     
    if($handle->rowCount()){ 
        echo "Data berhasil dihapus. ID: " . $dataID . "<br/>"; 
    } else { 
        echo "Data (mungkin) tidak ada. <br/>"; 
    } 
}  
catch (PDOException $pe) { 
    die("Data gagal dihapus: " . $pe->getMessage()); 
} 
?>