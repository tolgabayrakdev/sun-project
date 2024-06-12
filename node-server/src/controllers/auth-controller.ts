import { Response, Request } from 'express';
import { AuthService } from '../services/auth-service';
import { Exception } from '../exceptions/exception';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login(email, password);
            res.cookie('access_token', result.access_token, {
                httpOnly: true,
            });
            res.cookie('refresh_token', result.refresh_token, {
                httpOnly: true,
            });
            res.status(200).json({ message: 'Login is successful.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public register = async (req: Request, res: Response) => {
        try {
            await this.authService.register(req.body);
            res.status(201).json({ message: 'Account created successfully.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public verify = async (req: Request, res: Response) => {
        try {
            const token: string = req.cookies.access_token;
            res.status(200).json({ status: true, user: await this.authService.verify(token) });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public logout = async (req: Request, res: Response) => {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        res.status(200).json({ message: 'User logout successful.' });
    };

    public updatePassword = async (req: Request, res: Response) => {
        const { currentPassword, newPassword } = req.body;

        try {
            const token: string = req.cookies.access_token;
            const result = await this.authService.updatePassword(
                token,
                currentPassword,
                newPassword,
            );
            res.status(200).json({ message: result.message });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
}
