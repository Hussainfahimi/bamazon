var mysql = require("mysql");
var inquirer = require("inquirer");

var Stock_Quantity;
var Item_id;
var chosenItem;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});



connection.connect(function (err) {
    if (err) {
        throw err;
    }
    displayProducts();

});

///function to display items availble in store

function displayProducts() {
    console.log("Selecting all product availble in store..\n");
    var sql = "SELECT Item_id, Item_Name, Dep_id, Price, Stock_Quantity FROM StoreProducts";
    connection.query(sql, function (err, res) {
        if (err) throw err;


        for (var i = 0; i < res.length; i++) {
            console.log(`Item ID: ${res[i].Item_id}
                        Product Name: ${res[i].Item_Name} 
                        Department id: ${res[i].Dep_id}
                        Price: ${res[i].Price}
                        Quantity: ${res[i].Stock_Quantity}

            `);
        }
        orderProduct();

    });

}

//Fuction for the user to place an order

function orderProduct() {
    inquirer.prompt({
        name: "choice",
        type: "input",
        message: "Please enter the product id which you want to buy"
    })
        .then(function (answer) {
            connection.query(
                "SELECT * FROM StoreProducts WHERE ?",
                { Item_id: answer.choice },
                function (err, res) {
                    chosenItem = res[0];
                    var stock_quantity = res[0].Stock_Quantity;
                    purchaseItem(chosenItem);
                }
            );

        });
}

function purchaseItem(chosenItem) {
    inquirer.prompt({
        name: "userPurchase",
        type: "input",
        message: "How many of this product do you need?"
    })
        .then(function (answer) {
            if (chosenItem.Stock_Quantity < answer.userPurchae) {
                console.log(
                    "Insufficient quantity. We only have " + chosenItem.Stock_Quantity + "Of this!"
                );
                purchaseItem(chosenItem);
            } else {
                //console.log(chosenItem.Stock_Quantity, answer.userPurchase);
                var updateSQ = parseInt(chosenItem.Stock_Quantity) - parseInt(answer.userPurchase);
                var salePrice = parseFloat(chosenItem.Price) * parseInt(answer.userPurchase);

                //console.log(updateSQ, salePrice);
                console.log("Your order is almost complete \nTotal cost will be " + salePrice);
                 updateDatabase(updateSQ);
            }
        });
}

function updateDatabase(updateSQ) {
    connection.query(
        "UPDATE StoreProducts SET ? WHERE ?",
        [
            {
                Stock_Quantity: updateSQ
            },
            {
                Item_id: chosenItem.Item_id
            }
        ],
        function (err) {
            if (err) throw err;
            console.log("Congratulation your purchase was successfull")
            connection.end();
        }
    );
}