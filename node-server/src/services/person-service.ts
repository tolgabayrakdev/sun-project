import client from '../database';
import { Exception } from '../exceptions/exception';
import { InternalServerError } from '../exceptions/internal-server-exception';
import { NotFoundError } from '../exceptions/not-found-exception';
import { createPersonQuery, deletePersonQuery, listPersonQuery, showPersonQuery } from '../queries/person-queries';

type createPayload = {
    company_id?: number;
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    description?: string;
};

export class PersonService {
    public async create(payload: createPayload, user_id: number) {
        try {
            await client.query('BEGIN');
            const newPerson = await client.query(createPersonQuery, [
                user_id,
                payload.company_id,
                payload.name,
                payload.surname,
                payload.email,
                payload.phone_number,
                payload.description,
            ]);
            await client.query('COMMIT');
            return newPerson.rows[0];
        } catch (error) {
            console.log(error);

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
            await client.query(deletePersonQuery, [id]);
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async update() {
        try {
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async show(id: number) {
        try {
            const result = await client.query(showPersonQuery, [id]);
            if (result.rows.length === 0) {
                throw new NotFoundError("Person not found!");
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
            const result = await client.query(listPersonQuery, [user_id]);
            if (result.rows.length === 0) {
                throw new NotFoundError("Person list not found!");
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
