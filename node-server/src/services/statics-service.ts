import client from "../database";
import { Exception } from "../exceptions/exception";
import { InternalServerError } from "../exceptions/internal-server-exception";



export class StaticsService {


    public async getPersonsCount(user_id: number) {
        const query = 'SELECT COUNT(*) AS count FROM persons WHERE user_id = $1';
        const params = [user_id];
        try {
            const result = await client.query(query, params)
            return parseInt(result.rows[0].count);
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async getCompaniesCount(user_id: number) {
        const query = 'SELECT COUNT(*) AS count FROM companies WHERE user_id = $1';
        const params = [user_id];

        try {
            const result = await client.query(query, params);
            return parseInt(result.rows[0].count);
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }

    }
}