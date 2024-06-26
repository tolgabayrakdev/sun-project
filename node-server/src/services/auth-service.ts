import client from '../database';
import { BadRequestError } from '../exceptions/bad-request-exception';
import { Exception } from '../exceptions/exception';
import { InternalServerError } from '../exceptions/internal-server-exception';
import { NotFoundError } from '../exceptions/not-found-exception';
import {
    findByEmailQuery,
    loginQuery,
    registerQuery,
    updateUserPassword,
    verifyUserInformationQuery,
    verifyUserQuery,
} from '../queries/auth-queries';
import { Helper } from '../util/helper';

export class AuthService {
    private helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    public async login(email: string, password: string) {
        const hashPassword = this.helper.hashPassword(password);
        const result = await client.query(loginQuery, [email, hashPassword]);
        if (result.rows.length === 0) {
            throw new NotFoundError('User not found!');
        }

        const user = result.rows[0];
        const payload = {
            id: user.id,
            email: user.email,
        };
        const accessToken = this.helper.generateAccessToken(payload);
        const refreshToken = this.helper.generateRefreshToken(payload);
        return { access_token: accessToken, refresh_token: refreshToken };
    }

    public async register(payload: { email: string; password: string }) {
        const hashPassword = this.helper.hashPassword(payload.password);
        try {
            await client.query('BEGIN');
            const isEmailExist = await client.query(findByEmailQuery, [payload.email]);
            if (isEmailExist.rows.length) {
                throw new BadRequestError('Email already exist!');
            } else {
                const newUser = await client.query(registerQuery, [payload.email, hashPassword]);
                await client.query('COMMIT');
                return newUser;
            }
        } catch (error) {
            await client.query('ROLLBACK');
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }

    public async verify(token: string) {
        try {
            const decodedToken: any = this.helper.decodeToken(token);
            const result = await client.query(verifyUserQuery, [decodedToken.id]);
            if (result.rows.length === 0) {
                throw new NotFoundError('User not found!');
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

    public async updatePassword(token: string, currentPassword: string, newPassoword: string) {
        try {
            const decodedToken: any = this.helper.decodeToken(token);
            const result = await client.query(verifyUserInformationQuery, [decodedToken.id]);
            if (result.rows.length === 0) {
                throw new NotFoundError('User not found!');
            }
            const user = result.rows[0];
            const isPasswordValid = this.helper.comparePassword(currentPassword, user.password);

            if (!isPasswordValid) {
                throw new BadRequestError('Current password is incorrect!');
            }

            const hashedNewPassword = this.helper.hashPassword(newPassoword);
            await client.query('BEGIN');
            await client.query(updateUserPassword, [hashedNewPassword, user.id]);
            await client.query('COMMIT');
            return { message: 'Password updated successfully!' };
        } catch (error) {
            await client.query('ROLLBACK');
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }
}
