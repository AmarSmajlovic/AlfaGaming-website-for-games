const conn = require('../connection');

const getAllPlatforms = (req,res)=>{
    conn.query('SELECT * FROM platform',(err,results)=>{
        if(err) throw err;
        res.status(200).json(results);
    })
};

const addPlatform = (req,res)=>{
    const {name} = req.body;
    const sql = `INSERT platform(name) VALUES(?)`;
    conn.query(sql,[name],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const deletePlatform = (req,res)=>{
    const id = +req.params.id;
    console.log(id);
    const sql = `DELETE FROM platform WHERE id = ?`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const updatePlatform = (req,res)=>{
    const id = +req.params.id;
    const {name} = req.body;
    const sql = `UPDATE platform SET name = ? WHERE id = ?`;
    conn.query(sql,[name,id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const countPlatform = (req,res)=>{
    conn.query('SELECT count(1) as allPlatforms from platform',(err,result)=>{
        if(err) throw err;
        res.status(200).json(result[0] || {});
    })
}

module.exports = {getAllPlatforms,addPlatform,deletePlatform,updatePlatform,countPlatform};