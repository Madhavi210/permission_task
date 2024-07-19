

import { Request, Response } from 'express';
import { createRole } from '../service/role.service';
import { createModule } from '../service/role.service';

export async function addRole(req: Request, res: Response): Promise<void> {
    try {
        const { role } = req.body; // Assuming role is passed in the request body
        const newRole = await createRole({ role });
        res.status(201).json(newRole);
    } catch (error) {
        console.error('Error creating role:', error);
        res.status(500).json({ error: 'Failed to create role' });
    }
}


export async function addModule(req: Request, res: Response): Promise<void> {
    try {
        const { name } = req.body;
        const newModule = await createModule({
            name,
        });

        res.status(201).json(newModule);
    } catch (error) {
        console.error('Error creating module:', error);
        res.status(500).json({ error: 'Failed to create module' });
    }
}