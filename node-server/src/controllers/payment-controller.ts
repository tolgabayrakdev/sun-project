import { Exception } from '../exceptions/exception';
import { PaymentService } from '../services/payment-service';
import { Response, Request } from 'express';

export class PaymentController {
    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    public createInvoice = async (req: Request, res: Response) => {
        try {
            const invoicePayload = {
                user_id: req.body.user_id,
                plan_id: req.body.plan_id,
                address: req.body.address,
                amount: req.body.amount,
                currency: req.body.currency,
                status: req.body.status,
            };
            const result = await this.paymentService.createInvoice(invoicePayload);
            res.status(200).json({ invoice: result });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public paymentInvoice = async (req: Request, res: Response) => {};
}
