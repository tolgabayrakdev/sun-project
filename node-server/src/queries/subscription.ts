const createSubscriptionQueryForMonth = `INSERT INTO subscriptions(user_id, plan_id, start_date, end_date, status)
VALUES($1,$2,now(),now() + interval '1 month',$3)
`;
const checkSubscriptionQuery = `SELECT 1 FROM subscriptions WHERE user_id = $1`;
const cancelSubscriptionQuery = `DELETE FROM subscriptions WHERE id = $1`;
const showSubscriptionQuery = ` SELECT
    s.id,
    s.start_date,
    s.end_date,
    s.status,
    p.name AS plan_name
  FROM
    subscriptions s
    JOIN plans p ON s.plan_id = p.id
  WHERE
    s.user_id = $1`;

export { createSubscriptionQueryForMonth, cancelSubscriptionQuery, checkSubscriptionQuery, showSubscriptionQuery };
