const conn = require('../connection');

const getAllProducts = (req,res)=>{
    conn.query('SELECT * FROM product',(err,results)=>{
        if(err) throw err;
        res.status(200).json(results);
    })
};

const getProductById = (req,res)=>{
    const id = req.params.id;
    const sql = `SELECT a.name as productName,a.*,b.name as genreName,b.*,c.name as platformName FROM product a INNER JOIN genre b  ON  a.genre_id = b.id INNER JOIN platform c ON a.platform_id = c.id WHERE a.id= ?`;
    conn.query(sql,[id],(err,results)=>{
        if(err) throw err;
        res.status(200).json(results);
    })
};

const getProductByGenre = (req,res)=>{
    const {genre} = req.params;
    conn.query(`SELECT DISTINCT a.name  FROM product a JOIN product_genre ba ON a.id = ba.product_id JOIN genre b ON b.id = ba.genre_id WHERE b.name = '${genre}'`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const getProductByPlatform = (req,res)=>{
    const {platform} = req.params;
    conn.query(`SELECT DISTINCT a.name FROM product a JOIN product_platform ba ON a.id = ba.product_id JOIN platform b ON b.id = ba.platform_id WHERE b.name = '${platform}'`,(err,results)=>{
        if(err) throw err;
        res.status(200).json(results)
    })
};

const getProductByName = (req,res)=>{
    const {name} = req.query;
        conn.query(`SELECT * FROM product WHERE name LIKE '${name}%'`,(err,result)=>{
            if(err) throw err;
            res.status(200).json(result)
        })
};


const addProduct = (req,res)=>{
    console.log(req.body.name);
    const {name,price,main_image,image1,image2,image3,disscount,description,platform_id,genre_id} = req.body;
    const sql = `INSERT INTO product (name,price,main_image,image1,image2,image3,disscount,description,platform_id,genre_id) VALUES (?,?,?,?,?,?,?,?,?,?) `;
    conn.query(sql,[name,price,main_image,image1,image2,image3,disscount,description,platform_id,genre_id],(err,result)=>{
        if(err) throw err;
        res.status(200).json({id:result.insertId});
    })
};

const deleteProduct = (req,res)=>{
    const id = +req.params.id;
    const sql = 'DELETE FROM product WHERE id = ?';
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const updateProduct = (req,res)=>{
    const id = +req.params.id;
    const {name,price,main_image,image1,image2,image3,disscount,description,platform_id,genre_id} = req.body;
    const sql = `UPDATE product SET name = ?,price = ?,main_image = ?,image1 = ?,image2 = ?,image3 = ?,disscount = ?,description = ?,platform_id = ?,genre_id = ? WHERE id = ?`;
    conn.query(sql,[name,price,main_image,image1,image2,image3,disscount,description,platform_id,genre_id,id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const countProduct = (req,res)=>{
    conn.query(`SELECT count(1) as allProducts from product`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result[0] ||{});
    })
}

const disscount20Product = (req,res)=>{
    conn.query(`SELECT * FROM product WHERE disscount = 20`,(err,results)=>{
         if(err) throw err;
         res.status(200).json(results);
    })
}

const filterProducts = (req,res)=>{
    const {genre_id,platform_id,priceBetween,priceTo} = req.query;
    let sql = `SELECT * FROM product WHERE 1=1`;
    if(genre_id) sql += ` AND genre_id = ${genre_id}`;
    if(platform_id) sql += ` AND platform_id = ${platform_id} `;
    if(priceBetween && priceTo) sql += ` AND price BETWEEN ${priceBetween} AND ${priceTo} `;
    conn.query(sql,(err,result)=>{
        if(err)throw err;
        res.status(200).json(result);
    })
}




module.exports = {getAllProducts,getProductById,getProductByGenre,getProductByPlatform,addProduct,deleteProduct,updateProduct,countProduct,disscount20Product,filterProducts,getProductByName};
