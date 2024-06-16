import { Exception } from '../exceptions/exception';
import { SubscriptionService } from '../services/subscription-service';
import { Response, Request } from 'express';



export class SubscriptionController {
    private subscriptionService: SubscriptionService;

    constructor() {
        this.subscriptionService = new SubscriptionService();
    }

    public create = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const payload = req.body;
            await this.subscriptionService.create(payload, userId);
            res.status(201).json({ message: 'Subscription created.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public delete = async (req: Request, res: Response) => { };
}
