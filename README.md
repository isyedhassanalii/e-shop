# E-shop App 
This app is like ecommerce where a user can insert csv file and saved that data in database and create products accordingly.

## Technologies used in this Project 

### Backend
- [PHP](https://www.php.net/)
### Frontend
- [HTML](https://html.com/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [JS](https://www.javascript.com/)
- [React](https://react.dev/)



## Requirements

PHP >=  8.0.23
React >= 18.2

### How to install: 
- Step 1: Get the code by clonig the repository 
- Step 2: Create database 
- Step 3: Start Page


#### Step 1: Get the code - Download the repository
You can Donwload the repositori from the server or using our bitucket repository
Extract it in www(or htdocs if you using XAMPP or MAMP) folder and put it for example in Starter folder.


#### Step 2: Create database
If you finished first step, now you can create database on your database server(MySQL). You must create database Just go to the phpmyadmin and create the new database, put name database, database username and password.


#### Step 3: Start Page
Go to your localhost with php port of your system and run the backend.
```bash
 http://localhost/eShop/backend
```




## Run Locally React

Clone the project

```bash
  git clone https://github.com/isyedhassanalii/e-shop.git
```

Go to the project directory

```bash
  cd e-shop
```

Install dependencies

```bash
  npm Install
```

Start the server

```bash
  npm start
```

## Things to improve in this project

### Normalization

To normalize the data of the products table, we can follow the standard normalization techniques, which involves breaking down the table into smaller tables based on functional dependencies and removing any repeating groups. Here's an example of how we could normalize the products table:

#### First Normal Form (1NF):

Remove any repeating groups
Ensure each column has atomic values
The products table is already in 1NF as each column has atomic values and there are no repeating groups.

#### Second Normal Form (2NF):

Meet the requirements of 1NF
Remove any partial dependencies
The products table has a composite primary key of id and manufacturer. This means that the name, additional, price, availability, product_image, and is_active columns are functionally dependent on both id and manufacturer. Therefore, we do not have any partial dependencies, and the table is already in 2NF.

#### Third Normal Form (3NF):

Meet the requirements of 2NF
Remove any transitive dependencies
The products table has a transitive dependency between the id and manufacturer columns and the updated_at and created_at columns. To remove this transitive dependency, we can create a new table called product_timestamps with columns id, manufacturer, updated_at, and created_at, where id and manufacturer form a composite primary key. We can then remove the updated_at and created_at columns from the products table, as they are now stored in the product_timestamps table.

The normalized tables would be:
```bash
  products
----------
id (PK)
manufacturer (PK)
name
additional
price
availability
product_image
is_active

product_timestamps
----------
id (PK)
manufacturer (PK)
updated_at
created_at

```
The products table contains product-specific data, such as the name, additional details, price, availability, and product image. The product_timestamps table contains the timestamps for when a product was last updated and when it was created. By splitting the data into two tables, we have eliminated the transitive dependency and ensured that each table contains only related data.

### Limit the amount of pages shown in pagination 
To limit the number of pages shown in pagination, you can use a combination of current page number and total number of pages to determine which page numbers to display.

For example, let's say you want to show a maximum of 5 pages in your pagination. If you have a total of 20 pages and the current page is 10, you would want to display page numbers 8 through 12.

## Class Digarm

```bash
+----------------------------------------+
|                Products                |
+----------------------------------------+
| -id: int                               |
| -manufacturer: string                 |
| -name: string                          |
| -additional: string                    |
| -price: double                         |
| -availability: int                     |
| -product_image: string                 |
| -conn: mysqli                          |
+----------------------------------------+
| +__construct($id: int,                |
|  $manufacturer: string,                |
|  $name: string,                        |
|  $additional: string,                  |
|  $price: double,                       |
|  $availability: int,                    |
|  $product_image: string,                |
|  $conn: mysqli)                        |
| +insert(): bool                        |
+----------------------------------------+
```

## Block Diagram

```bash
+----------------------------------------+
|                Products                |
+----------------------------------------+
| -id: int                               |
| -manufacturer: string                 |
| -name: string                          |
| -additional: string                    |
| -price: double                         |
| -availability: int                     |
| -product_image: string                 |
| -is_active: int                        |
| -updated_at: timestamp                 |
| -created_at: timestamp                 |
| -conn: mysqli                          |
+----------------------------------------+
| +__construct(id, manufacturer, name,   |
|  additional, price, availability,      |
|  product_image, is_active, updated_at, |
|  created_at, conn)                     |
| +insert(): bool                        |
+----------------------------------------+
```
