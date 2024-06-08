const loginQuery = `SELECT * FROM users WHERE email = $1 and password = $2`;
const registerQuery = `INSERT INTO users(username ,email, password) 
VALUES ($1, $2, $3)`;
const findByUsernameQuery = `SELECT * FROM users WHERE username = $1`;
const findByEmailQuery = `SELECT * FROM users WHERE email = $1`;
const verifyUserQuery = `SELECT id, username, email FROM users WHERE id = $1`;

export { loginQuery, registerQuery, findByEmailQuery, findByUsernameQuery, verifyUserQuery };
