const express = require('express');

var bodyParser = require('body-parser');
const app = express();
const port = 3000
app.use(bodyParser.urlencoded());
app.use(express.json());
const products = [ 
    {id:1 , name: "Hung", age : 20} ,
    {id:2 , name: "Hung1", age : 20} ,
    {id:3 , name: "Hung2", age : 20} 
]
app.get('/', (req, res) =>{
    console.log(`HOME`);
    res.end('<h1>DAY LA HOME</h1> ')
})

app.get('/add-product', (req, res, next) => {
res.send(`<form action="/product" method="POST"><input type="text" 
name="productName"><button type="submit">Add Product</button></form>`);
});
app.post('/product', (req, res, next) => {
console.log(req.body);
res.send(`<p>Đã thực hiện thêm Product12 : ${req.body}</p>`);
})
app.get('/product/:id', (req, res) =>{
     const id = req.params.id;
     const product = products.filter((item) => item.id == id);
     res.send(product)
})
app.listen(port, () =>{
    console.log(`ứng dụng đang chạy  http://localhost:${port}`)
})