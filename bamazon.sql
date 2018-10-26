CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE Department(
	Dep_id INT NOT NULL AUTO_INCREMENT,
    Dep_Name VARCHAR(25) NOT NULL, 
    PRIMARY KEY(Dep_id)
    );

CREATE TABLE StoreProducts(
    Item_id INT NOT NULL AUTO_INCREMENT,
    Item_Name VARCHAR(50) NOT NULL,
    Dep_id INT NOT NULL,
    Price DECIMAL(6, 2),
    Stock_Quantity INTEGER,
    PRIMARY KEY(Item_id)
);




    INSERT INTO Department (Dep_Name)
    VALUES ('Tech');
    
    INSERT INTO Department (Dep_Name)
    VALUES ('Clothes');
    
    INSERT INTO Department (Dep_Name)
    VALUES ('Beauty');
    
    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Iphone 6s", 1, 480, 10);

    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Lip Stick", 2, 10, 15);


    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Mac Book Pro", 3, 900, 10);


    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Iphone X", 4, 780, 10);


    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Men T-Shirt", 5, 25, 10);

    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Men Pants", 6, 120, 10);

    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Sun Cream", 7, 30, 10);

    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Sun Glasses", 8, 80, 10);

    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Lap top", 9, 450, 10);


    INSERT INTO StoreProducts
        (Item_Name, Dep_id,Price,Stock_Quantity)
    VALUES("Women Scarf", 10, 45, 10);


    