const conn = require('../connection');

const addToWhishlist = (req,res)=>{
    const {productId,customerId} = req.body;
    let sql = `INSERT INTO whishlist(customer_id,product_id,status) VALUES(?,?,'ADDED')`;
    conn.query(sql,[customerId,productId],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
};

const getProductsFromWhishlist = (req,res)=>{
    const id = req.params.id;
    const sql = `SELECT p.* FROM whishlist c JOIN product p ON c.product_id = p.id WHERE customer_id = ? AND status = 'ADDED'`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
};

const removeProductFromWhishlist = (req,res)=>{
    const {productId,customerId} = req.body;
    const sql = `UPDATE whishlist SET status = 'REMOVED' WHERE customer_id = ? AND product_id = ?`;
    conn.query(sql,[customerId,productId],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const getWhishlistCount = (req,res)=>{
    const id = req.params.id;
    conn.query(`SELECT count(1) as allProducts from whishlist WHERE status = 'ADDED' AND customer_id = ?`,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result[0] || {});
    })
}


module.exports = {addToWhishlist,getProductsFromWhishlist,removeProductFromWhishlist,getWhishlistCount};