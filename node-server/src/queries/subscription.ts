const createSubscriptionQuery = `INSERT INTO subscription(user_id, plan_id, start_date, end_date, status)
VALUES($1,$2,$3,$4,$5)
`;

const cancelSubscriptionQuery = `DELETE FROM subscription WHERE id = $1`;

export { createSubscriptionQuery, cancelSubscriptionQuery };
