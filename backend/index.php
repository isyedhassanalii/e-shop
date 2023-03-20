<?php
require_once 'Products.php';


// Allow cross origin for all (good practice is to allow specific domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eShop";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);


//  POST request to upload the products 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    uploadProducts($conn);
}


// GET all the products
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $product = new Products(0, '', '', '', 0.0, 0, '',$conn);
    $product->getProducts($conn);
}



// close the database connection
$conn->close();




/**
 * upload products CSV file
 */
function uploadProducts($conn)
    {       
        // Create a Products object
        $product = new Products(0, '', '', '', 0.0, 0, '',$conn);
        if ($_FILES["file"]["size"] > 0) {
       
            // Open uploaded CSV file with read-only mode
            $csvFile = fopen($_FILES['file']['tmp_name'], 'r');

            $importCount = 0;
           
            // Skip the first line
            fgetcsv($csvFile);
            while (($column = fgetcsv($csvFile, 10000, ";")) !== FALSE){
                if (! empty($column) && is_array($column)) {
                    if ($product->hasEmptyRow($column)) {
                        continue;
                    }
                    if (isset($column[1])) {
                        $product->id = $column[0];
                        $product->manufacturer =  $column[1];
                        $product->name	 = $column[2];
                        $product->additional = $column[3];
                        $product->price = $column[4];
                        $product->availability = $column[5];
                        $product->product_image = $column[6];
                        $data = $product->insert();
                      if ($data) {
                            $output["type"] = "success";
                            $output["message"] = "Import completed.";
                            $importCount ++;
                        }
                    }
                } else {
                    $output["type"] = "error";
                    $output["message"] = "Problem in importing data.";
                    $status = 201;
                }
            }
            if ($importCount == 0) {
                $output["type"] = "error";
                $output["message"] = "Duplicate data found.";
                $status = 404;
            }
            echo json_encode($output,$status );
        }
    }




