import client from '../database';
import { Exception } from '../exceptions/exception';
import { InternalServerError } from '../exceptions/internal-server-exception';
import { createSubscriptionQuery } from '../queries/subscription';

type Subscription = {
    user_id: number;
    plan_id: number;
    start_date: Date;
    end_date: Date;
    status: Date;
};

export class SubscriptionService {
    public async create(payload: Subscription) {
        try {
            await client.query('BEGIN');
            const newSubscription = await client.query(createSubscriptionQuery, [payload]);
            await client.query('COMMIT');
            return newSubscription;
        } catch (error) {
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
}
