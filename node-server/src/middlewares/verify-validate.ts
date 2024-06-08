import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export const verifyValidate =
    (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const errorMessage = error.details?.map((detail) => detail.message).join(', ');
            res.status(400).json({ error: errorMessage });
        } else {
            next();
        }
    };
