import client from '../database';
import { Exception } from '../exceptions/exception';
import { InternalServerError } from '../exceptions/internal-server-exception';
import { NotFoundError } from '../exceptions/not-found-exception';

type createPayload = {
    report_id: number;
    name: string;
    description: string;
};

type updatePayload = {
    report_id?: number;
    name?: string;
    description?: string;
};

export class ReportService {
    public async create(payload: createPayload, user_id: number) {
        try {
            await client.query('BEGIN');
            const newReport = await client.query(createReportQuery, [payload]);
            await client.query('COMMIT');
            return newReport.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async delete(id: number) {
        try {
            await client.query(deleteReportQuery, [id]);
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async update(id: number, payload: updatePayload) {
        try {
            await client.query('BEGIN');
            const updates: any = {};

            const allowedFields = ['report_id', 'name', 'description'];

            Object.entries(payload).forEach(([key, value]) => {
                if (allowedFields.includes(key) && value !== undefined) {
                    updates[key] = value;
                }
            });

            if (Object.keys(updates).length === 0) {
                throw new InternalServerError('No fields to update.');
            }

            const values = [id, ...Object.values(updates)];
            const updatedReport = await client.query(updateReportQuery, values);
            await client.query('COMMIT');
            return updatedReport.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async show(id: number) {
        try {
            const result = await client.query(showReportQuery, [id]);
            if (result.rows.length === 0) {
                throw new NotFoundError('Report not found!');
            }
            return result.rows[0];
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async list(user_id: number) {
        try {
            const result = await client.query(listReportQuery, [user_id]);
            if (result.rows.length === 0) {
                throw new NotFoundError('Report list not found!');
            }
            return result.rows;
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }
}
