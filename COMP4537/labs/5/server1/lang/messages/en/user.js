export const MESSAGES = {
    insertButtontext: "Insert Test Rows",
    submitButtonText: "Submit",
    missingQuery: "Please enter a query",
    successFullInsert: 'Rows inserted successfully!',
    successfullQuery: 'Query executed successfully!',
    rowsAffected: "Rows affected",
    serverMessage: "Server message",
    illegalQuery: "Query must begin with SELECT or INSERT",
    noDataMessage: '<tr><td>No data available<td><tr>',
    fetchError: '<p style="color:red;">Error: %ERROR%</p>',
};

export const QUERIES = {
    insertQuery: `INSERT INTO patient (name, age, date) VALUES
    ('Sara Brown', '121', '1901-01-01'),
    ('John Smith', '83', '1941-01-01'),
    ('Jack Ma', '63', '1961-01-30'),
    ('Elon Musk', '25', '1999-01-01')`,
};