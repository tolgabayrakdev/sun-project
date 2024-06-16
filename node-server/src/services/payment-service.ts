import client from '../database';
import { Exception } from '../exceptions/exception';
import { InternalServerError } from '../exceptions/internal-server-exception';

type invoicePayload = {
    user_id: number;
    plan_id: number;
    address: string;
    amount: number;
    currency: string;
    status: string;
};

type paymentPayload = {
    user_id: number;
    amount: number;
    currency: string;
};

export class PaymentService {
    public async createInvoice(invoicePayload: invoicePayload) {
        try {
            await client.query('BEGIN');
            const createInvoiceQuery = `
            INSERT INTO invoices(user_id, plan_id, address, amount, currency, status, issue_date, due_date, created_at, updated_at)
            VALUES($1,$2,$3,$4,$5,$6, now(),now(),now(),now())
            `;
            const { user_id, address, amount, currency, status } = invoicePayload;
            const newInvoice = await client.query(createInvoiceQuery, [
                user_id,
                address,
                amount,
                currency,
                status,
            ]);
            const invoice = newInvoice.rows[0];
            await client.query('COMMIT');
            return invoice;
        } catch (error) {
            if (error instanceof Exception) {
                await client.query('ROLLBACK');
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async payInvoice(paymentInvoicePayload: paymentPayload) {}

    public async createSubscription() {}
}
