const createPersonQuery = `
INSERT INTO persons(user_id, company_id, name, surname, email, phone_number, description)
VALUES($1,$2,$3,$4,$5,$6,$7)
`;
const deletePersonQuery = `DELETE FROM persons WHERE id = $1`;
const updatePersonQuery = `
UPDATE persons
SET
    company_id = $1,
    name = $2,
    surname = $3,
    email = $4,
    phone_number = $5,
    description = $6
WHERE id = $7
`;

const showPersonQuery = `SELECT * FROM persons WHERE id = $1`;
const listPersonQuery = `SELECT * FROM persons WHERE user_id = $1`;

export {
    createPersonQuery,
    deletePersonQuery,
    updatePersonQuery,
    showPersonQuery,
    listPersonQuery,
};
