const con = require('../utils/db');

const getAuthorById = (req, res) => {
    let authorId = req.params.id;
    let query = `SELECT * from article JOIN author ON article.author_id = author.id where article.author_id = ${authorId}`;
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('index', {
            articles: articles
        });
    });
};

module.exports = {
    getAuthorById
};