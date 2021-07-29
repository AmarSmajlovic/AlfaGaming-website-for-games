const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const { getAllCustomers, getCustomerById, registrateCustomer, loginUser, deleteUser, updateUser, countUser } = require('./controller/customer-controller');
const { getAllProducts, getProductById, getProductByGenre, getProductByPlatform, addProduct, deleteProduct, updateProduct, countProduct, disscount20Product, filterProducts, getProductByName, last5Products} = require('./controller/product-controller');
const { getAllGenre, getGenreById, deleteGenre, addGenre, updateGenre, countGenre } = require('./controller/genre-controller');
const { getAllPlatforms, addPlatform, deletePlatform, updatePlatform, countPlatform } = require('./controller/platform-controller');
const {addToCart, getProductsFromCart, buyProductsFromCart, removeProductFromCart, getBuyProducts, getCartCount} = require('./controller/cart-controller');
const { addToWhishlist, getProductsFromWhishlist, removeProductFromWhishlist, getWhishlistCount } = require('./controller/whishlist-controller');

app.use(express.json())
app.use(cors());



//Customer API Start//

app.get('/getAllCustomers',getAllCustomers);
app.get('/getCustomerById/:id',getCustomerById);
app.delete('/deleteUser/:id',deleteUser);
app.post('/registration',registrateCustomer);
app.post('/login',loginUser);
app.put('/updateUser/:id',updateUser);
app.get('/allUsers',countUser)
//Customer API End//

//Product API Start//

app.get('/getAllProducts',getAllProducts)
app.get('/getProductById/:id',getProductById)
app.get('/getProductByGenre/:genre',getProductByGenre);
app.get('/getProductByPlatform/:platform',getProductByPlatform)
app.post('/addProduct',addProduct);
app.delete('/deleteProduct/:id',deleteProduct);
app.put('/updateProduct/:id',updateProduct);
app.get('/countProduct',countProduct);
app.get('/disscount20Product',disscount20Product);
app.get('/filterProducts',filterProducts);
app.get('/getProductByName',getProductByName);
app.get('/last5Products',last5Products);
//Product API End//

//Genre API Start//

app.get('/getAllGenre',getAllGenre);
app.get('/getGenreById/:id',getGenreById);
app.delete('/deleteGenre/:id',deleteGenre);
app.post('/addGenre',addGenre);
app.put('/updateGenre/:id',updateGenre);
app.get('/allgenres',countGenre);
//Genre API End//

//Platform API Start//

app.get('/getAllPlatforms',getAllPlatforms);
app.post('/addPlatform',addPlatform);
app.delete('/deletePlatform/:id',deletePlatform);
app.put('/updatePlatform/:id',updatePlatform)
app.get('/allPlatforms',countPlatform);
//Platform API End//

//Cart API Start//

app.post('/addToCart',addToCart);
app.get('/getProductsFromCart/:id',getProductsFromCart);
app.get('/buyProductsFromCart/:id',buyProductsFromCart);
app.put('/removeProductFromCart',removeProductFromCart);
app.get('/getBuyProducts/:id',getBuyProducts);
app.get('/getCartCount/:id',getCartCount);
//Cart API End//

//Whishlist API Start//

app.post('/addToWhishlist',addToWhishlist);
app.get('/getProductsFromWhishlist/:id',getProductsFromWhishlist);
app.put('/removeProductFromWhishlist',removeProductFromWhishlist);
app.get('/getCountFromWhishlist/:id',getWhishlistCount);
//Whishlist API End//

app.listen(PORT,()=>{
    console.log(`Application is started at ${PORT} PORT!`);
});

