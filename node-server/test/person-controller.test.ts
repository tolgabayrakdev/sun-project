import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { PersonService } from '../src/services/person-service';
import { PersonController } from '../src/controllers/person-controller';
import { Request, Response } from 'express';


vi.mock('../src/services/person-service');

describe('PersonController', () => {
    let personController: PersonController;
    let personService: PersonService;

    beforeEach(() => {
        personService = new PersonService();
        personController = new PersonController();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should create a person', async () => {
        const req = {
            user: { id: 3 },
            body: {
                name: 'John',
                surname: 'Doe',
                email: 'john.doe@example.com',
                phone_number: '1234567890',
            },
        } as unknown as Request;
        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        } as unknown as Response;
        const createdPerson = { id: 3, ...req.body };

        // Mocking the create method of personService
        vi.spyOn(personService, 'create').mockResolvedValue(createdPerson);

        await personController.create(req, res);

        // Checking if personService.create was called with correct arguments
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'Person created.' });
    });


  
});


