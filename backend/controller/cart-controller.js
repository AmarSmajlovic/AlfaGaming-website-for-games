const conn = require('../connection');

const addToCart = (req,res)=>{
    const {productId,customerId} = req.body;
    let sql = `INSERT INTO cart(customer_id,product_id,status) VALUES(?,?,'PENDING')`;
    conn.query(sql,[customerId,productId],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
};

const getProductsFromCart = (req,res) =>{
    const id = req.params.id;
    const sql = `SELECT p.* FROM cart c JOIN product p ON c.product_id = p.id WHERE customer_id = ? AND status = 'PENDING'`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const getBuyProducts = (req,res) =>{
    const id = req.params.id;
    const sql = `SELECT p.* FROM cart c JOIN product p ON c.product_id = p.id WHERE customer_id = ? AND status = 'DONE'`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const buyProductsFromCart = (req,res)=>{
    const id = req.params.id;
    const sql = `UPDATE cart SET status = 'DONE' WHERE status = 'PENDING'  AND customer_id = ?`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
};

const removeProductFromCart = (req,res)=>{
    const {productId,customerId} = req.body;
    const sql = `UPDATE cart SET status = 'REMOVED' WHERE customer_id = ? AND product_id = ?`;
    conn.query(sql,[customerId,productId],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const getCartCount = (req,res)=>{
    const id = req.params.id;
    conn.query(`SELECT count(1) as allCartProducts from cart WHERE status = 'PENDING' AND customer_id = ?`,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result[0] || {});
    })
}

module.exports = {addToCart,getProductsFromCart,buyProductsFromCart,removeProductFromCart,getBuyProducts,getCartCount};