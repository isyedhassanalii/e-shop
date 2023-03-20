<?php

class Products {
  public $id;
  public $manufacturer;
  public $name;
  public $additional;
  public $price;
  public $availability;
  public $product_image;
//   private $is_active;
//   private $updated_at;
//   private $created_at;
  public $conn;

  public function __construct($id, $manufacturer, $name, $additional, $price, $availability, $product_image, $conn) {
    $this->id = $id;
    $this->manufacturer = $manufacturer;
    $this->name = $name;
    $this->additional = $additional;
    $this->price = $price;
    $this->availability = $availability;
    $this->product_image = $product_image;
    // $this->is_active = $is_active;
    // $this->updated_at = $updated_at;
    // $this->created_at = $created_at;
    $this->conn = $conn;
  }

  public function insert() {


    $sql = "INSERT INTO products (id, manufacturer, name,additional,price,availability,product_image)
    VALUES ( $this->id ,  '" . $this->manufacturer . "','" . $this->name . "','" . $this->additional . "',$this->price, $this->availability ,'" . $this->product_image . "' )";

    if ($this->conn->query($sql) === TRUE) {
         return true;
    } 
        return false;
  }


  


/**
 * Get all the active products 
 */
public function getProducts(){
  $sql = "SELECT * FROM `products` where is_active = 1";
     
  $result = $this->conn->query($sql);
  
  $data = array();
  
  // Loop through the retrieved data and store it in the PHP array
  while ($row = mysqli_fetch_assoc($result)) {
      $data[] = $row;
  }
  
  // Convert the PHP array into a JSON object
  $json_data = json_encode($data);
  
  // Set the content type header to application/json
  header('Content-Type: application/json');
  
  // Return the JSON object to the client
  echo $json_data;
  }


    /**
     * Remove empty lines from CSV file
     */
   public function hasEmptyRow(array $column)
    {
        $columnCount = count($column);
        $isEmpty = true;
        for ($i = 0; $i < $columnCount; $i ++) {
            if (! empty($column[$i]) || $column[$i] !== '') {
                $isEmpty = false;
            }
        }
        return $isEmpty;
    }
}

?>
