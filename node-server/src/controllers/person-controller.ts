import { Request, Response } from 'express';
import { PersonService } from '../services/person-service';
import { Exception } from '../exceptions/exception';

export class PersonController {
    private personService: PersonService;

    constructor() {
        this.personService = new PersonService();
    }

    public create = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const payload = req.body;
            await this.personService.create(payload, userId);
            res.status(201).json({ message: 'Person created.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
    public delete = async (req: Request, res: Response) => {
        const userId = req.params.id;
        try {
            await this.personService.delete(parseInt(userId));
            res.status(200).json({ message: 'Person deleted.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
    public update = async (req: Request, res: Response) => {
        const id = req.params.id;
        const payload = req.body;
        try {
            const result = await this.personService.update(parseInt(id), payload);
            res.status(200).json({ message: 'Person updated.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
    public show = async (req: Request, res: Response) => {
        try {
            const person = await this.personService.show(parseInt(req.params.id));
            res.status(200).json({ person: person });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
    public list = async (req: Request, res: Response) => {
        const userId = req.user.id;
        try {
            const personList = await this.personService.list(userId);
            res.status(200).json({ persons: personList });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
}
