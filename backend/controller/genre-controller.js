const conn = require('../connection');

const getAllGenre = (req,res)=>{
    conn.query('SELECT * FROM genre',(err,results)=>{
        if(err) throw err;
        res.status(200).json(results);
    })
}

const getGenreById = (req,res)=>{
    const id = req.params.id;
    conn.query(`SELECT * FROM genre WHERE id = ${id}`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })    
}

const deleteGenre = (req,res)=>{
    const id = +req.params.id;
    const sql = `DELETE FROM genre WHERE id = ?`;
    conn.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const addGenre = (req,res)=>{
    const {name} = req.body;
    const sql = `INSERT genre(name) VALUES(?)`;
    conn.query(sql,[name],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
}

const updateGenre = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const sql = 'UPDATE genre SET name = ? WHERE id = ?';
    conn.query(sql,[name,id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    })
};

const countGenre = (req,res)=>{
    conn.query(`SELECT count(1) as allGenres from genre`,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result[0] || {});
    })
}

module.exports = {getAllGenre,getGenreById,deleteGenre,addGenre,updateGenre,countGenre};