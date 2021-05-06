const queries = {
    SELECT_ALL: 'SELECT * FROM products WHERE u_active = TRUE;',
    INSERT: 'INSERT INTO products (u_type, u_name, u_image_url, u_price, u_description, u_stars, u_active, u_nb_of_sell, u_qty) '+
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
    UPDATE: 'UPDATE ??.?? '+
            'SET field=?, field=?, field=?, field=?,  field=?, field=? '+
            'WHERE field=? AND field=?;',
    DELETE: 'DELETE FROM ??.?? WHERE field=? AND field=?;'
}




module.exports = queries;