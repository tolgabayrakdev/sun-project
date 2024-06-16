const createSubscriptionQueryForMonth = `INSERT INTO subscriptions(user_id, plan_id, start_date, end_date, status)
VALUES($1,$2,now(),now() + interval '1 month',$3)
`;
const checkSubscriptionQuery = `SELECT 1 FROM subscriptions WHERE user_id = $1`;
const cancelSubscriptionQuery = `DELETE FROM subscriptions WHERE id = $1`;
const showSubscriptionQuery = `SELECT * FROM subscriptions WHERE user_id = $1`;

export { createSubscriptionQueryForMonth, cancelSubscriptionQuery, checkSubscriptionQuery, showSubscriptionQuery };
