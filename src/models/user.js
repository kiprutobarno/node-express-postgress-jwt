const create = (email, password) => `INSERT INTO users(email, password, created_on) values('${email}', '${password}', current_timestamp)`;

const find = (email) => `SELECT * FROM users WHERE email='${email}'`;

export { create, find };
