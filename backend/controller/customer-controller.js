const conn = require('../connection');

const getAllCustomers = (req,res)=>{
    conn.query('SELECT * FROM customer',(err,results)=>{
        if(err) throw err;
        res.status(200).json(results);
    });
};

const getCustomerById = (req,res)=>{
    const {id} = req.params;
    conn.query(`SELECT * FROM customer WHERE id = ${id}`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });
};

const registrateCustomer = (req,res)=>{
    const {first_name,last_name,username,email,password} = req.body;
    const sql = 'INSERT customer(first_name,last_name,email,password,username) VALUES(?,?,?,?,?)';
    conn.query(sql,[first_name,last_name,email,password,username],(err,result)=>{
        if(err) throw err;
        res.status(200).json({id:result.insertId});
    })
};

const loginUser = (req,res)=>{
    const {email,password} = req.body;
    const sql = `SELECT * FROM customer WHERE password = ? AND (email = ? OR username = ?) AND status = 'ACTIVE'`;
    conn.query(sql,[password,email,email],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result[0] || {});
    })
}

const deleteUser = (req,res)=>{
    const id = +req.params.id;
    const sql = `UPDATE customer SET status = 'BANNED' WHERE id = ?`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const updateUser = (req,res)=>{
    const id = +req.params.id;
    const {first_name,last_name,email,username,role} = req.body;
    const sql = 'UPDATE customer SET first_name = ?,last_name = ?,email = ?,username = ?,role = ? WHERE id = ?';
    conn.query(sql,[first_name,last_name,email,username,role,id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const countUser = (req,res)=>{
    conn.query(`SELECT count(1) as allUsers from customer`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result[0] || {});
    })
}

module.exports = {getAllCustomers,getCustomerById,registrateCustomer,loginUser,deleteUser,updateUser,countUser};
