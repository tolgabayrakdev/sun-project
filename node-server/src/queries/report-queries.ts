const createReportQuery = `INSERT INTO reports(user_id, report_id, name, description)
VALUES($1,$2,$3,$4,$5)
`;
const deleteReportQuery = `DELETE FROM reports WHERE id = $1`;
const updateReportQuery = `
UPDATE reports
SET
    report_id = $1,
    name = $2,
    description = $3
WHERE id = $4   
`;
const showReportQuery = `SELECT * FROM reports WHERE id = $1`;
const listReportQuery = `SELECT * FROM reports WHERE user_id = $1 `;