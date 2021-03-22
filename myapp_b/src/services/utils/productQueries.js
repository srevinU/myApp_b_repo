const queries = {
    SELECT_ALL: 'SELECT * FROM ??.??;',
    INSERT: 'INSERT INTO ??.?? (filed, field ...) '+
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
    UPDATE: 'UPDATE ??.?? '+
            'SET field=?, field=?, field=?, field=?,  field=?, field=? '+
            'WHERE field=? AND field=?;',
    DELETE: 'DELETE FROM ??.?? WHERE field=? AND field=?;'
}


module.exports = queries;