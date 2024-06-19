import client from '../database';
import { BadRequestError } from '../exceptions/bad-request-exception';
import { Exception } from '../exceptions/exception';
import { InternalServerError } from '../exceptions/internal-server-exception';
import { NotFoundError } from '../exceptions/not-found-exception';
import {
    checkSubscriptionQuery,
    createSubscriptionQueryForMonth,
    showSubscriptionQuery,
} from '../queries/subscription-queries';

type Subscription = {
    plan_id: number;
    status: string;
};

export class SubscriptionService {
    public async create(payload: Subscription, user_id: number) {
        try {
            await client.query('BEGIN');
            const isSubscriptionExist = await client.query(checkSubscriptionQuery, [user_id]);
            if (isSubscriptionExist.rows.length > 0) {
                throw new BadRequestError('User already has a subscription');
            }
            const newSubscription = await client.query(createSubscriptionQueryForMonth, [
                user_id,
                payload.plan_id,
                payload.status,
            ]);
            await client.query('COMMIT');
            return newSubscription;
        } catch (error) {
            console.log(error);
            if (error instanceof Exception) {
                await client.query('ROLLBACK');
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async delete(id: number) {
        try {
        } catch (error) {
            if (error instanceof Exception) {
                await client.query('ROLLBACK');
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async show(user_id: number) {
        try {
            const subscription = await client.query(showSubscriptionQuery, [user_id]);
            if (subscription) {
                return subscription.rows[0];
            } else {
                throw new NotFoundError('Subscription not found!');
            }
        } catch (error) {
            console.log(error);

            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }
}
