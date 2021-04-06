const queries = {
    SELECT_ALL: 'SELECT * FROM products;',
    INSERT: 'INSERT INTO products (u_type, u_name, u_price, u_description, u_stars) '+
            'VALUES ($1, $2, $3, $4, $5);',
    UPDATE: 'UPDATE ??.?? '+
            'SET field=?, field=?, field=?, field=?,  field=?, field=? '+
            'WHERE field=? AND field=?;',
    DELETE: 'DELETE FROM ??.?? WHERE field=? AND field=?;'
}




module.exports = queries;