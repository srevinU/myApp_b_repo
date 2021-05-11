const queries = {
    SELECT_ALL: 'SELECT * FROM products WHERE u_active = TRUE;',
    INSERT: 'INSERT INTO products (u_type, u_name, u_image_url, u_price, u_description, u_stars, u_active, u_nb_of_sell, u_qty) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
    UPDATE: 'UPDATE products SET u_type=$2, u_name=$3, u_image_url=$4, u_price=$5,  u_description=$6, u_stars=$7, u_active=$8, u_nb_of_sell=$9, u_qty=$10' +
            'WHERE u_id=$1;',
    DELETE: 'DELETE FROM products WHERE u_id=$1;'
}




module.exports = queries;