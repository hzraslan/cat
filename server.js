var express = require("express");

var app = express();


app.get("/cars", function (request, response){
    response.render('cars');
})

app.get("/micheal", function (request, response){
     var cats_array = {name: "Michael", age: "2", favorite_food: 'meatball', sleeping_spots: 'on the top of couch' };
     response.render('bilgi', {cats: cats_array});
})
app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/jay", function (request, response){
    var cats_array = {name: "Jay", age: "3", favorite_food: 'lahmacun',  sleeping_spots: 'under the top of couch'};
    response.render('bilgi', {cats: cats_array});
})
app.get("/brendan", function (request, response){
    var cats_array =   {name: "Brendan", age: "1", favorite_food: 'broiled chicken',sleeping_spots: 'kitchen'};
    response.render('bilgi', {cats: cats_array});
})
app.get("/andrew", function (request, response){
    var cats_array =  {name: "Andrew",  age: "5", favorite_food: 'shwarma',  sleeping_spots: 'on the bed'};
    response.render('bilgi', {cats: cats_array});
})
app.get("/cars/new", function (request, response){
    response.render('form');
})
app.listen(8000, function() {
    console.log("listening on 8000");
})
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
