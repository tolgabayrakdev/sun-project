import client from "../database";
import { Exception } from "../exceptions/exception";
import { InternalServerError } from "../exceptions/internal-server-exception";



export class StaticsService {


    public async getStats(user_id: number) {
        const params = [user_id];

        const query = 'SELECT COUNT(*) AS count FROM persons WHERE user_id = $1';
        const query2 = 'SELECT COUNT(*) AS count FROM companies WHERE user_id = $1';
        try {
            const personResult = await client.query(query, params);
            const companyResult = await client.query(query2, params);
            
            
            return ({ companyResult: personResult.rows[0], personResult: companyResult.rows[0] });
        } catch (error) {
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }
}